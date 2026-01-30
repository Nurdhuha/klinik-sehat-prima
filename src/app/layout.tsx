import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteData } from "@/config/site-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteData.general.brandName} - ${siteData.general.tagline}`,
  description: siteData.hero.subheadline,
  keywords: ["klinik", "kesehatan", "dokter", "rumah sakit", "konsultasi medis", "layanan kesehatan"],
  authors: [{ name: siteData.general.brandName }],
  openGraph: {
    title: `${siteData.general.brandName} - ${siteData.general.tagline}`,
    description: siteData.hero.subheadline,
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteData.general.brandName} - ${siteData.general.tagline}`,
    description: siteData.hero.subheadline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: siteData.general.brandName,
    description: siteData.hero.subheadline,
    telephone: siteData.general.phone,
    email: siteData.general.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteData.general.address,
    },
  };

  return (
    <html lang="id">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        {siteData.features.enableSEOJSONLD && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        )}
      </body>
    </html>
  );
}
