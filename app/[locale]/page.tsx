import { Link } from "@/i18n/routing";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  HardHat,
  MessageSquareText,
  Settings,
  ShieldCheck,
  Target,
  Workflow,
} from "lucide-react";
import ImageLightbox from "@/components/ImageLightbox";
import ExpertiseCarousel from "@/components/ExpertiseCarousel";
import HeroCarousel from "@/components/HeroCarousel";
import FadeIn from "@/components/FadeIn";
import { projects } from "@/data/site";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");

  const strengths = [
    {
      icon: Target,
      title: t("Why.points.1.title"),
      description: t("Why.points.1.desc"),
    },
    {
      icon: Workflow,
      title: t("Why.points.2.title"),
      description: t("Why.points.2.desc"),
    },
    {
      icon: ShieldCheck,
      title: t("Why.points.3.title"),
      description: t("Why.points.3.desc"),
    },
  ];

  const processSteps = [
    {
      icon: MessageSquareText,
      number: "01",
      title: "Écouter",
      description: "Comprendre le besoin, le contexte, les objectifs et les contraintes.",
    },
    {
      icon: ClipboardCheck,
      number: "02",
      title: "Cadrer",
      description: "Définir le périmètre, les priorités et les ressources nécessaires.",
    },
    {
      icon: Settings,
      number: "03",
      title: "Mobiliser",
      description: "Réunir les compétences et les moyens adaptés à la mission.",
    },
    {
      icon: Workflow,
      number: "04",
      title: "Coordonner",
      description: "Suivre l’intervention et maintenir des échanges clairs jusqu’à son aboutissement.",
    },
  ];

  return (
    <main>
      <HeroCarousel />
      <section id="a-propos" className="section scroll-mt-24">
        <FadeIn className="site-container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative flex min-h-[480px] items-center justify-center overflow-hidden bg-off px-8 md:min-h-[570px]">
            <span className="absolute inset-y-0 left-0 w-2 bg-gold" />
            <Image
              src="/images/logo-sd-international-new.png"
              alt="SD International Group"
              width={560}
              height={373}
              sizes="(min-width:1024px) 50vw, 90vw"
              className="h-auto w-full max-w-[520px]"
            />
          </div>
          <div>
            <span className="eyebrow">{t("About.eyebrow")}</span>
            <h2 className="heading font-extrabold text-navy">
              {t("About.title")}
            </h2>
            <p className="lead mt-6">
              {t("About.p1")}
            </p>
            <div className="mt-8 grid gap-5">
              {[
                "Comprendre les objectifs et les contraintes de chaque organisation.",
                "Associer conseil, coordination, réalisation et approvisionnement.",
                "Placer la fiabilité, la qualité et la durabilité au cœur des interventions.",
              ].map((x) => (
                <div key={x} className="flex gap-3">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-blue-50 text-brand">
                    <Check size={16} />
                  </span>
                  <span>{x}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>
      
      <ExpertiseCarousel />
      
      <section className="section bg-white">
        <FadeIn className="site-container">
          <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
            <div>
              <span className="eyebrow">{t("Method.eyebrow")}</span>
              <h2 className="heading font-extrabold text-navy">
                {t("Method.title")}
              </h2>
              <p className="lead mt-6">
                {t("Method.p1")}
              </p>
            </div>
            <ol className="grid border-y border-slate-200 sm:grid-cols-2">
              {processSteps.map(({ icon: Icon, number, title, description }) => (
                <li
                  key={number}
                  className="relative border-b border-slate-200 py-7 sm:px-7 sm:odd:border-r sm:[&:nth-last-child(-n+2)]:border-b-0"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="text-brand" size={25} />
                    <span className="text-sm font-extrabold text-gold">{number}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-extrabold text-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-5 border-t border-slate-200 pt-7">
            <p className="font-bold text-navy">
              Entreprises · Institutions · Collectivités · Partenaires techniques
            </p>
            <Link
              className="inline-flex items-center gap-2 font-extrabold text-brand"
              href="/contact"
            >
              {t("Method.cta")} <ArrowRight size={17} />
            </Link>
          </div>
        </FadeIn>
      </section>
      
      <section className="section overflow-hidden bg-navy text-white">
        <FadeIn className="site-container grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <span className="eyebrow !text-blue-300">{t("Why.eyebrow")}</span>
            <h2 className="heading font-extrabold">
              {t("Why.title")}
            </h2>
            <p className="mt-6 max-w-lg leading-7 text-slate-300">
              {t("Why.description")}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 font-extrabold text-blue-300"
            >
              {t("Why.cta")} <ArrowRight size={17} />
            </Link>
          </div>
          <div className="border-t border-white/20">
            {strengths.map(({ icon: Icon, title, description }, strengthIndex) => (
              <article
                key={title}
                className="grid gap-4 border-b border-white/20 py-7 sm:grid-cols-[54px_1fr] sm:items-start"
              >
                <div className="flex items-center justify-between sm:block">
                  <Icon className="text-blue-300" />
                  <span className="text-xs font-extrabold text-gold sm:mt-3 sm:block">
                    0{strengthIndex + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold">{title}</h3>
                  <p className="mt-2 leading-7 text-slate-300">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </FadeIn>
      </section>
      
      {projects.length > 0 && (
        <section className="section bg-navy text-white">
          <FadeIn className="site-container">
            <span className="eyebrow !text-blue-300">{t("Projects.eyebrow")}</span>
            <h2 className="heading max-w-3xl font-extrabold">
              {t("Projects.title")}
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {projects.slice(0, 3).map((p) => (
                <article key={p.title} className="overflow-hidden rounded-lg bg-[#102a43]">
                  <ImageLightbox src={p.image} alt={p.title} className="h-64" sizes="33vw" />
                  <div className="p-6">
                    <p className="text-xs font-bold uppercase text-blue-200">{p.category}</p>
                    <h3 className="mt-3 text-xl font-extrabold">{p.title}</h3>
                    <p className="mt-2 text-sm text-slate-300">{p.location}</p>
                  </div>
                </article>
              ))}
            </div>
            <Link href="/realisations" className="btn btn-primary mt-8">
              {t("Projects.cta")}
            </Link>
          </FadeIn>
        </section>
      )}
      
      <section className="section">
        <FadeIn className="site-container grid items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="eyebrow">{t("Trade.eyebrow")}</span>
            <h2 className="heading font-extrabold text-navy">
              {t("Trade.title")}
            </h2>
            <p className="lead mt-6">
              {t("Trade.description")}
            </p>
            <div className="mt-5 grid gap-3">
              {[0, 1, 2].map((i) => (
                <p key={i} className="flex gap-3 font-bold">
                  <Check className="text-brand shrink-0" />
                  {t(`Trade.points.${i}` as any)}
                </p>
              ))}
            </div>
            <Link href="/services/negoce-import-export" className="btn btn-primary mt-8">
              {t("Trade.cta")}
            </Link>
          </div>
          <ImageLightbox
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85"
            alt="Entrepôt de logistique et d’approvisionnement"
            className="h-[520px] rounded-lg shadow-soft"
            sizes="50vw"
          />
        </FadeIn>
      </section>
    </main>
  );
}
