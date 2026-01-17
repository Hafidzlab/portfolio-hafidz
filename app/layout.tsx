import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hafidz Maulana — Portfolio Web",
  description:
    "Showcasing Automation & IoT projects, from embedded systems to smart monitoring.",

  icons: {
    icon: "/icon.png",
  },

  openGraph: {
    title: "Hafidz Maulana — Portfolio Web",
    description:
      "Showcasing Automation & IoT projects, from embedded systems to smart monitoring.",
    url: "https://hafidzm.vercel.app",
    siteName: "Hafidz Maulana",
    images: [
      {
        url: "/og.png",
        width: 512,
        height: 512,
        alt: "Hafidz Maulana Portfolio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hafidz Maulana — Portfolio Web",
    description:
      "Showcasing Automation & IoT projects, from embedded systems to smart monitoring.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
