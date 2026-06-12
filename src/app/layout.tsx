import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Providence — Le CRM qui vous comprend",
  description:
    "Providence adapte son interface au profil psychologique de chaque commercial pour maximiser vos performances commerciales.",
  openGraph: {
    title: "Providence — Le CRM qui vous comprend",
    description:
      "Providence adapte son interface au profil psychologique de chaque commercial pour maximiser vos performances commerciales.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
