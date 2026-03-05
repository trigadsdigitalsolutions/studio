import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Script from "next/script";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Hifaza Travels Kozhikode | Best Travels in Kozhikode & Calicut",
  description: "Hifaza Travels (Calicut) offers the best tour packages in Kozhikode. Premium Hifaza tour packages for Umrah, Hajj, and international holidays. Book with the best travels in Kozhikode today.",
  keywords: "Hifaza Travels Kozhikode, best travels in Kozhikode, Hifaza Travels Calicut, travels Kozhikode, tour packages Kozhikode, Hifaza tour packages",
  icons: {
    icon: "/icon@4x.ico",
  },
  openGraph: {
    title: "Hifaza Travels Kozhikode | Best Travels in Kozhikode & Calicut",
    description: "Premium spiritual and leisure travel experiences. Explore our exclusive Hifaza tour packages for Umrah, Hajj, and international holidays.",
    url: "https://hifazatravels.com",
    siteName: "Hifaza Travels",
    images: [
      {
        url: "/logo@4x.png",
        width: 1200,
        height: 630,
        alt: "Hifaza Travels Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hifaza Travels Kozhikode | Best Travels in Kozhikode & Calicut",
    description: "Premium spiritual and leisure travel experiences. Book your next journey with Hifaza Travels Calicut.",
    images: ["/logo@4x.png"],
  },
  verification: {
    google: "XSZLA6nykkcXodwzMPUBHUY_eLiGNQ4BkD8f4Mq_L68",
  },
};

import { SearchProvider } from "@/context/SearchContext";

import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z45Q6TJLNK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-Z45Q6TJLNK');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning className={`${outfit.variable} font-sans antialiased bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}>
        <SearchProvider>
          <Navbar />
          {children}
          <Footer />
        </SearchProvider>
      </body>
    </html>
  );
}
