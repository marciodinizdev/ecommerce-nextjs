import Link from 'next/link';
import { ShoppingCart, Search } from 'lucide-react'; // Ícones
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white drop-shadow-lg flex flex-col">
      <div className="head-sup">
        <div className="container mx-auto flex items-center justify-between p-4 w-90">

          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gray-800">
            <Image src="/logo.png" alt="Logo" width={150} height={0} />
          </Link>

          {/* Barra de Pesquisa com Ícone */}
          <div className="relative flex flex-1 mx-6 max-w-md">
            <input
              type="text"
              placeholder="Buscar produtos..."
              className="w-full border border-gray-300 rounded-md pl-4 pr-12 py-2 focus:outline-none focus:ring-2 focus:ring-myred"
            />
            
            {/* Ícone de Pesquisa */}
            <button className="absolute right-0 top-0 h-full w-12 bg-myred text-white rounded-r-md flex items-center justify-center hover:bg-black transition 300ms ease-in-out">
              <Search size={20} />
            </button>
          </div>

          {/* Carrinho de Compras */}
          <div className="flex items-center space-x-4">
            <Link href="/carrinho" className="relative">
              <ShoppingCart className="text-black hover:text-gray-500" />
              <span className="absolute -top-2 -right-2 bg-myred text-white text-xs rounded-full px-1">
                3
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="head-inf flex justify-center bg-myred text-white p-3">
        {/* Navbar */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-black">Home</Link>
          <Link href="/masculino" className="text-white hover:text-black">Masculino</Link>
          <Link href="/feminino" className="text-white hover:text-black">Feminino</Link>
          <Link href="/promocoes" className="text-white hover:text-black">Promoções</Link>
        </nav>
      </div>
    </header>
  );
}
