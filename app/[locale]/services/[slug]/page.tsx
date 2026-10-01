import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import { services } from "@/data/site";
import { getTranslations } from "next-intl/server";

type Props = { params: Promise<{ slug: string; locale: string }> };
export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const t = await getTranslations({ locale, namespace: "Services" });
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: t(`${slug}.title` as any),
    description: t(`${slug}.description` as any),
    alternates: { canonical: `/services/${slug}` },
  };
}
export default async function ServicePage({ params }: Props) {
  const { slug, locale } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  const t = await getTranslations({ locale, namespace: "Services" });

  return (
    <main>
      <PageHero
        eyebrow={t(`${slug}.short` as any)}
        title={t(`${slug}.title` as any)}
        description={t(`${slug}.description` as any)}
        image={service.image}
      />
      <section className="section">
        <div className="site-container grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <span className="eyebrow">{t("Page.what_we_do")}</span>
            <h2 className="heading font-extrabold text-navy">
              Une réponse structurée autour de votre besoin.
            </h2>
          </div>
          <div>
            <p className="lead">
              Chaque mission est étudiée selon son contexte, ses contraintes techniques et ses
              objectifs. L’équipe privilégie une coordination claire, depuis la compréhension du
              besoin jusqu’au suivi de l’intervention.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex min-h-20 items-center gap-4 rounded-lg border border-slate-200 p-5 font-bold text-navy"
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-blue-50 text-brand">
                    <Check size={17} />
                  </span>
                  {t(`${slug}.points.${i}` as any)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
