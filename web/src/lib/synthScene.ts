import * as THREE from "three";

/** Kilimanjaro brand palette — pink sun, cyan grid, lilac glow. */
const PALETTE = {
  sun: 0xff2bd6,
  glow: 0xb967ff,
  grid: 0x2de2e6,
  gridHot: 0xff2bd6,
  fog: 0x07010f,
  mountain: 0x1a0a2e,
  mountainEmissive: 0x2a1248,
  ridge: 0x2de2e6,
  snow: 0xeef6ff,
};

export type SynthSceneHandle = {
  setEnergy: (next: number) => void;
  dispose: () => void;
};

/**
 * Full-bleed synthwave Three.js stage for the Kilimanjaro hero —
 * neon sun, perspective grid, flat-topped Kibo + Mawenzi ridge.
 */
export function createSynthScene(container: HTMLElement): SynthSceneHandle {
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.domElement.className = "hero-three-canvas";
  renderer.domElement.setAttribute("aria-hidden", "true");
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(PALETTE.fog, 0.042);

  const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 200);
  camera.position.set(0, 2.5, 8.8);
  camera.lookAt(0, 1.25, -4);

  const ambient = new THREE.AmbientLight(0x4a2a6a, 0.55);
  scene.add(ambient);
  const key = new THREE.PointLight(PALETTE.sun, 2.4, 42);
  key.position.set(0, 4.5, -6);
  scene.add(key);
  const rim = new THREE.DirectionalLight(PALETTE.grid, 0.7);
  rim.position.set(-4, 3, 2);
  scene.add(rim);

  const sunGroup = buildSun();
  scene.add(sunGroup);

  const mountain = buildMountain();
  scene.add(mountain);

  const { mesh: gridMesh, update: updateGrid } = buildGrid();
  scene.add(gridMesh);

  const stars = buildStars();
  scene.add(stars);

  let energy = 0.22;
  let raf = 0;
  let width = 0;
  let height = 0;

  function resize() {
    const w = container.clientWidth || window.innerWidth;
    const h = container.clientHeight || window.innerHeight;
    if (w === width && h === height) return;
    width = w;
    height = h;
    camera.aspect = w / Math.max(h, 1);
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
  }

  function setEnergy(next: number) {
    energy = THREE.MathUtils.clamp(next, 0, 1);
  }

  const clock = new THREE.Clock();

  function frame() {
    raf = requestAnimationFrame(frame);
    resize();
    const t = clock.getElapsedTime();
    // Idle climb — soft ambient energy when nothing drives setEnergy
    const ambientEnergy = 0.18 + Math.sin(t * 0.55) * 0.08 + Math.sin(t * 1.1) * 0.04;
    const e = Math.max(energy, ambientEnergy);
    const pulse = 0.4 + e * 0.75;

    sunGroup.position.y = 3.15 + Math.sin(t * 0.4) * 0.08;
    sunGroup.userData.pulse(pulse, t);

    mountain.position.y = -0.12 + e * 0.1;
    mountain.rotation.y = Math.sin(t * 0.08) * 0.02;

    updateGrid(t, e);
    stars.rotation.y = t * 0.012;
    (stars.material as THREE.PointsMaterial).opacity = 0.38 + e * 0.3;

    camera.position.x = Math.sin(t * 0.14) * 0.32;
    camera.lookAt(0, 1.2 + e * 0.15, -4);

    renderer.render(scene, camera);
  }

  resize();
  frame();

  return {
    setEnergy,
    dispose() {
      cancelAnimationFrame(raf);
      renderer.dispose();
      sunGroup.traverse(disposeObject);
      mountain.traverse(disposeObject);
      gridMesh.traverse(disposeObject);
      stars.geometry.dispose();
      (stars.material as THREE.Material).dispose();
      renderer.domElement.parentNode?.removeChild(renderer.domElement);
    },
  };
}

function disposeObject(obj: THREE.Object3D) {
  const mesh = obj as THREE.Mesh;
  if (mesh.geometry) mesh.geometry.dispose();
  const mat = (obj as THREE.Mesh).material;
  if (mat) {
    if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
    else mat.dispose();
  }
}

