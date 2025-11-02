import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Locus",
  description: "La plataforma para negocios, tu negocio crece, nosotros crecemos con vos. Sin comisiones por venta, tarifa progresiva basada en objetivos.",
  icons: {
    icon: './favicon.svg', // ícono de pestaña
  },
  openGraph: {
    title: "Locus",
    description: "La plataforma para negocios, tu negocio crece, nosotros crecemos con vos. Sin comisiones por venta, tarifa progresiva basada en objetivos.",
    url: "https://locus-platform.vercel.app", // tu dominio real
    siteName: "Locus",
    images: [
      {
        url: "/fondo.png", // ruta de la imagen que querés mostrar al compartir
        width: 1200,
        height: 630,
        alt: "Locus - Tu negocio sin comisiones",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Locus",
    description: "La plataforma para negocios, tu negocio crece, nosotros crecemos con vos. Sin comisiones por venta, tarifa progresiva basada en objetivos.",
    images: ["/fondo.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
