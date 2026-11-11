"use client";
import "@/app/hero.css";
import { useEffect, useState } from "react";
import Preview from "./Preview";
import { demos } from "@/data/site";

const host = (u) => u.replace(/^https?:\/\//, "").replace(/\/$/, "");

export default function HeroShowcase() {
  const n = demos.length;
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (paused || reduced) return;
    const t = setInterval(() => setI((v) => (v + 1) % n), 4500);
    return () => clearInterval(t);
  }, [paused, reduced, n]);

  return (
    <div
      className="hs"
      aria-label="Rotating previews of Simran's website projects"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="blob" />
      {demos.map((d, idx) => {
        const pos = (idx - i + n) % n;
        return (
          <div key={d.id} className={`hs-card pos${pos}`} aria-hidden={pos !== 0}>
            <div className="browser">
              <div className="bar"><i /><i /><i /><b>{host(d.url)}</b></div>
              <Preview url={d.url} image={d.image} title={d.title} label={d.industry} />
            </div>
          </div>
        );
      })}
      {demos.map((d, idx) => (
        <div key={d.id} className={idx === i ? "hs-phone on" : "hs-phone"} aria-hidden={idx !== i}>
          <div className="phone">
            <Preview url={d.url} image={d.mobileImage} title={`${d.title} mobile`} baseW={390} baseH={800} label={d.industry} />
          </div>
        </div>
      ))}
      <div className="hs-meta">
        <span key={i} className="hs-label">{demos[i].industry}</span>
        <div className="hs-dots">
          {demos.map((d, idx) => (
            <button key={d.id} aria-label={`Show ${d.industry}`} aria-current={idx === i} className={idx === i ? "on" : ""} onClick={() => setI(idx)} />
          ))}
        </div>
      </div>
    </div>
  );
}
