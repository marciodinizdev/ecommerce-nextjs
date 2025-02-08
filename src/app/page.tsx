import Header from '@/components/Header';
import Banner from '@/components/Banner';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <Banner />
 
      </body>
    </html>
  );
}