import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Removed Aleo from google fonts
import localFont from "next/font/local";
import "./globals.css";

// PrimeReact Styles
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Script from "next/script";
import QueryProvider from "@/components/providers/QueryProvider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const aleo = localFont({
  src: [
    {
      path: "./fonts/Aleo-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Aleo-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/Aleo-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Aleo-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Aleo-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Aleo-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-aleo",
});

export const metadata: Metadata = {
  title: "Jaya Travels",
  description: "Luxury Travel Reimagined",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5GK8FKHJ');`}
        </Script>
      </head>
      <body className={`${aleo.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5GK8FKHJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <QueryProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
