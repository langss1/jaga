import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JAGA - Joint ASEAN Guard AI | Real-Time Phishing Protection",
  description: "Real-Time On-Device AI for Phishing Protection in ASEAN. Protecting people from online scams directly on your smartphone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full select-none">
      <body className={`${inter.variable} font-sans antialiased bg-navy-950 text-white min-h-screen`}>
        {children}
      </body>
    </html>
  );
}

