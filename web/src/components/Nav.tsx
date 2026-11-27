import { useState } from "react";

const LINKS = [
  { href: "#businesses", label: "Businesses" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#map", label: "Neon Map" },
  { href: "#youtube", label: "YouTube" },
  { href: "#music", label: "Music" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-bar">
        <a className="nav-brand" href="#top" onClick={() => setOpen(false)}>
          A Shark&apos;s Fishbowl
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul id="site-nav" className={`nav-links ${open ? "is-open" : ""}`}>
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
