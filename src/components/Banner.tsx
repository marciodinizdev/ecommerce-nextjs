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

  const bannerLinks = [
    "/novidades",
    "/promocoes",
    "/sejavendedor",
  ];

  return (
    <main className="flex flex-col">

      {/* Infos (Mobile por padrão, Desktop em md:flex) */}
      <div className="flex flex-col md:flex-row justify-center">
        <div className="flex flex-col md:flex-row gap-2 md:gap-1 justify-center w-full md:w-[1300px] mx-auto">

          {/* Info esquerda */}
          <Link href="sejavendedor" className="info-left w-full md:w-1/3">
            <div className="font-bold bg-slate-100 text-white p-3 flex items-center justify-around text-sm md:text-base h-full">
              <div className="flex items-center gap-3 font-bold text-myred">
                <Image src="/images/icons/vendedor.png" alt="Seja vendedor" width={25} height={0} />
                <div className="flex flex-col text-sm leading-tight">
                  <span className="font-bold text-myred">VENDA CONOSCO</span>
                  <span className="text-gray-800 font-thin">Bora desapegar?</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Info central */}
          <Link href="seguranca" className="info-center w-full md:w-1/3">
            <div className="font-bold bg-slate-100 text-white p-3 flex items-center justify-around text-sm md:text-base h-full">
              <div className="flex items-center gap-3">
                <Image src="/images/icons/seguranca.png" alt="Transações seguras" width={30} height={0} />
                <div className="flex flex-col text-sm leading-tight">
                  <span className="font-bold text-myred">TRANSAÇÃO SEGURA</span>
                  <span className="text-gray-800 font-thin">Rígida política de segurança</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Info direita */}
          <Link href="devolucao" className="info-right w-full md:w-1/3">
            <div className="font-bold bg-slate-100 text-white p-3 flex items-center justify-around text-sm md:text-base h-full">
              <div className="flex items-center gap-3 font-bold text-myred">
                <Image src="/images/icons/devolucao.png" alt="Devolução grátis" width={30} height={0} />
                <div className="flex flex-col text-sm leading-tight">
                  <span className="font-bold text-myred">DEVOLUÇÃO GRÁTIS</span>
                  <span className="text-gray-800 font-thin">Leia nossos termos</span>
                </div>
              </div>
            </div>
          </Link>

        </div>
      </div>

      {/* Banners */}
      <div className="flex justify-center mt-4">
        <div className="banner-container flex flex-col md:flex-row gap-3 justify-center w-full md:w-[1300px] mx-auto items-stretch">

          {/* Banner Esquerda (escondido no mobile, visível no md) */}
          <Link href="/promocao-sazonal" className="hidden md:block w-[350px]">
            <div className="overflow-hidden w-[350px] h-[292px] font-bold bg-purple-100 text-white rounded-lg flex items-center justify-center text-sm sm:text-base">
              <Image className="object-cover w-full h-full rounded-lg" src="/images/banners/oferta-sazonal.png" alt="Oferta sazonal" width={350} height={200} />
            </div>
          </Link>

          {/* Banner Central (mobile 100%, desktop largura fixa) */}
          <Link href={bannerLinks[currentBanner - 1]} className="w-full md:w-[600px]">
            <Image
              src={`/images/banners/banner${currentBanner}.png`}
              alt={`Banner ${currentBanner}`}
              width={700}
              height={200}
              className="transition-opacity duration-1000 ease-in-out rounded-lg object-cover w-full"
            />
          </Link>

          {/* Banner Direito (Mobile por padrão, desktop flex col) */}
          <div className="flex flex-col md:w-[350px] gap-3">

            {/* Banner App */}
            <Link href="/app" className="bg-myred rounded-lg p-3 flex flex-col justify-center items-center gap-3 text-sm md:text-base h-full">
              <span className="text-white">Baixe o nosso APP</span>
              <div className="w-[200px] h-[50px] flex justify-center bg-white text-myred text-xl font-bold items-center rounded-3xl">
                Baixar APP
              </div>
            </Link>

            {/* Banner Cupons */}
            <Link href="/cupons" className="bg-[#FFCA02] text-destaque rounded-lg p-3 flex flex-col items-center justify-center text-sm md:text-base h-full">
              <span>OFERTAS INCRÍVEIS COM</span>
              <span className="font-bold">CUPONS DE DESCONTO EXCLUSIVOS!</span>
            </Link>
          </div>
        </div>
      </div>

    </main>
  );
}
