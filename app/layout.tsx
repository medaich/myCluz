import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyCluz",
  description: "Generated by create next app",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/icon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-white text-foreground antialiased`}
      >
        <>
          <NavBar />
          {children}
        </>
      </body>
    </html>
  );
}
