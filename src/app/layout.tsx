import { Inter, Kumbh_Sans } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import React from "react";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });
const kumbh = Kumbh_Sans({ subsets: ["latin"] });

export const metadata = {
  title: ".gbb",
  description: "Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kumbh.className}>{children}</body>
    </html>
  );
}
