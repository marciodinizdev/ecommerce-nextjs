"use client";

import Link from "next/link";
import {
  Search,
  User,
  Heart,
  Headphones,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function Header() {
  const navRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (navRef.current) {
      setCanScrollLeft(navRef.current.scrollLeft > 0);
      setCanScrollRight(
        navRef.current.scrollLeft < navRef.current.scrollWidth - navRef.current.clientWidth
      );
    }
  };

  useEffect(() => {
    updateScrollButtons();
    const handleResize = () => updateScrollButtons();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollNav = (direction: "left" | "right") => {
    if (navRef.current) {
      const scrollAmount = 150;
      navRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });

      setTimeout(updateScrollButtons, 300);
    }
  };

  return (
    <header className="bg-white drop-shadow-sm w-full">

      {/* Cabeçalho superior */}
      <div className="w-full flex justify-center mb-4">
        <div className="w-full max-w-[1300px] px-4 mt-3 flex justify-between items-center">
          <Link href="/" className="mb-1 text-xl font-bold text-gray-800">
            <Image src="/images/icons/logo.png" alt="Logo" width={150} height={0} />
          </Link>

          {/* Barra de pesquisa */}
          <div className="relative flex flex-1 mx-6 max-w-lg">
            <input
              type="text"
              placeholder="Buscar produtos..."
              className="w-full border border-gray-300 rounded-md pl-4 pr-12 py-2 focus:outline-none focus:ring-2 focus:ring-myred"
            />
            <button className="absolute right-0 top-0 h-full w-12 bg-myred text-white rounded-r-md flex items-center justify-center hover:bg-black transition 300ms ease-in-out">
              <Search size={20} />
            </button>
          </div>

          {/* Botões de navegação */}
          <div className="flex items-center space-x-6">
            <Link href="/login">
              <User className="text-black hover:text-gray-500" />
            </Link>

            <Link href="/favoritos">
              <Heart className="text-black hover:text-gray-500" />
            </Link>
            <Link href="/suporte">
              <Headphones className="text-black hover:text-gray-500" />
            </Link>
          </div>
        </div>
      </div>

      {/* Barra de navegação */}
      <div className="bg-white w-full flex justify-center">
        <div className="w-full max-w-[1300px] flex items-center justify-between px-4 mb-4">
          {canScrollLeft && (
            <button
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition mr-2"
              onClick={() => scrollNav("left")}
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <nav
            ref={navRef}
            className="flex space-x-6 overflow-x-auto no-scrollbar whitespace-nowrap scroll-smooth w-full max-w-[90vw] justify-center"
            onScroll={updateScrollButtons}
          >
            <Link href="/novidades" className="text-black hover:text-gray-500">
              Novidades
            </Link>
            <Link href="/promocoes" className="text-black hover:text-gray-500">
              Promoções
            </Link>
            <Link href="/roupas" className="text-black hover:text-gray-500">
              Roupas
            </Link>
            <Link href="/calcados" className="text-black hover:text-gray-500">
              Calçados
            </Link>
            <Link href="/acessorios" className="text-black hover:text-gray-500">
              Acessórios
            </Link>
            <Link href="/promocao-sazonal" className="text-black hover:text-gray-500">
              Ofertas especiais
            </Link>
            <Link href="/sejavendedor" className="text-black hover:text-gray-500">
              Desapegue
            </Link>
          </nav>

          {canScrollRight && (
            <button
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition ml-2"
              onClick={() => scrollNav("right")}
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
