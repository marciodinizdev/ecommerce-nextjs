import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Barra Closet | Brechó Comunitário",
  description: "Brechó comunitário de roupas usadas e novas",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />

        <main>{children}</main>
        <Footer />  
      </body>
    </html>
  );
}
