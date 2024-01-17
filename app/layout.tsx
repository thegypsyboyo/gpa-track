/* eslint-disable camelcase */
import React from "react";
import { Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Home | GPA Tracking System",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, vel!",
  icons: "/assets/images/site-logo.svg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` ${inter.variable} ${spaceGrotesk.variable}`}>
         {children}
      </body>
    </html>
  );
}
