import React, { PropsWithChildren } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const clashDisplay = localFont({
  src: "../../public/fonts/clash-display.ttf",
  display: "swap",
  variable: "--font-clash-display",
});

const outfit = localFont({
  src: "../../public/fonts/outfit.ttf",
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      className={`${clashDisplay.variable} ${outfit.variable} font-outfit`}
    >
      <body>{children}</body>
    </html>
  );
}
