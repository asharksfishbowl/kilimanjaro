import { useEffect, useMemo, useState } from "react";
import DeckGL from "@deck.gl/react";
import { ArcLayer, ScatterplotLayer, TextLayer } from "@deck.gl/layers";
import { HexagonLayer } from "@deck.gl/aggregation-layers";
import type { MapArc, MapNode } from "../data/sample";

type Props = {
  nodes: MapNode[];
  arcs: MapArc[];
};

const INITIAL_VIEW = {
  longitude: -20,
  latitude: 20,
  zoom: 1.35,
  pitch: 45,
  bearing: -10,
};

export default function NeonMapCanvas({ nodes, arcs }: Props) {
  const [hover, setHover] = useState("Drag to orbit the synthwave circuit");
  const [tick, setTick] = useState(0);

  // Slower pulse — was 120ms and fought the hero for main-thread time
  useEffect(() => {
    const id = window.setInterval(() => setTick((t) => t + 1), 400);
    return () => window.clearInterval(id);
  }, []);

  const hexData = useMemo(
    () =>
      nodes.flatMap((n) => {
        const count = Math.round(8 + n.intensity * 24);
        return Array.from({ length: count }, (_, i) => ({
          position: [
            n.longitude + Math.sin(i + tick * 0.02) * 0.35 * n.intensity,
            n.latitude + Math.cos(i * 1.3) * 0.25 * n.intensity,
          ] as [number, number],
        }));
      }),
    [nodes, tick],
  );

  const layers = useMemo(() => {
    const pulse = 0.55 + Math.sin(tick * 0.08) * 0.25;
    return [
      new HexagonLayer({
        id: "neon-hex",
        data: hexData,
        getPosition: (d: { position: [number, number] }) => d.position,
        radius: 90000,
        elevationScale: 1200,
        extruded: true,
        coverage: 0.85,
        colorRange: [
          [45, 226, 230],
          [5, 255, 161],
          [185, 103, 255],
          [255, 43, 214],
          [247, 179, 43],
          [255, 110, 199],
        ],
        elevationRange: [0, 3000],
        opacity: 0.55,
      }),
      new ArcLayer({
        id: "neon-arcs",
        data: arcs,
        getSourcePosition: (d: MapArc) => d.source,
        getTargetPosition: (d: MapArc) => d.target,
        getSourceColor: [45, 226, 230, 220],
        getTargetColor: [255, 43, 214, 220],
        getWidth: 3,
        greatCircle: true,
        pickable: true,
        onHover: (info) => {
          const obj = info.object as MapArc | null;
          setHover(obj ? obj.label : "Drag to orbit the synthwave circuit");
        },
      }),
      new ScatterplotLayer({
        id: "neon-nodes",
        data: nodes,
        getPosition: (d: MapNode) => [d.longitude, d.latitude],
        getRadius: (d: MapNode) => 50000 + d.intensity * 80000 * pulse,
        radiusUnits: "meters",
        getFillColor: (d: MapNode) =>
          d.kind === "summit"
            ? [247, 179, 43, 230]
            : d.kind === "home"
              ? [255, 43, 214, 230]
              : [45, 226, 230, 210],
        getLineColor: [255, 255, 255, 180],
        lineWidthMinPixels: 1,
        stroked: true,
        pickable: true,
        onHover: (info) => {
          const obj = info.object as MapNode | null;
          setHover(
            obj ? `${obj.name} · ${obj.kind}` : "Drag to orbit the synthwave circuit",
          );
        },
      }),
      new TextLayer({
        id: "neon-labels",
        data: nodes,
        getPosition: (d: MapNode) => [d.longitude, d.latitude],
        getText: (d: MapNode) => d.name.toUpperCase(),
        getSize: 13,
        getColor: [244, 236, 255, 220],
        getTextAnchor: "middle",
        getAlignmentBaseline: "top",
        getPixelOffset: [0, 18],
        fontFamily: "Orbitron, sans-serif",
        outlineWidth: 2,
        outlineColor: [10, 2, 24, 220],
      }),
    ];
  }, [arcs, hexData, nodes, tick]);

  return (
    <>
      <DeckGL
        initialViewState={INITIAL_VIEW}
        controller
        layers={layers}
        style={{
          background: "radial-gradient(circle at 40% 30%, #1a0a33, #05010c 70%)",
        }}
        getTooltip={({ object }) =>
          object && "label" in object
            ? { text: String((object as MapArc).label) }
            : object && "name" in object
              ? { text: String((object as MapNode).name) }
              : null
        }
      />
      <div className="map-caption">
        <strong>Live layer stack</strong>
        {hover}
      </div>
    </>
  );
}
