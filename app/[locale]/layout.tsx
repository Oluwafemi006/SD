import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/data/site";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const manrope = Manrope({ subsets: ["latin"], display: "swap", preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "SD International Group | BTP, Énergie & Logistique au Bénin",
    template: "%s | SD International Group",
  },
  description: site.description,
  keywords: site.keywords,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: site.name,
    title: site.name,
    description: site.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SD International Group" }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/images/logo-sd-international-new.png",
    apple: "/images/logo-sd-international-new.png",
  },
  robots: { index: true, follow: true },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "fr" | "en")) {
    notFound();
  }
  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: site.description,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    areaServed: "Bénin",
    knowsAbout: site.keywords,
    identifier: [
      { "@type": "PropertyValue", name: "RCCM", value: site.rccm },
      { "@type": "PropertyValue", name: "IFU", value: site.ifu },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ilot 1006",
      postOfficeBoxNumber: "01 BP 7099",
      addressLocality: "Cotonou",
      addressCountry: "BJ",
    },
  };

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <body className={manrope.className}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Toaster position="bottom-right" richColors />
          <Analytics />
          <Footer />
          <WhatsAppButton />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
