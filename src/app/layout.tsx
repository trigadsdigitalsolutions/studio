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
  title: "Hifaza Travels | Best Kerala Tour Packages from Kozhikode & Calicut",
  description: "Experience premium travel with Hifaza Travels. We offer the best Kerala tour packages from Kozhikode, Umrah tours, Hajj packages, and international holidays. Your trusted travel partner in Calicut.",
  keywords: "Hifaza Travels Kozhikode, best travels in Kozhikode, Kerala tour packages from Kozhikode, Hifaza Travels Calicut, travels Kozhikode, tour packages Kozhikode, Hifaza tour packages, Umrah packages Calicut, hajj-umrah packages",
  alternates: {
    canonical: "https://hifazatravels.com",
  },
  icons: {
    icon: "/icon@4x.ico",
  },
  openGraph: {
    title: "Hifaza Travels | Best Kerala Tour Packages from Kozhikode",
    description: "Premium spiritual and leisure travel experiences. Explore our exclusive Hifaza tour packages for Kerala, Umrah, Hajj, and international holidays.",
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
    title: "Hifaza Travels | Best Kerala Tour Packages from Kozhikode",
    description: "Premium spiritual and leisure travel experiences. Book your next journey with Hifaza Travels Calicut.",
    images: ["/logo@4x.png"],
  },
  verification: {
    google: "XSZLA6nykkcXodwzMPUBHUY_eLiGNQ4BkD8f4Mq_L68",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Hifaza Travels",
  "image": "https://hifazatravels.com/logo@4x.png",
  "@id": "https://hifazatravels.com",
  "url": "https://hifazatravels.com",
  "telephone": "+918089296162",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Calicut",
    "addressLocality": "Kozhikode",
    "addressRegion": "Kerala",
    "postalCode": "673001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 11.2588,
    "longitude": 75.7804
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.facebook.com/hifazatravels",
    "https://www.instagram.com/hifaza_tours"
  ]
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
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
