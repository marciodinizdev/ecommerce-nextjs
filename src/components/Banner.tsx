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

  // Banner links
  const bannerLinks = [
    "/novidades",
    "/promocoes",
    "/vender",
  ];

  return (
    <main className="flex flex-col ">

      {/* Infos */}
      <div className="flex justify-center">
        <div className="flex flex-row gap-1 justify-center w-[1300px] h-[60px] mx-auto items-stretch">

          {/* Info esquerda */}
          <Link href="sejavendedor" className="info-left flex flex-col w-[1300px] gap-3">
            <div className="font-bold bg-gray-100 text-white p-3 flex items-center justify-around text-sm sm:text-base h-full">
              <div className="flex items-center gap-3 font-bold  text-myred">
                <Image src="/images/icons/vendedor.png" alt="Seja vendedor" width={25} height={0} />
                <div className="flex flex-col text-sm leading-tight">
                  <span className="font-bold text-myred">VENDA CONOSCO</span>
                  <span className="text-gray-800 font-thin">Bora desapegar?</span>
                </div>
              </div>

            </div>
          </Link>

          {/* Info central */}
          <Link href="seguranca" className="info-center flex flex-col w-[1300px] gap-3">
            <div className="font-bold bg-gray-100 text-white p-3 flex items-center justify-around text-sm sm:text-base h-full">
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
          <Link href="devolucao" className="info-right flex flex-col w-[1300px] gap-3">
            <div className="font-bold bg-gray-100 text-white p-3 flex items-center justify-around text-sm sm:text-base h-full">

              <div className="flex items- gap-3 font-bold  text-myred">
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
        <div className="banner-container flex flex-row gap-3 justify-center w-[1300px] mx-auto items-stretch">

          {/* Banner Esquerda */}
          <Link href="/promocao-sazonal" className="banner-left flex flex-col w-[350px] gap-3">
            <div className="overflow-hidden w-[350px] h-[292] font-bold bg-purple-100 text-white rounded-lg  flex items-center justify-center text-sm sm:text-base">
              <Image className="object-cover w-full h-full rounded-lg" src="/images/banners/oferta-sazonal.png" alt="Oferta sazonal" width={350} height={200} />
            </div>
          </Link>

          {/* Banner Central */}
          <Link href={bannerLinks[currentBanner - 1]} className="bg-white bg-cover bg-center flex items-center justify-center w-[600px] h-auto"> 
            <Image
              src={`/images/banners/banner${currentBanner}.png`} // Variando entre 1, 2 e 3
              alt={`Banner ${currentBanner}`} // Para ajudar a verificar qual banner está sendo exibido
              width={700}
              height={200}
              className="transition-opacity duration-1000 ease-in-out rounded-lg object-cover"
            />
          </Link>

          {/* Banner Direita */}
          <div className="banner-right flex flex-col w-[350px] gap-3">

            {/* Banner App */}
            <Link href="/app" className="flex-1 bg-myred  rounded-lg p-3 flex flex-col justify-center items-center gap-3 sm:text-base h-full">
              <span className="text-white ">Baixe o nosso APP</span>
              <div className="w-[200px] h-[50px] flex justify-center bg-white text-myred text-xl font-bold items-center rounded-3xl">
                Baixar APP
              </div>
            </Link>

            {/* Banner Cupons */}
            <Link href="/cupons" className="flex-1 bg-[#FFCA02] text-[#9D0C94] rounded-lg p-3 flex flex-col items-center justify-center sm:text-base h-full">
              <span>OFERTAS INCRÍVEIS COM</span>
              <span className="font-bold">CUPONS DE DESCONTO EXCLUSIVOS!</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
