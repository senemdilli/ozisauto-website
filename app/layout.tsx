import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ozis Auto",
  description: "Fleet-focused automotive solutions for modern mobility teams",
};

const navigation = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Çözümlerimiz", href: "/solutions" },
  { label: "Hakkımızda", href: "/about" },
  { label: "İletişim", href: "/contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-100 text-slate-900`}
      >
        <div className="flex min-h-screen flex-col">
          <SiteHeader navigation={navigation} />
          <main className="flex-1">
            {children}
          </main>
          <footer className="border-t border-slate-200 bg-white/80">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-2 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <p>© {new Date().getFullYear()} Ozis Auto. All rights reserved.</p>
              <p>ozis@ozis.com.tr</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
