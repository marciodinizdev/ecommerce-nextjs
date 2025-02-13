"use client";

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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
      {produtos.length === 0 ? (
        <p>Carregando produtos...</p>
      ) : (
        produtos.map((produto) => (
          <div
            key={produto.id}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg transition-shadow"
          >
            <img src={produto.imagem} alt={produto.nome} className="w-40 h-40 object-cover mb-4 rounded-md" />
            <h2 className="text-lg font-semibold">{produto.nome}</h2>
            <p className="text-gray-500 line-through">{produto.precoAntigo}</p>
            <p className="text-xl font-bold text-myred">{produto.precoNovo}</p>
            <button className="mt-3 bg-myred text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
              Comprar
            </button>
          </div>
        ))
      )}
    </div>
  );
}
