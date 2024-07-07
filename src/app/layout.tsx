import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Scroll from "@/Components/Scroll/Scroll";

const inter = Sora ({ subsets: ["latin"] , display: "swap" });

export const metadata: Metadata = {
  title: "CCTV Camera | production Camera",
  description: "Sundar by create CCTV app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&family=Changa:wght@200..800&family=Ga+Maamli&display=swap" rel="stylesheet"/>
      </head>
      <body className={inter.className}>
        {children}
        <Scroll/>
      </body>
    </html>
  );
}
