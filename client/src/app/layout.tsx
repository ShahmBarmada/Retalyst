import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { config } from "@fortawesome/fontawesome-svg-core";
import localFont from 'next/font/local'

import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

// const inter = Inter({ subsets: ["latin"] });
const notoKufi = localFont({
  src: '../resources/NotoKufiArabic.ttf',
  display: "swap"
})

export const metadata: Metadata = {
  title: "Retalyst",
  description: "app description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning={true}>
      <body className={notoKufi.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
