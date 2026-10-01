import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Traitement des données transmises à ${site.name}.`,
  alternates: { canonical: "/politique-confidentialite" },
};

const sections = [
  {
    title: "Données concernées",
    text: "Le formulaire peut recueillir votre nom, votre organisation, votre téléphone, votre adresse e-mail ainsi que les informations que vous saisissez au sujet de votre demande.",
  },
  {
    title: "Finalité du traitement",
    text: "Ces informations sont utilisées pour recevoir votre demande, vous recontacter, comprendre votre besoin et assurer le suivi des échanges qui en découlent.",
  },
  {
    title: "Destinataires et conservation",
    text: "Les données sont destinées à SD International Group et aux services techniques nécessaires à leur transmission. Elles sont conservées pendant la durée utile au traitement de la demande et au suivi de la relation professionnelle.",
  },
  {
    title: "Vos demandes",
    text: `Vous pouvez demander l’accès, la rectification ou la suppression des informations vous concernant en écrivant à ${site.email}.`,
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <section className="bg-navy py-16 text-white">
        <div className="site-container">
          <span className="eyebrow !text-blue-300">Protection des informations</span>
          <h1 className="heading font-extrabold">Politique de confidentialité</h1>
          <p className="mt-5 max-w-2xl leading-7 text-slate-300">
            Cette page explique comment les informations envoyées depuis le formulaire de contact
            sont utilisées.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="site-container grid max-w-4xl gap-10 md:grid-cols-2">
          {sections.map((section) => (
            <section key={section.title} className="border-t border-slate-200 pt-6">
              <h2 className="text-xl font-extrabold text-navy">{section.title}</h2>
              <p className="mt-4 leading-7 text-muted">{section.text}</p>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
