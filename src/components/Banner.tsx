"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Banner() {
  const [currentBanner, setCurrentBanner] = useState(1); 

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev === 1 ? 2 : 1)); // Alterna entre 1 e 2
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white bg-cover bg-center flex items-center justify-center">
      <Image
        src={`/banner${currentBanner}.png`}
        alt="Banner"
        width={1200}
        height={300}
        className="transition-opacity duration-1000 ease-in-out" 
      />
    </div>
  );
}