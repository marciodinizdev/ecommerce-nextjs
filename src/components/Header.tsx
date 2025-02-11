import Link from 'next/link';
import { ShoppingCart, Search, User, Heart, Headphones } from 'lucide-react'; // Adicionei o ícone de Headphones (Suporte)
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white drop-shadow-md flex flex-col w-full">
      <div className="head-sup px-10 mt-3"> {/* Ajuste para garantir a largura total */}
        <div className="flex items-center justify-between w-full">
          
          {/* Logo */}
          <Link href="/" className="mb-1 text-xl font-bold text-gray-800">
            <Image src="/logo.png" alt="Logo" width={150} height={0} />
          </Link>

          {/* Barra de Pesquisa */}
          <div className="relative flex flex-1 mx-6 max-w-lg">
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

          {/* Carrinho de Compras, Login, Itens Favoritos e Suporte */}
          <div className="flex items-center space-x-6">
            
            {/* Ícone de Login */}
            <Link href="/login">
              <User className="text-black hover:text-gray-500" />
            </Link>

            {/* Ícone de Carrinho */}
            <Link href="/carrinho" className="relative">
              <ShoppingCart className="text-black hover:text-gray-500" />
              <span className="absolute -top-2 -right-2 bg-myred text-white text-xs rounded-full px-1">
                3
              </span>
            </Link>
            
            {/* Ícone de Itens Favoritos */}
            <Link href="/favoritos">
              <Heart className="text-black hover:text-gray-500" />
            </Link>

            {/* Ícone de Suporte */}
            <Link href="/suporte">
              <Headphones className="text-black hover:text-gray-500" />
            </Link>
          </div>
        </div>
      </div>

      <div className="head-inf flex justify-center gap-4 bg-white text-white p-3">
        {/* Navbar */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/novidades" className="text-black hover:text-gray-500">Novidades</Link>
          <Link href="/promocoes" className="text-black hover:text-gray-500">Promoçoes</Link>
          <Link href="/masculino" className="text-black hover:text-gray-500">Roupas masculinas</Link>
          <Link href="/feminino" className="text-black hover:text-gray-500">Roupas femininas</Link>
          <Link href="/infantil" className="text-black hover:text-gray-500">Infantil</Link>
          <Link href="/sapatos" className="text-black hover:text-gray-500">Sapatos</Link>
        </nav>
      </div>
    </header>
  );
}
