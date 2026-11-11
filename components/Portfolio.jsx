"use client";
import { useState } from "react";
import Preview from "./Preview";
import { categories, projects } from "@/data/site";

export default function Portfolio() {
  const [active, setActive] = useState("all");
  const list = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <div className="filters" role="tablist" aria-label="Project categories">
        {categories.map((c) => (
          <button key={c.id} role="tab" aria-selected={active === c.id} className={active === c.id ? "chip on" : "chip"} onClick={() => setActive(c.id)}>
            {c.label}
            <span>{c.id === "all" ? projects.length : projects.filter((p) => p.category === c.id).length}</span>
          </button>
        ))}
      </div>
      <div className="grid-work" key={active}>
        {list.map((p) => (
          <article key={p.id} className={p.placeholder ? "card work ph" : "card work"}>
            <div className="browser">
              <div className="bar"><i /><i /><i /><b>{p.url ? p.url.replace(/^https?:\/\//, "").replace(/\/$/, "") : "your-client-site.com"}</b></div>
              <Preview url={p.url} image={p.image} title={p.name} label={p.categoryLabel} />
            </div>
            <div className="work-body">
              <p className="eyebrow">{p.categoryLabel}</p>
              <h3>{p.name}</h3>
              <p className="muted">{p.description}</p>
              <ul className="tags">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
              {p.url ? (
                <a className="btn btn-ghost" href={p.url} target="_blank" rel="noopener noreferrer">View Live Website ↗</a>
              ) : (
                <span className="soon">Live link coming soon</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