function buildSun() {
  const group = new THREE.Group();
  group.position.set(0, 3.15, -12);

  const coreMat = new THREE.MeshBasicMaterial({ color: PALETTE.sun });
  const core = new THREE.Mesh(new THREE.CircleGeometry(2.25, 64), coreMat);
  group.add(core);

  const glowMat = new THREE.MeshBasicMaterial({
    color: PALETTE.glow,
    transparent: true,
    opacity: 0.35,
    depthWrite: false,
  });
  const glow = new THREE.Mesh(new THREE.CircleGeometry(3.5, 64), glowMat);
  glow.position.z = -0.05;
  group.add(glow);

  for (let i = 0; i < 5; i++) {
    const mat = new THREE.MeshBasicMaterial({
      color: PALETTE.sun,
      transparent: true,
      opacity: 0.55 - i * 0.08,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(2.4 + i * 0.28, 2.52 + i * 0.28, 64),
      mat,
    );
    ring.position.z = 0.02;
    group.add(ring);
  }

  const bandMat = new THREE.MeshBasicMaterial({
    color: 0x07010f,
    transparent: true,
    opacity: 0.88,
  });
  for (let i = 0; i < 6; i++) {
    const band = new THREE.Mesh(
      new THREE.PlaneGeometry(5.4, 0.14 + i * 0.02),
      bandMat,
    );
    band.position.y = -0.55 - i * 0.32;
    band.position.z = 0.04;
    group.add(band);
  }

  group.userData.pulse = (pulse: number, t: number) => {
    core.scale.setScalar(1 + pulse * 0.08);
    glow.scale.setScalar(1.05 + pulse * 0.12);
    glowMat.opacity = 0.28 + pulse * 0.22;
    group.rotation.z = Math.sin(t * 0.2) * 0.02;
  };

  return group;
}

/** Broad flat Kibo crater + Mawenzi spur — Kilimanjaro’s signature profile. */
function buildMountain() {
  const shape = new THREE.Shape();
  shape.moveTo(-14, -2);
  shape.lineTo(-12, -0.4);
  shape.lineTo(-9.5, 0.6);
  shape.lineTo(-7, 1.35);
  shape.lineTo(-4.5, 2.05);
  shape.lineTo(-2.8, 2.55);
  shape.lineTo(-1.4, 2.85);
  shape.lineTo(-0.2, 2.95);
  shape.lineTo(1.2, 2.98);
  shape.lineTo(2.8, 2.92);
  shape.lineTo(4.2, 2.75);
  shape.lineTo(5.2, 2.45);
  shape.lineTo(6.1, 2.15);
  shape.lineTo(7.0, 2.55);
  shape.lineTo(7.8, 2.7);
  shape.lineTo(8.5, 2.55);
  shape.lineTo(9.4, 2.0);
  shape.lineTo(10.8, 1.1);
  shape.lineTo(12.5, 0.2);
  shape.lineTo(14, -2);
  shape.closePath();

  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: 1.6,
    bevelEnabled: false,
  });
  geo.translate(0, 0, -0.8);

  const mat = new THREE.MeshStandardMaterial({
    color: PALETTE.mountain,
    emissive: PALETTE.mountainEmissive,
    emissiveIntensity: 0.35,
    roughness: 0.92,
    metalness: 0.05,
    flatShading: true,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(0, -0.2, -7.5);
  mesh.scale.set(0.72, 0.72, 0.72);

  // Glacier on the flat crater rim
  const snowShape = new THREE.Shape();
  snowShape.moveTo(-1.4, 2.72);
  snowShape.lineTo(-0.2, 2.82);
  snowShape.lineTo(1.2, 2.85);
  snowShape.lineTo(2.6, 2.78);
  snowShape.lineTo(3.6, 2.62);
  snowShape.lineTo(2.4, 2.48);
  snowShape.lineTo(0.8, 2.45);
  snowShape.lineTo(-0.6, 2.5);
  snowShape.closePath();
  const snow = new THREE.Mesh(
    new THREE.ShapeGeometry(snowShape),
    new THREE.MeshBasicMaterial({
      color: PALETTE.snow,
      transparent: true,
      opacity: 0.88,
    }),
  );
  snow.position.set(0, -0.2, -6.68);
  snow.scale.set(0.72, 0.72, 0.72);

  const ridge = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-9.5, 0.6, 0.05),
      new THREE.Vector3(-4.5, 2.05, 0.05),
      new THREE.Vector3(-0.2, 2.95, 0.05),
      new THREE.Vector3(2.8, 2.92, 0.05),
      new THREE.Vector3(5.2, 2.45, 0.05),
      new THREE.Vector3(7.0, 2.55, 0.05),
      new THREE.Vector3(7.8, 2.7, 0.05),
      new THREE.Vector3(10.8, 1.1, 0.05),
    ]),
    new THREE.LineBasicMaterial({
      color: PALETTE.ridge,
      transparent: true,
      opacity: 0.6,
    }),
  );
  ridge.scale.set(0.72, 0.72, 0.72);
  ridge.position.copy(mesh.position);
  ridge.position.z += 0.9;

  const group = new THREE.Group();
  group.add(mesh);
  group.add(snow);
  group.add(ridge);
  return group;
}

