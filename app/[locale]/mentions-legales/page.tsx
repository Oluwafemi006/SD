import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Informations légales relatives au site de ${site.name}.`,
  alternates: { canonical: "/mentions-legales" },
};

export default function LegalNoticePage() {
  return (
    <main>
      <section className="bg-navy py-16 text-white">
        <div className="site-container">
          <span className="eyebrow !text-blue-300">Informations institutionnelles</span>
          <h1 className="heading font-extrabold">Mentions légales</h1>
        </div>
      </section>
      <section className="section">
        <div className="site-container max-w-4xl">
          <div className="grid gap-10 md:grid-cols-2">
            <section>
              <h2 className="text-xl font-extrabold text-navy">Éditeur du site</h2>
              <dl className="mt-5 grid gap-3 leading-7">
                <div>
                  <dt className="font-bold">Dénomination</dt>
                  <dd>{site.name}</dd>
                </div>
                <div>
                  <dt className="font-bold">RCCM</dt>
                  <dd>{site.rccm}</dd>
                </div>
                <div>
                  <dt className="font-bold">IFU</dt>
                  <dd>{site.ifu}</dd>
                </div>
                <div>
                  <dt className="font-bold">Adresse</dt>
                  <dd>{site.address}</dd>
                </div>
              </dl>
            </section>
            <section>
              <h2 className="text-xl font-extrabold text-navy">Contact</h2>
              <div className="mt-5 grid gap-3 leading-7">
                <p>
                  <a className="font-bold text-brand" href={`tel:${site.phoneHref}`}>
                    {site.phone}
                  </a>
                </p>
                <p>
                  <a className="font-bold text-brand" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </p>
              </div>
              <h2 className="mt-9 text-xl font-extrabold text-navy">Hébergement</h2>
              <p className="mt-5 leading-7">
                Le site est hébergé par Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723,
                États-Unis.
              </p>
            </section>
          </div>
          <section className="mt-12 border-t border-slate-200 pt-9">
            <h2 className="text-xl font-extrabold text-navy">Contenus et responsabilité</h2>
            <p className="mt-5 leading-7 text-muted">
              Les informations publiées présentent les activités de SD International Group à titre
              institutionnel. Malgré le soin apporté à leur mise à jour, elles ne constituent pas
              une offre contractuelle. Toute reproduction des éléments propres à l’entreprise
              nécessite son autorisation préalable.
            </p>
            <p className="mt-5 text-sm">
              Pour les données envoyées depuis le formulaire, consultez la{" "}
              <Link className="font-bold text-brand" href="/politique-confidentialite">
                politique de confidentialité
              </Link>
              .
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
