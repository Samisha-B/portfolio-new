"use client";
import { useState } from "react";
import { businessTypes, websiteTypes } from "@/data/site";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  async function onSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const d = Object.fromEntries(f.entries());
    const er = {};
    if (!d.name?.trim()) er.name = "Please enter your name.";
    if (!EMAIL.test(d.email || "")) er.email = "Please enter a valid email address.";
    if (!d.businessType) er.businessType = "Please choose a business type.";
    if (!d.websiteType) er.websiteType = "Please choose an option.";
    if ((d.details || "").length > 3000) er.details = "Please keep this under 3000 characters.";
    setErrors(er);
    if (Object.keys(er).length) return;

    setStatus({ state: "sending", msg: "" });
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(j.error || "Something went wrong.");
      setStatus({ state: "ok", msg: "Thank you! Your message has been sent. I'll reply personally soon." });
      e.target.reset();
    } catch (err) {
      setStatus({ state: "err", msg: err.message });
    }
  }

  const Err = ({ id }) => (errors[id] ? <small className="err" id={`${id}-e`} role="alert">{errors[id]}</small> : null);
  const a = (id) => ({ "aria-invalid": !!errors[id], "aria-describedby": errors[id] ? `${id}-e` : undefined });

  return (
    <form onSubmit={onSubmit} noValidate className="form">
      <div className="row">
        <label>Name *<input name="name" autoComplete="name" {...a("name")} /><Err id="name" /></label>
        <label>Business name<input name="business" autoComplete="organization" /></label>
      </div>
      <label>Email address *<input name="email" type="email" autoComplete="email" {...a("email")} /><Err id="email" /></label>
      <div className="row">
        <label>Business type *
          <select name="businessType" defaultValue="" {...a("businessType")}>
            <option value="" disabled>Select...</option>
            {businessTypes.map((b) => <option key={b}>{b}</option>)}
          </select><Err id="businessType" />
        </label>
        <label>What kind of website are you looking for? *
          <select name="websiteType" defaultValue="" {...a("websiteType")}>
            <option value="" disabled>Select...</option>
            {websiteTypes.map((b) => <option key={b}>{b}</option>)}
          </select><Err id="websiteType" />
        </label>
      </div>
      <label>Additional project details<textarea name="details" rows={5} maxLength={3000} {...a("details")} /><Err id="details" /></label>
      <input name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hp" />
      <button className="btn" disabled={status.state === "sending"}>{status.state === "sending" ? "Sending..." : "Send enquiry"}</button>
      <p className={`status ${status.state}`} role="status" aria-live="polite">{status.msg}</p>
    </form>
  );
}
