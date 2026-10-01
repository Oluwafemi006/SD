import type { Metadata } from "next";
import { Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import { getTranslations } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HSE" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: "/hse-qualite" },
  };
}

export default async function HsePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HSE" });

  return (
    <main>
      <PageHero
        eyebrow={t("title")}
        title="La performance passe par la maîtrise des risques."
        description={t("intro")}
        image="/images/services/hse-electricite-terrain.jpeg"
      />
      <section className="section">
        <div className="site-container grid gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Nos engagements</span>
            <h2 className="heading font-extrabold text-navy">
              Une vigilance présente à chaque étape.
            </h2>
            <p className="lead mt-6">
              L’approche HSE est intégrée à la préparation, à l’organisation et au suivi des
              travaux, en cohérence avec les exigences applicables à chaque mission.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="flex gap-4 rounded-lg border p-5">
              <Check className="shrink-0 text-gold" />
              <strong>{t("sections.safety.title")}: {t("sections.safety.content")}</strong>
            </div>
            <div className="flex gap-4 rounded-lg border p-5">
              <Check className="shrink-0 text-gold" />
              <strong>{t("sections.environment.title")}: {t("sections.environment.content")}</strong>
            </div>
            <div className="flex gap-4 rounded-lg border p-5">
              <Check className="shrink-0 text-gold" />
              <strong>{t("sections.quality.title")}: {t("sections.quality.content")}</strong>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
