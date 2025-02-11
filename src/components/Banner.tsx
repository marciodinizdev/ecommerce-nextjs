"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Banner() {
  const [currentBanner, setCurrentBanner] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev === 3 ? 1 : prev + 1)); // Alterna entre 1, 2 e 3
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Debug: Exibir o banner atual no console
  useEffect(() => {
    console.log(`Banner atual: ${currentBanner}`);
  }, [currentBanner]);

  return (
    <main className="flex flex-col ">

      {/* Infos */}
      <div className="flex justify-center">
        <div className="flex flex-row gap-1 justify-center w-[1300px] h-[60px] mx-auto items-stretch">

          <div className="banner-left flex flex-col w-[1300px] gap-3">
            <div className="font-bold bg-gray-100 text-white p-3 flex items-center justify-around text-sm sm:text-base h-full">
              <Link href="sejavendedor" className="flex items-center gap-3 mb-1 font-bold  text-myred">
                <Image src="/vendedor.png" alt="Seja vendedor" width={25} height={0} />
                <span>VENDA CONOSCO</span>
              </Link>

              <span className="text-gray-500">|</span>

              <Link href="seguranca" className="flex items-center gap-3 mb-1 font-bold  text-myred">
                <Image src="/seguranca.png" alt="Transações seguras" width={30} height={0} />
                <span>TRANSAÇÃO SEGURA</span>
              </Link>

              <span className="text-gray-500">|</span>

              <Link href="devolucao" className="flex items- gap-3 mb-1 font-bold  text-myred">
                <Image src="/devolucao.png" alt="Devolução grátis" width={30} height={0} />
                <span>DEVOLUÇÃO GRÁTIS</span>
              </Link>
            </div>
          </div>
         
        </div>
      </div>

      {/* Banners */}
      <div className="flex justify-center mt-4">
        <div className="banner-container flex flex-row gap-3 justify-center w-[1300px] mx-auto items-stretch">
          {/* Banner Esquerda */}
          <div className="banner-left flex flex-col w-[350px] gap-3">
            <div className="flex-1 font-bold bg-myred text-white rounded-lg p-3 flex items-center justify-center text-sm sm:text-base h-full"></div>
          </div>

          {/* Banner Central */}
          <div className="bg-white bg-cover bg-center flex items-center justify-center w-[600px] h-auto"> {/* Mudança aqui */}
            <Image
              src={`/banner${currentBanner}.png`} // Variando entre 1, 2 e 3
              alt={`Banner ${currentBanner}`} // Para ajudar a verificar qual banner está sendo exibido
              width={700}
              height={200}
              className="transition-opacity duration-1000 ease-in-out rounded-lg object-cover"
            />
          </div>

          {/* Banner Direita */}
          <div className="banner-right flex flex-col w-[350px] gap-3">
            <div className="flex-1 font-bold bg-myred text-white rounded-lg p-3 flex items-center justify-center sm:text-base h-full"></div>
            <div className="flex-1 font-bold bg-myred text-white rounded-lg p-3 flex items-center justify-center sm:text-base h-full"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
