import { NextResponse } from "next/server";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req) {
  let d;
  try { d = await req.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }

  if (d.company_website) return NextResponse.json({ ok: true }); // honeypot
  const clean = (v, n) => String(v ?? "").trim().slice(0, n);
  const body = {
    name: clean(d.name, 100), business: clean(d.business, 150), email: clean(d.email, 200),
    businessType: clean(d.businessType, 80), websiteType: clean(d.websiteType, 80), details: clean(d.details, 3000),
  };
  if (!body.name || !EMAIL.test(body.email) || !body.businessType || !body.websiteType)
    return NextResponse.json({ error: "Please complete the required fields." }, { status: 422 });

  const endpoint = process.env.FORM_ENDPOINT;
  if (!endpoint)
    return NextResponse.json({ error: "The contact form is not connected yet. Please use WhatsApp or Instagram." }, { status: 501 });

  try {
    const payload = process.env.FORM_ACCESS_KEY ? { ...body, access_key: process.env.FORM_ACCESS_KEY } : body;
    const r = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    if (!r.ok) throw new Error(String(r.status));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong sending your message. Please try WhatsApp or Instagram." }, { status: 502 });
  }
}
