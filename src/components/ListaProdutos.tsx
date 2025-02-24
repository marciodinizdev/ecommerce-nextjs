"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Produto {
  id: number;
  nome: string;
  precoAntigo: string;
  precoNovo: string;
  imagem: string;
  categorias: string[];
}

export default function ListaProdutos({ categoria }: { categoria?: string }) {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch("/produtos.json");
        const data = await response.json();

        const produtosFiltrados = categoria
          ? data.filter((p: Produto) => p.categorias.includes(categoria))
          : data;

        setProdutos(produtosFiltrados);
      } catch (error) {
        console.error("Erro ao carregar os produtos:", error);
      }
    };

    fetchProdutos();
  }, [categoria]);

  return (
    <div className="flex justify-center w-full">
      <div className="bg-slate-100 shadow-md p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full max-w-6xl mb-12">
        {produtos.length === 0 ? (
          <p>Carregando produtos...</p>
        ) : (
          produtos.map((produto) => (
            <Link
              href={`/produto/${produto.id}`}
              key={produto.id}
              className="bg-white border-2 pb-6 shadow-md flex flex-col items-center hover:shadow-2xl hover:border-myred transition"
            >
              {/* Imagem ocupando a parte superior */}
              <div className="w-full mb-4 relative">
                {/* Selo de OFERTA (só aparece se precoAntigo não for vazio) */}
                {produto.precoAntigo && (
                  <div className="absolute bottom-2 left-2 bg-destaque text-white text-md font-bold px-3 py-1 rounded">
                    OFERTA🔥
                  </div>
                )}
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-full h-48 sm:h-60 object-cover"
                />
              </div>

              {/* Nome e preços */}
              <div className="flex flex-col items-center space-y-2 flex-grow px-2">
                <h2 className="text-lg font-semibold text-center">{produto.nome}</h2>
                <div className="flex items-center space-x-2">
                  {produto.precoAntigo && (
                    <span className="text-slate-500 line-through">{produto.precoAntigo}</span>
                  )}
                  <span className="text-xl font-bold text-myred">{produto.precoNovo}</span>
                </div>
              </div>

              {/* Botão de compra mais centralizado */}
              <button className="mt-3 bg-myred text-white text-[1.1rem] font-semibold px-10 py-3 hover:bg-red-700 transition">
                Comprar
              </button>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}