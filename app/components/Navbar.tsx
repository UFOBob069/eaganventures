"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="shell nav-inner">
          <a
            href="#top"
            className="wordmark"
            aria-label="Eagan Ventures home"
            onClick={() => setOpen(false)}
          >
            eagan<span>ventures</span>
            <span className="brand-star" aria-hidden="true">
              ✳
            </span>
          </a>
          <button
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="site-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
          <nav
            id="site-navigation"
            aria-label="Main navigation"
            className={open ? "navigation is-open" : "navigation"}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setOpen(false);
                document
                  .querySelector<HTMLButtonElement>(".menu-toggle")
                  ?.focus();
              }
            }}
          >
            <a href="#investments" onClick={() => setOpen(false)}>
              Investments
            </a>
            <a href="#build" onClick={() => setOpen(false)}>
              Builds
            </a>
            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>
            <a
              className="nav-connect"
              href="#contact"
              onClick={() => setOpen(false)}
            >
              Let&apos;s connect
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
