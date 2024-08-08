import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "./providers/model-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SimpleGamish",
  description:
    "Get head to head in a battle trying to guess each others token. Earn money, win prizes, pay to enter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ModalProvider />
      </body>
    </html>
  );
}
