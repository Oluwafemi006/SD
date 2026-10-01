"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import ImageLightbox from "@/components/ImageLightbox";
import { services } from "@/data/site";

const rotationDelay = 7000;

export default function ExpertiseCarousel() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focusWithin, setFocusWithin] = useState(false);
  const service = services[index];

  useEffect(() => {
    if (hovered || focusWithin || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % services.length),
      rotationDelay,
    );
    return () => window.clearInterval(timer);
  }, [focusWithin, hovered]);

  function select(nextIndex: number) {
    setIndex(nextIndex);
  }

  return (
    <section
      id="services"
      className="section scroll-mt-24 bg-off"
      aria-labelledby="expertises-title"
    >
      <div className="site-container">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="eyebrow">Champs d’intervention</span>
            <h2 id="expertises-title" className="heading max-w-3xl font-extrabold text-navy">
              Des compétences qui se répondent.
            </h2>
          </div>
          <p className="lead max-w-lg">
            Explorez nos activités et composez une réponse adaptée à la réalité de votre besoin.
          </p>
        </div>

        <div
          aria-live="polite"
          aria-atomic="true"
          className="mt-10 overflow-hidden border border-slate-200 bg-white"
          onFocusCapture={() => setFocusWithin(true)}
          onBlurCapture={() => setFocusWithin(false)}
        >
          <div key={service.slug} className="carousel-slide grid lg:grid-cols-[1.18fr_.82fr]">
            <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
              <ImageLightbox
                src={service.image}
                alt={service.title}
                className="h-[340px] lg:h-[540px]"
                sizes="(min-width:1024px) 58vw, 100vw"
              />
            </div>
            <div className="flex min-h-[410px] flex-col justify-between p-7 sm:p-10 lg:min-h-[540px] lg:p-12">
              <div>
                <span className="text-sm font-extrabold text-gold">
                  {service.number} / 0{services.length}
                </span>
                <h3 className="mt-6 text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
                  {service.title}
                </h3>
                <p className="lead mt-5">{service.description}</p>
                <ul className="mt-7 grid gap-3 text-sm font-bold text-navy">
                  {service.points.map((point) => (
                    <li key={point} className="border-l-2 border-brand pl-4">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-9 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 font-extrabold text-brand"
                >
                  Explorer cette expertise <ArrowRight size={17} />
                </Link>
                <div className="flex gap-2" role="group" aria-label="Choisir une expertise">
                  {services.map((item, itemIndex) => (
                    <button
                      key={item.slug}
                      type="button"
                      aria-pressed={itemIndex === index}
                      onClick={() => select(itemIndex)}
                      className={`h-1.5 transition-all ${itemIndex === index ? "w-9 bg-brand" : "w-5 bg-slate-300 hover:bg-slate-500"}`}
                      aria-label={`Afficher : ${item.short}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
