"use client";
import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  async function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setState("sending"); const form = event.currentTarget; const response = await fetch("/api/contact", { method: "POST", body: new FormData(form) }).catch(() => null); if (response?.ok) { form.reset(); setState("success"); } else setState("error"); }
  const field = "min-h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-navy outline-none focus:border-brand";
  return <form onSubmit={submit} className="grid gap-5 rounded-lg bg-white p-6 text-ink shadow-soft sm:grid-cols-2 sm:p-8">
    <div><label className="mb-2 block text-sm font-bold" htmlFor="name">Nom complet *</label><input className={field} id="name" name="name" required minLength={2} /></div>
    <div><label className="mb-2 block text-sm font-bold" htmlFor="organization">Entreprise / Organisation</label><input className={field} id="organization" name="organization" /></div>
    <div><label className="mb-2 block text-sm font-bold" htmlFor="phone">Téléphone *</label><input className={field} id="phone" name="phone" type="tel" required /></div>
    <div><label className="mb-2 block text-sm font-bold" htmlFor="email">E-mail *</label><input className={field} id="email" name="email" type="email" required /></div>
    <div className="sm:col-span-2"><label className="mb-2 block text-sm font-bold" htmlFor="service">Domaine concerné *</label><select className={field} id="service" name="service" required defaultValue=""><option value="" disabled>Sélectionner un domaine</option><option>BTP, Aménagement & Génie Civil</option><option>Énergie & Réseaux électriques HT/MT/BT</option><option>Énergie solaire</option><option>Études APD & Environnement</option><option>Import-Export & Logistique</option><option>Fournitures & équipements</option><option>Lubrifiants industriels & marins</option><option>Autre demande</option></select></div>
    <div className="sm:col-span-2"><label className="mb-2 block text-sm font-bold" htmlFor="subject">Objet *</label><input className={field} id="subject" name="subject" required /></div>
    <div className="sm:col-span-2"><label className="mb-2 block text-sm font-bold" htmlFor="message">Message *</label><textarea className={`${field} min-h-36 py-3`} id="message" name="message" required minLength={15} placeholder="Décrivez votre besoin, le lieu et les délais envisagés." /></div>
    <div className="absolute -left-[9999px]" aria-hidden="true"><label htmlFor="website">Site web</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
    <div className="sm:col-span-2"><button disabled={state === "sending"} className="btn btn-primary w-full sm:w-auto" type="submit"><Send size={18}/>{state === "sending" ? "Envoi en cours…" : "Envoyer la demande"}</button>{state === "success" && <p role="status" className="mt-4 font-bold text-green-700">Votre demande a bien été transmise.</p>}{state === "error" && <p role="alert" className="mt-4 font-bold text-red-700">L’envoi n’a pas abouti. Vous pouvez aussi nous contacter par téléphone ou e-mail.</p>}</div>
  </form>;
}
