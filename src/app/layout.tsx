import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "PARTYPACK | Fotokoutky, AI technologie & hostesky na akce",
  description: "Specializujeme se na jedinečné zážitky - fotokoutky, AI fotokoutky, 360° Partyspin, AI Draw Bot a hostesky. Svatby, firemní akce, plesy a narozeniny. 10+ let zkušeností.",
  keywords: "fotokoutek, fotobudka, AI fotokoutek, hostesky, 360 video, partyspin, svatba, firemní akce, ples, Praha",
  authors: [{ name: "Partypack" }],
  openGraph: {
    title: "PARTYPACK | Fotokoutky, AI technologie & hostesky na akce",
    description: "Specializujeme se na jedinečné zážitky - fotokoutky, AI fotokoutky, 360° Partyspin, AI Draw Bot a hostesky.",
    url: "https://partypack.cz",
    siteName: "PARTYPACK",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${inter.variable} antialiased`}>
        <ClientLayout>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