function buildGrid() {
  const cols = 48;
  const rows = 36;
  const positions: number[] = [];
  const colors: number[] = [];

  for (let z = 0; z <= rows; z++) {
    for (let x = 0; x <= cols; x++) {
      const px = (x / cols - 0.5) * 28;
      const pz = -2 - (z / rows) * 22;
      positions.push(px, 0, pz);
      colors.push(0.18, 0.89, 0.9);
    }
  }

  const indices: number[] = [];
  const stride = cols + 1;
  for (let z = 0; z <= rows; z++) {
    for (let x = 0; x < cols; x++) {
      const a = z * stride + x;
      indices.push(a, a + 1);
    }
  }
  for (let x = 0; x <= cols; x++) {
    for (let z = 0; z < rows; z++) {
      const a = z * stride + x;
      indices.push(a, a + stride);
    }
  }

  const geo = new THREE.BufferGeometry();
  const posAttr = new THREE.Float32BufferAttribute(positions, 3);
  geo.setAttribute("position", posAttr);
  geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geo.setIndex(indices);

  const mat = new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0.55,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const mesh = new THREE.LineSegments(geo, mat);
  mesh.position.y = -1.15;

  const cyan = new THREE.Color(PALETTE.grid);
  const pink = new THREE.Color(PALETTE.gridHot);

  const update = (t: number, energy: number) => {
    const arr = posAttr.array as Float32Array;
    const colorArr = geo.attributes.color.array as Float32Array;
    const wave = 0.7 + energy * 1.8;
    const scroll = (t * 1.4) % 1;
    for (let z = 0; z <= rows; z++) {
      for (let x = 0; x <= cols; x++) {
        const i = (z * stride + x) * 3;
        const px = arr[i];
        const pz = arr[i + 2];
        const ripples =
          Math.sin(px * 0.55 + t * 2.1 + scroll) * 0.09 * wave +
          Math.sin(pz * 0.9 + t * 1.5) * 0.12 * wave +
          energy * Math.sin(px * 1.4 + pz * 0.7 + t * 3.5) * 0.16;
        arr[i + 1] = ripples;

        const fade = THREE.MathUtils.clamp((-pz - 2) / 22, 0, 1);
        const mix = 0.35 + Math.sin(px * 0.25 + t * 0.6) * 0.35;
        const c = cyan.clone().lerp(pink, THREE.MathUtils.clamp(mix, 0, 1));
        const bright = 0.4 + energy * 0.45 + (1 - fade) * 0.25;
        colorArr[i] = c.r * bright;
        colorArr[i + 1] = c.g * bright;
        colorArr[i + 2] = c.b * bright;
      }
    }
    posAttr.needsUpdate = true;
    geo.attributes.color.needsUpdate = true;
    mat.opacity = 0.42 + energy * 0.32;
  };

  return { mesh, update };
}

function buildStars() {
  const count = 420;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 60;
    positions[i * 3 + 1] = Math.random() * 28 - 2;
    positions[i * 3 + 2] = -8 - Math.random() * 40;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const mat = new THREE.PointsMaterial({
    color: 0xf4ecff,
    size: 0.06,
    transparent: true,
    opacity: 0.45,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  return new THREE.Points(geo, mat);
}
