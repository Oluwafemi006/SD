import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <main className="grid min-h-[70vh] place-content-center bg-white px-4 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-brand">404</p>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-6 text-base leading-7 text-muted">{t("description")}</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/" className="btn btn-primary">
            {t("cta")}
          </Link>
        </div>
      </div>
    </main>
  );
}
