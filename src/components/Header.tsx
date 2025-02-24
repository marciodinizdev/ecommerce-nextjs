'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Instagram, Mail, Headphones, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
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
        <div className="w-full max-w-[1300px] px-4 mt-3 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          {/* Logo e Ícones (alinhados em linha no mobile, mas separados no desktop) */}
          <div className="w-full md:w-auto flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="mb-1 text-xl font-bold text-gray-800">
              <Image src="/images/icons/logo.png" alt="Logo" width={150} height={0} />
            </Link>

            {/* Links para Instagram, E-mail e Suporte (visíveis no mobile) */}
            <div className="flex items-center space-x-6 md:hidden">
              <Link href="https://www.instagram.com/barraclosetpb" target="_blank">
                <Instagram className="text-black hover:text-gray-500" />
              </Link>
              <Link href="mailto:contato@barracloset.com">
                <Mail className="text-black hover:text-gray-500" />
              </Link>
              <Link href="/suporte">
                <Headphones className="text-black hover:text-gray-500" />
              </Link>
            </div>
          </div>

          {/* Barra de pesquisa (abaixo do logo e ícones no mobile, ao lado no desktop) */}
          <div className="relative flex flex-1 w-full md:max-w-lg mx-0 md:mx-6">
            <input
              type="text"
              placeholder="Buscar produtos..."
              className="w-full border border-gray-300 rounded-md pl-4 pr-12 py-2 focus:outline-none focus:ring-2 focus:ring-myred"
            />
            <button className="absolute right-0 top-0 h-full w-12 bg-myred text-white rounded-r-md flex items-center justify-center hover:bg-black transition 300ms ease-in-out">
              <Search size={20} />
            </button>
          </div>

          {/* Links para Instagram, E-mail e Suporte (ocultos no mobile, visíveis no desktop) */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="https://www.instagram.com/barraclosetpb" target="_blank">
              <Instagram className="text-black hover:text-gray-500" />
            </Link>
            <Link href="mailto:contato@barracloset.com">
              <Mail className="text-black hover:text-gray-500" />
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
          {/* Botão de rolagem à esquerda (oculto em mobile) */}
          {canScrollLeft && (
            <button
              className="hidden md:block bg-white p-2 rounded-full shadow-md hover:bg-slate-100 transition mr-2"
              onClick={() => scrollNav("left")}
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Navegação */}
          <nav
            ref={navRef}
            className="flex space-x-6 overflow-x-auto no-scrollbar whitespace-nowrap scroll-smooth w-full max-w-[90vw] justify-center"
            onScroll={updateScrollButtons}
          >
            {[
              { name: "Novidades", path: "/novidades" },
              { name: "Promoções", path: "/promocoes" },
              { name: "Roupas", path: "/roupas" },
              { name: "Calçados", path: "/calcados" },
              { name: "Acessórios", path: "/acessorios" },
              { name: "Ofertas especiais", path: "/promocao-sazonal" },
              { name: "Desapegue", path: "/sejavendedor" },
            ].map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm md:text-base ${
                  pathname === item.path ? "text-myred font-bold" : "text-black hover:text-slate-500"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Botão de rolagem à direita (oculto em mobile) */}
          {canScrollRight && (
            <button
              className="hidden md:block bg-white p-2 rounded-full shadow-md hover:bg-slate-100 transition ml-2"
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