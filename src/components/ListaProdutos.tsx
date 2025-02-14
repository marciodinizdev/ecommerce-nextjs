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
      <div className="grid grid-cols-4 gap-5 min-w-[1300px] w-full max-w-6xl mb-12">
        {produtos.length === 0 ? (
          <p>Carregando produtos...</p>
        ) : (
          produtos.map((produto) => (
            <Link
              href={`/produto/${produto.id}`}
              key={produto.id}
              className="bg-white border pb-6 shadow-md flex flex-col items-center hover:shadow-lg hover:border-myred transition"
            >
              {/* Imagem ocupando a parte superior */}
              <div className="w-full mb-4">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-full h-60 object-cover "
                />
              </div>

              {/* Nome e preços */}
              <div className="flex flex-col items-center space-y-2 flex-grow">
                <h2 className="text-lg font-semibold text-center">{produto.nome}</h2>
                <p className="text-gray-500 line-through">{produto.precoAntigo}</p>
                <p className="text-xl font-bold text-myred">{produto.precoNovo}</p>
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
