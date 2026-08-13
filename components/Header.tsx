"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [{ href: "/#a-propos", label: "À propos" }, { href: "/#services", label: "Services" }, { href: "/realisations", label: "Réalisations" }, { href: "/hse-qualite", label: "HSE & Qualité" }, { href: "/contact", label: "Contact" }];

export default function Header() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/95 backdrop-blur-xl"><div className="site-container flex h-[88px] items-center justify-between gap-6">
    <Link href="/" className="relative block h-[68px] w-[85px] shrink-0" aria-label="SD International Group, accueil"><Image src="/images/logo-sd-international.png" alt="Logo SD International Group" fill priority sizes="85px" className="object-contain" /></Link>
    <nav className="hidden items-center gap-7 text-sm font-bold lg:flex" aria-label="Navigation principale">{links.map(l => <Link className="hover:text-brand" key={l.href} href={l.href}>{l.label}</Link>)}<Link href="/contact" className="btn btn-primary">Contacter l’entreprise</Link></nav>
    <button className="grid size-11 place-items-center lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open} aria-controls="mobile-menu">{open ? <X /> : <Menu />}</button>
  </div>{open && <nav id="mobile-menu" className="border-t bg-white px-5 py-5 lg:hidden" aria-label="Navigation mobile"><div className="site-container flex flex-col gap-1">{links.map(l => <Link className="border-b border-slate-100 py-3 font-bold" onClick={() => setOpen(false)} key={l.href} href={l.href}>{l.label}</Link>)}<Link onClick={() => setOpen(false)} href="/contact" className="btn btn-primary mt-3">Contacter l’entreprise</Link></div></nav>}</header>;
}
