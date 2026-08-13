import { NextResponse } from "next/server";

const required = ["name", "phone", "email", "service", "subject", "message"];
export async function POST(request: Request) {
  const form = await request.formData();
  if (form.get("website")) return NextResponse.json({ ok: true });
  for (const field of required) if (!String(form.get(field) || "").trim()) return NextResponse.json({ error: `Champ requis : ${field}` }, { status: 400 });
  const email = String(form.get("email"));
  if (!/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({ error: "E-mail invalide" }, { status: 400 });
  const payload = Object.fromEntries([...form.entries()].filter(([key]) => key !== "website").map(([key, value]) => [key, String(value).slice(0, 5000)]));
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) return NextResponse.json({ error: "Service de messagerie non configuré" }, { status: 503 });
  const response = await fetch(webhook, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload), signal: AbortSignal.timeout(8000) }).catch(() => null);
  if (!response?.ok) return NextResponse.json({ error: "Échec de transmission" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
