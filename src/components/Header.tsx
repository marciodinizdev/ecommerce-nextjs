import Link from 'next/link';
import { ShoppingCart } from 'lucide-react'; // Ícone do carrinho
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-black drop-shadow-lg ">
      <div className="container mx-auto flex items-center justify-between p-4 w-90">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-800">
          <Image src="/logo-preto.png" alt="Logo" width={50} height={50} />
        </Link>

        {/* Navbar */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-gray-500">
            Home
          </Link>
          <Link href="/masculino" className="text-white hover:text-gray-500">
            Masculino
          </Link>
          <Link href="/feminino" className="text-white hover:text-gray-500">
            Feminino
          </Link>
          <Link href="/promocoes" className="text-white hover:text-gray-500">
            Promoções
          </Link>
        </nav>

        {/* Carrinho de Compras */}
        <div className="flex items-center space-x-4">
          <Link href="/carrinho" className="relative">
            <ShoppingCart className="text-white hover:text-gray-500" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              3
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}