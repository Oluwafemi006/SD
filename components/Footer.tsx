import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { services, site } from "@/data/site";

export default function Footer() { return <footer className="bg-[#071827] py-16 text-slate-300"><div className="site-container"><div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
  <div><Link href="/" className="relative block h-[104px] w-[130px]" aria-label="SD International Group, accueil"><Image src="/images/logo-sd-international.png" alt="Logo SD International Group" fill sizes="130px" className="object-contain" /></Link><p className="mt-5 text-sm leading-7">Des solutions techniques et opérationnelles pour les projets d’infrastructures, d’énergie et d’approvisionnement.</p></div>
  <div><h2 className="font-bold text-white">Navigation</h2><div className="mt-5 flex flex-col gap-3 text-sm"><Link href="/#a-propos">À propos</Link><Link href="/#services">Services</Link><Link href="/realisations">Réalisations</Link><Link href="/hse-qualite">HSE & Qualité</Link></div></div>
  <div><h2 className="font-bold text-white">Expertises</h2><div className="mt-5 flex flex-col gap-3 text-sm">{services.map(s => <Link key={s.slug} href={`/services/${s.slug}`}>{s.title}</Link>)}</div></div>
  <div><h2 className="font-bold text-white">Contact</h2><div className="mt-5 flex flex-col gap-4 text-sm"><a className="flex gap-2" href={`tel:${site.phoneHref}`}><Phone size={17}/>{site.phone}</a><a className="flex gap-2" href={`mailto:${site.email}`}><Mail size={17}/>{site.email}</a><span className="flex gap-2"><MapPin size={17}/>{site.location}</span></div></div>
  </div><div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs sm:flex-row"><span>© {new Date().getFullYear()} SD International Group. Tous droits réservés.</span><span>Mentions légales · Politique de confidentialité</span></div></div></footer>; }
