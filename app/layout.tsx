import Header from "@/components/header";
import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.scss";

const roboto = Roboto({
  variable: "--font-roboto",

  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Financial Management",
  description: "Controle financeiro de forma simples e rápida",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} ${poppins.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
