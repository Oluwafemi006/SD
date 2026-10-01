"use client";
import { Link, usePathname } from "@/i18n/routing";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { projects } from "@/data/site";
import { useTranslations, useLocale } from "next-intl";

export default function Header() {
  const t = useTranslations("Header");
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/#a-propos", label: t("about") },
    { href: "/#services", label: t("services") },
    ...(projects.length ? [{ href: "/realisations", label: t("projects") }] : []),
    { href: "/hse-qualite", label: "HSE & Qualité" },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/95 backdrop-blur-xl">
      <div className="site-container flex h-[88px] items-center justify-between gap-6">
        <Link
          href="/"
          className="relative block h-[72px] w-[112px] shrink-0"
          aria-label="SD International Group, accueil"
        >
          <Image
            src="/images/logo-sd-international-new.png"
            alt="Logo SD International Group"
            fill
            priority
            sizes="112px"
            className="object-contain"
          />
        </Link>
        <nav
          className="hidden items-center gap-7 text-sm font-bold lg:flex"
          aria-label="Navigation principale"
        >
          {links.map((l) => (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            <Link className="hover:text-brand" key={l.href} href={l.href as any}>
              {l.label}
            </Link>
          ))}
          <div className="flex gap-2 border-l border-slate-200 pl-7">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            <Link href={pathname as any} locale="fr" className={locale === "fr" ? "text-brand" : "text-muted"}>FR</Link>
            <span className="text-muted">|</span>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            <Link href={pathname as any} locale="en" className={locale === "en" ? "text-brand" : "text-muted"}>EN</Link>
          </div>
        </nav>
        <button
          className="grid size-11 place-items-center lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-menu"
          className="border-t bg-white px-5 py-5 lg:hidden"
          aria-label="Navigation mobile"
        >
          <div className="site-container flex flex-col gap-1">
            {links.map((l) => (
              <Link
                className="border-b border-slate-100 py-3 font-bold"
                onClick={() => setOpen(false)}
                key={l.href}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                href={l.href as any}
              >
                {l.label}
              </Link>
            ))}
            <div className="flex gap-4 border-b border-slate-100 py-3 font-bold">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <Link href={pathname as any} locale="fr" className={locale === "fr" ? "text-brand" : "text-muted"}>FR</Link>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <Link href={pathname as any} locale="en" className={locale === "en" ? "text-brand" : "text-muted"}>EN</Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
