import { useState } from "react";
import type { FormEvent } from "react";
import { sendContact } from "../lib/api";

export function Contact() {
  const [status, setStatus] = useState<{ kind: "ok" | "err" | ""; text: string }>({
    kind: "",
    text: "",
  });
  const [pending, setPending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !email || !message) {
      setStatus({ kind: "err", text: "Fill in every field." });
      return;
    }
    setPending(true);
    setStatus({ kind: "", text: "" });
    const res = await sendContact({ name, email, message });
    setPending(false);
    if (!res.ok) {
      setStatus({ kind: "err", text: res.error ?? "Could not send." });
      return;
    }
    form.reset();
    setStatus({
      kind: "ok",
      text: res.offline
        ? "Saved locally — Rust API offline. Message queued in this browser session."
        : `Signal received. Ref ${res.id?.slice(0, 8)}.`,
    });
  }

  return (
    <section className="section" id="contact">
      <div className="section-head">
        <h2>Contact</h2>
        <p>Collabs, courses, music drops, or studio builds — ping the Fishbowl.</p>
      </div>
      <div className="contact">
        <div>
          <p style={{ color: "var(--muted)", marginTop: 0 }}>
            We believe in simple, creative, flexible design standards — with a
            conservative dose of personality. Nick Shark Marino &amp; ASF Studios.
          </p>
          <p style={{ color: "var(--neon-cyan)" }}>
            <a href="https://github.com/asharksfishbowl" target="_blank" rel="noreferrer">
              github.com/asharksfishbowl
            </a>
          </p>
          <p style={{ color: "var(--neon-pink)" }}>
            <a
              href="https://www.youtube.com/@asharksfishbowl"
              target="_blank"
              rel="noreferrer"
            >
              youtube.com/@asharksfishbowl
            </a>
          </p>
        </div>
        <form onSubmit={onSubmit}>
          <label>
            Name
            <input name="name" autoComplete="name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows={5} required />
          </label>
          <button className="btn btn-primary" type="submit" disabled={pending}>
            {pending ? "Sending…" : "Send signal"}
          </button>
          <div className={`form-msg ${status.kind === "err" ? "error" : ""}`}>
            {status.text}
          </div>
        </form>
      </div>
    </section>
  );
}
