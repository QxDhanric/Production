import type { Metadata, Viewport } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://qxdhanric.online"),
  title: {
    default: "QxDhanric | Premium Luxury Streetwear",
    template: "%s | QxDhanric",
  },
  description:
    "QxDhanric is modern luxury streetwear for creators, entrepreneurs, and people who value individuality. Be You. Own It.",
  keywords: [
    "QxDhanric",
    "luxury streetwear",
    "premium hoodies",
    "minimal clothing",
    "streetwear brand",
  ],
  openGraph: {
    title: "QxDhanric | Be You. Own It.",
    description:
      "Premium streetwear designed to inspire confidence and individuality.",
    url: "https://qxdhanric.online",
    siteName: "QxDhanric",
    images: [
      {
        url: "/brand/storefront-reference.png",
        width: 1536,
        height: 1024,
        alt: "QxDhanric premium streetwear campaign",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QxDhanric | Be You. Own It.",
    description:
      "Premium streetwear designed to inspire confidence and individuality.",
    images: ["/brand/storefront-reference.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#ECE8E0",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
