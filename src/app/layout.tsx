import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Wrench Works Digital — Mobile-First Websites & Local SEO for Auto Shops",
  description:
    "We build mobile-first digital systems for automotive repair shops. Local SEO, Google Maps optimization, Google Business Profile management, and automated review funnels that fill your bays.",
  keywords: [
    "automotive digital marketing",
    "auto shop website",
    "local SEO for auto repair",
    "Google Business Profile optimization",
    "review funnel automotive",
  ],
  openGraph: {
    title: "Wrench Works Digital",
    description: "Mobile-first websites, local SEO & automated review funnels for auto repair shops.",
    url: "https://wrenchworksdigital.com",
    siteName: "Wrench Works Digital",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-black">
        {children}
      </body>
    </html>
  );
}
