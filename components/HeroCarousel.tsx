"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import FadeIn from "@/components/FadeIn";
import { useTranslations } from "next-intl";

const rotationDelay = 7000;

export default function HeroCarousel() {
  const t = useTranslations("Hero");
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focusWithin, setFocusWithin] = useState(false);

  const slides = [
    {
      src: "/images/hero/equipe-ingenieurs-afrique.jpg",
      label: "Équipe et coordination",
      position: "center",
    },
    {
      src: "/images/hero/btp-genie-civil.jpg",
      label: "BTP et génie civil",
      position: "center",
    },
    {
      src: "/images/hero/energie-reseaux.jpg",
      label: "Énergie et réseaux",
      position: "center",
    },
    {
      src: "/images/hero/logistique-approvisionnement.jpg",
      label: "Logistique et approvisionnement",
      position: "center",
    },
  ] as const;

  useEffect(() => {
    if (hovered || focusWithin || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % slides.length),
      rotationDelay,
    );
    return () => window.clearInterval(timer);
  }, [focusWithin, hovered, slides.length]);

  function select(nextIndex: number) {
    setIndex(nextIndex);
  }

  return (
    <section
      className="relative isolate flex h-[calc(92svh-88px)] max-h-[820px] min-h-[760px] overflow-hidden bg-navy text-white sm:min-h-[700px] lg:min-h-[620px]"
      aria-roledescription="carrousel"
      aria-label="Présentation de SD International Group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocusWithin(true)}
      onBlurCapture={() => setFocusWithin(false)}
    >
      <div className="absolute inset-0">
        {slides.map((slide, slideIndex) => (
          <div
            key={slide.src}
            className={`hero-slide ${slideIndex === index ? "is-active" : ""}`}
            aria-hidden={slideIndex !== index}
          >
            <Image
              src={slide.src}
              alt=""
              fill
              priority={slideIndex === 0}
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: slide.position }}
            />
          </div>
        ))}
      </div>
      <div className="hero-overlay absolute inset-0 z-10" />

      <div className="site-container relative z-20 flex flex-col justify-end py-10 sm:py-16">
        <FadeIn className="hero-copy max-w-4xl">
          <span className="eyebrow !text-blue-200">{t("eyebrow")}</span>
          <h1 className="display font-extrabold text-white">
            SD International Group{" "}
            <span className="sr-only">
              - Entreprise BTP, Génie civil, Énergie & Logistique au Bénin
            </span>
          </h1>
          <p className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            {t("title1")} <span className="text-blue-300">{t("title2")}</span>
          </p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
            {t("description")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="btn btn-primary" href="/contact">
              {t("cta_primary")} <ArrowRight size={18} />
            </Link>
            <a
              className="btn border border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-navy"
              href="#services"
            >
              {t("cta_secondary")}
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-6 flex items-center justify-between gap-4 border-t border-white/20 pt-4 sm:mt-8">
          <div className="flex gap-2" role="group" aria-label="Choisir une image">
            {slides.map((slide, slideIndex) => (
              <button
                key={slide.label}
                type="button"
                onClick={() => select(slideIndex)}
                className={`h-1.5 transition-all ${slideIndex === index ? "w-10 bg-gold" : "w-5 bg-white/45 hover:bg-white"}`}
                aria-label={`Afficher : ${slide.label}`}
                aria-pressed={slideIndex === index}
              />
            ))}
          </div>
          <p className="text-right text-xs font-bold text-slate-200" aria-live="polite">
            <span className="text-gold">0{index + 1}</span> / 0{slides.length} ·{" "}
            {slides[index].label}
          </p>
        </FadeIn>

        <FadeIn delay={0.3} className="mt-4 grid grid-cols-2 border-y border-white/20 sm:grid-cols-4">
          {[
            "Conseil & études",
            "Solutions & réalisation",
            "Commerce & fournitures",
            "Coordination & logistique",
          ].map((item, itemIndex) => (
            <div
              key={item}
              className="border-white/20 py-3 pr-3 text-xs font-bold sm:border-r sm:px-4 sm:last:border-r-0"
            >
              <span className="mr-2 text-gold">0{itemIndex + 1}</span>
              {item}
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
