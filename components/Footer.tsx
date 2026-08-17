import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { services, site } from "@/data/site";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function Footer() { return <footer className="bg-[#071827] py-16 text-slate-300"><div className="site-container"><div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
  <div><Link href="/" className="relative block h-[116px] w-[174px] rounded-md bg-white p-2" aria-label="SD International Group, accueil"><Image src="/images/logo-sd-international-new.png" alt="Logo SD International Group" fill sizes="174px" className="object-contain p-2" /></Link><p className="mt-5 text-sm leading-7">Des compétences complémentaires pour accompagner les projets, les opérations et les besoins d’approvisionnement.</p></div>
  <div><h2 className="font-bold text-white">Navigation</h2><div className="mt-5 flex flex-col gap-3 text-sm"><Link href="/#a-propos">À propos</Link><Link href="/#services">Services</Link><Link href="/realisations">Réalisations</Link><Link href="/hse-qualite">HSE & Qualité</Link></div></div>
  <div><h2 className="font-bold text-white">Expertises</h2><div className="mt-5 flex flex-col gap-3 text-sm">{services.map(s => <Link key={s.slug} href={`/services/${s.slug}`}>{s.title}</Link>)}</div></div>
  <div><h2 className="font-bold text-white">Contact</h2><div className="mt-5 flex flex-col gap-4 text-sm"><a className="flex gap-2" href={`tel:${site.phoneHref}`}><Phone size={17}/>{site.phone}</a><a className="flex gap-2" href={`mailto:${site.email}`}><Mail size={17}/>{site.email}</a><a className="flex gap-2" href={site.whatsapp} target="_blank" rel="noreferrer"><WhatsAppIcon className="shrink-0 text-[#25d366]" size={17}/><span>WhatsApp</span></a><span className="flex gap-2"><MapPin size={17}/>{site.location}</span></div></div>
  </div><div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs sm:flex-row"><span>© {new Date().getFullYear()} SD International Group. Tous droits réservés.</span><span>Mentions légales · Politique de confidentialité</span></div></div></footer>; }
