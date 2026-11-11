import { NextResponse } from "next/server";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

export async function POST(req) {
  let d;
  try { d = await req.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }

  if (d.company_website) return NextResponse.json({ ok: true }); // honeypot
  const clean = (v, n) => String(v ?? "").trim().slice(0, n);
  const b = {
    name: clean(d.name, 100), business: clean(d.business, 150), email: clean(d.email, 200),
    businessType: clean(d.businessType, 80), websiteType: clean(d.websiteType, 80),
    plan: clean(d.plan, 80), details: clean(d.details, 3000),
  };
  if (!b.name || !EMAIL.test(b.email) || !b.businessType || !b.websiteType)
    return NextResponse.json({ error: "Please complete the required fields." }, { status: 422 });

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.RESEND_FROM || "Simran B. Website <onboarding@resend.dev>";
  if (!key || !to)
    return NextResponse.json({ error: "The contact form is not connected yet. Please message on Instagram instead." }, { status: 501 });

  const rows = [["Name", b.name], ["Business", b.business || "-"], ["Email", b.email], ["Business type", b.businessType], ["Website wanted", b.websiteType], ["Plan", b.plan || "-"], ["Details", b.details || "-"]];
  const html = `<h2>New website enquiry</h2>` + rows.map(([k, v]) => `<p><strong>${k}:</strong><br>${esc(v).replace(/\n/g, "<br>")}</p>`).join("");
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [to], reply_to: b.email, subject: `New enquiry from ${b.name}${b.business ? ` (${b.business})` : ""}`, html, text }),
    });
    if (!r.ok) throw new Error(String(r.status));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong sending your message. Please message on Instagram instead." }, { status: 502 });
  }
}
