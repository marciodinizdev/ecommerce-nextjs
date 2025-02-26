import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "Barra Closet | Brechó Comunitário",
  description: "Brechó comunitário de roupas usadas e novas",
  icons: {
    icon: "/images/icons/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <Header />

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
