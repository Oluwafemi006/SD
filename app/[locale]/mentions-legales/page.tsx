import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Legal.mentions" });
  return {
    title: t("title"),
    alternates: { canonical: "/mentions-legales" },
  };
}

export default async function LegalMentionsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Legal.mentions" });

  return (
    <main className="section bg-white">
      <div className="site-container max-w-3xl">
        <h1 className="heading font-extrabold text-navy">{t("title")}</h1>
        <p className="mt-4 text-sm text-muted">{t("last_updated")}</p>
        <div className="prose prose-slate mt-10 max-w-none">
          <p className="whitespace-pre-line">{t("content")}</p>
        </div>
      </div>
    </main>
  );
}
