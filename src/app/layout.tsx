import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "Barra Trend",
  description: "Brechó comunitário de roupas usadas e novas",
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
