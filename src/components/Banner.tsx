"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Banner() {
  const [currentBanner, setCurrentBanner] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev === 1 ? 2 : 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center px-4">
      {/* Container Responsivo */}
      <div className="banner-container flex flex-row gap-3 justify-center w-full max-w-[1300px] items-stretch">
        
        {/* Banner Esquerda */}
        <div className="banner-left flex flex-col w-1/4 min-w-[100px] gap-3">
          <div className="flex-1 font-bold bg-myred text-white rounded-lg p-3 flex items-center justify-center text-sm sm:text-base h-full">
            
          </div>
        </div>

        {/* Banner Central */}
        <div className="bg-white bg-cover bg-center flex items-center justify-center w-2/4 min-w-[200px] ">
          <Image
            src={`/banner${currentBanner}.png`}
            alt="Banner"
            width={900}
            height={300}
            className="transition-opacity duration-1000 ease-in-out rounded-lg object-cover"
          />
        </div>

        {/* Banner Direita */}
        <div className="banner-right flex flex-col w-1/4 min-w-[100px] gap-3">
          <div className="flex-1 font-bold bg-myred text-white rounded-lg p-3 flex items-center justify-center sm:text-base h-full">
            
          </div>
          <div className="flex-1 font-bold bg-myred text-white rounded-lg p-3 flex items-center justify-center sm:text-base h-full">
            
          </div>
        </div>

      </div>
    </div>
  );
}
