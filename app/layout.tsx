import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "UP TO MOVE — Prévention TMS par des kinésithérapeutes en entreprise",
    template: "%s | UP TO MOVE",
  },
  description:
    "UP TO MOVE forme vos salariés à la prévention des Troubles Musculo-Squelettiques en 1 heure, dans vos locaux, par des kinésithérapeutes diplômés d'État. Certification Qualiopi. Partout en France.",
  keywords: [
    "prévention TMS",
    "troubles musculo-squelettiques",
    "formation entreprise",
    "kinésithérapeute entreprise",
    "Qualiopi",
    "ergonomie",
    "DUERP",
    "passeport prévention",
    "santé au travail",
  ],
  authors: [{ name: "UP TO MOVE" }],
  creator: "UP TO MOVE",
  metadataBase: new URL("https://www.uptomove.fr"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.uptomove.fr",
    siteName: "UP TO MOVE",
    title: "UP TO MOVE — Prévention TMS par des kinésithérapeutes",
    description:
      "Formations TMS courtes, animées par des kinésithérapeutes, dans vos locaux. Qualiopi certifié.",
  },
  twitter: {
    card: "summary_large_image",
    title: "UP TO MOVE — Prévention TMS",
    description: "Formations TMS par des kinésithérapeutes en entreprise.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={nunito.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Encode+Sans+Compressed:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
