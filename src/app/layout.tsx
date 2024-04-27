import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "./Provider";
import AppShell from "@/components/AppShell";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VocabVerse",
  description: "Learn english very fast and easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <NextAuthProvider>
          <AppShell>{children}</AppShell>
        </NextAuthProvider>
      </body>
    </html>
  );
}
