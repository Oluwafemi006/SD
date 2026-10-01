import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { projects, services, site } from "@/data/site";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  const t_services = useTranslations("Services");

  return (
    <footer className="bg-[#071827] py-16 text-slate-300">
      <div className="site-container">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="block w-[190px]" aria-label="SD International Group, accueil">
              <span className="relative block h-[86px] overflow-hidden">
                <Image
                  src="/images/logo-sd-international-new.png"
                  alt="Logo SD International Group"
                  width={190}
                  height={127}
                  className="absolute left-0 top-0 h-auto w-full"
                />
              </span>
              <span className="mt-2 block text-sm font-extrabold uppercase text-white">
                SD International Group
              </span>
            </Link>
            <p className="mt-5 text-sm leading-7">
              {t("about_text")}
            </p>
          </div>
          <div>
            <h2 className="font-bold text-white">{t("links")}</h2>
            <div className="mt-5 flex flex-col gap-3 text-sm">
              <Link href="/#a-propos">{t("about")}</Link>
              <Link href="/#services">{t("services")}</Link>
              {projects.length > 0 && <Link href="/realisations">{t("projects")}</Link>}
              <Link href="/hse-qualite">{t("hse")}</Link>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-white">{t("services")}</h2>
            <div className="mt-5 flex flex-col gap-3 text-sm">
              {services.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}` as any}>
                  {t_services(`${s.slug}.title` as any)}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-bold text-white">{t("contact")}</h2>
            <div className="mt-5 flex flex-col gap-4 text-sm">
              <a
                aria-label={`Appeler le ${site.phone}`}
                className="flex gap-2"
                href={`tel:${site.phoneHref}`}
              >
                <Phone className="shrink-0" size={17} />
                {site.phone}
              </a>
              <a
                aria-label={`Envoyer un e-mail à ${site.email}`}
                className="flex gap-2"
                href={`mailto:${site.email}`}
              >
                <Mail className="shrink-0" size={17} />
                <span className="break-all">{site.email}</span>
              </a>
              <a
                aria-label="Échanger sur WhatsApp"
                className="flex gap-2"
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon className="shrink-0 text-[#25d366]" size={17} />
                <span>WhatsApp</span>
              </a>
              <span aria-label={`Adresse : ${site.address}`} className="flex gap-2 leading-6">
                <MapPin className="mt-0.5 shrink-0" size={17} />
                {site.address}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs sm:flex-row">
          <span>© {new Date().getFullYear()} SD International Group. {t("rights")}</span>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link className="hover:text-white" href="/mentions-legales">
              {t("mentions")}
            </Link>
            <Link className="hover:text-white" href="/politique-confidentialite">
              {t("privacy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
