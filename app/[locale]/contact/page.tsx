import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { site } from "@/data/site";
import { getTranslations } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Contact" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: "/contact" },
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Contact" });

  return (
    <main>
      <section className="bg-navy py-20 text-white">
        <div className="site-container">
          <span className="eyebrow !text-blue-300">{t("title")}</span>
          <h1 className="heading max-w-3xl font-extrabold">
            {t("description")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {t("info.title")}
          </p>
        </div>
      </section>
      <section className="section">
        <div className="site-container grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <aside>
            <h2 className="text-2xl font-extrabold text-navy">{t("info.title")}</h2>
            <div className="mt-8 grid">
              <a
                aria-label={`Appeler SD International Group au ${site.phone}`}
                href={`tel:${site.phoneHref}`}
                className="flex min-h-16 items-center gap-4 border-b py-4"
              >
                <Phone className="shrink-0 text-brand" />
                <span className="font-semibold">{site.phone}</span>
              </a>
              <a
                aria-label={`Envoyer un e-mail à ${site.email}`}
                href={`mailto:${site.email}`}
                className="flex min-h-16 items-center gap-4 border-b py-4"
              >
                <Mail className="shrink-0 text-brand" />
                <span className="break-all font-semibold">{site.email}</span>
              </a>
              <div
                aria-label={`Adresse : ${site.address}`}
                className="flex min-h-16 items-center gap-4 border-b py-4"
              >
                <MapPin className="shrink-0 text-brand" />
                <span className="font-semibold leading-6">{site.address}</span>
              </div>
              <a
                aria-label="Échanger avec SD International Group sur WhatsApp"
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-16 items-center gap-4 border-b py-4 font-semibold"
              >
                <WhatsAppIcon className="shrink-0 text-[#25d366]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </aside>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
