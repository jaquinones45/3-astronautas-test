import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import './globals.css';

export const metadata: Metadata = {
  title: "Tres Astronautas - Desarrollo de software a medida",
  description: "Desarrollo de software a medida nearshore confiado por empresas Fortune 500, PYMEs y startups.",
  icons: {
    icon: "https://cdn.prod.website-files.com/61e9632aad38f0587d2209b7/62604cf2e8162153a8240b0b_favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
