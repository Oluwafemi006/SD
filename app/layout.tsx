import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/data/site";

const manrope = Manrope({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "SD International Group | BTP, Énergie & Import-Export", template: "%s | SD International Group" },
  description: "SD International Group accompagne entreprises, institutions et collectivités dans leurs projets de BTP, énergie, réseaux HT/MT/BT, études et logistique au Bénin.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "fr_FR", siteName: site.name, title: site.name, description: site.description },
  icons: { icon: "/images/logo-sd-international.png", apple: "/images/logo-sd-international.png" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = { "@context": "https://schema.org", "@type": "Organization", name: site.name, url: site.url, email: site.email, address: { "@type": "PostalAddress", addressCountry: "BJ" } };
  return <html lang="fr"><body className={manrope.className}><Header />{children}<Footer /><WhatsAppButton /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></body></html>;
}
