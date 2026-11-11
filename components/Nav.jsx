"use client";
import { useState } from "react";

const links = [["Work", "#work"], ["Services", "#services"], ["Plans", "#plans"], ["Process", "#process"], ["About", "#about"], ["Contact", "#contact"]];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a href="#top" className="logo">Simran <em>B.</em></a>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
        <nav className={open ? "links open" : "links"} aria-label="Primary">
          {links.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
          <a href="#contact" className="btn btn-sm" onClick={() => setOpen(false)}>Start a project</a>
        </nav>
      </div>
    </header>
  );
}
