import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://anita-carlsson-advokat.carlzzon121.chatgpt.site"),
  title: "Advokat Anita Carlsson | Familjerätt i Malmö & Höllviken",
  description: "Personlig och erfaren rådgivning inom familjerätt, arvsrätt, medling och förebyggande juridik.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Advokatfirman Anita Carlsson",
    description: "Juridisk trygghet genom livets skeden.",
    locale: "sv_SE",
    type: "website",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Advokatfirman Anita Carlsson" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advokatfirman Anita Carlsson",
    description: "Juridisk trygghet genom livets skeden.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="sv"><body>{children}</body></html>;
}
