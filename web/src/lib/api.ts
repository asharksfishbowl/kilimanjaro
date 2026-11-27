import {
  SAMPLE_MEDIA,
  SAMPLE_SITE,
  type MediaBundle,
  type SitePayload,
} from "../data/sample";

const RUST_API = import.meta.env.PUBLIC_RUST_API ?? "http://127.0.0.1:3848";
const PYTHON_API = import.meta.env.PUBLIC_PYTHON_API ?? "http://127.0.0.1:3849";

async function fetchJson<T>(url: string, init?: RequestInit): Promise<T | null> {
  try {
    const res = await fetch(url, {
      ...init,
      headers: { Accept: "application/json", ...(init?.headers ?? {}) },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export async function loadSite(): Promise<{ data: SitePayload; source: "api" | "sample" }> {
  const data = await fetchJson<SitePayload>(`${RUST_API}/api/site`);
  if (data) return { data, source: "api" };
  return { data: SAMPLE_SITE, source: "sample" };
}

export async function loadMedia(): Promise<{ data: MediaBundle; source: "api" | "sample" }> {
  const data = await fetchJson<MediaBundle>(`${PYTHON_API}/api/media`);
  if (data) return { data, source: "api" };
  return { data: SAMPLE_MEDIA, source: "sample" };
}

export async function sendContact(input: {
  name: string;
  email: string;
  message: string;
}): Promise<{ ok: boolean; id?: string; error?: string; offline?: boolean }> {
  try {
    const res = await fetch(`${RUST_API}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(input),
    });
    if (!res.ok) {
      const text = await res.text();
      return { ok: false, error: text || "Request failed" };
    }
    const body = (await res.json()) as { ok: boolean; id: string };
    return body;
  } catch {
    return {
      ok: true,
      id: `local-${Date.now()}`,
      offline: true,
    };
  }
}
