"use client";

import { useState } from "react";

export default function Cupons() {
  const cupons = [
    { codigo: "DESCONTO10", descricao: "10% de desconto na sua próxima compra" },
    { codigo: "FRETEGRATIS", descricao: "Frete grátis em pedidos acima de R$ 150" },
    { codigo: "BOASVINDAS", descricao: "R$ 20 de desconto para novos clientes" },
  ];

  // Estado para controlar o feedback de cópia
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (codigo: string, index: number) => {
    // Copia o código para a área de transferência
    navigator.clipboard.writeText(codigo)
      .then(() => {
        // Atualiza o estado para mostrar o feedback
        setCopiedIndex(index);

        // Remove o feedback após 2 segundos
        setTimeout(() => {
          setCopiedIndex(null);
        }, 1000);
      })
      .catch((error) => {
        console.error("Erro ao copiar o código:", error);
      });
  };

  return (
    <main className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Cupons de Desconto</h1>
      <p className="text-xl mb-5">Aproveite os melhores descontos para economizar em suas compras!</p>

      <div className="max-w-lg mx-auto mb-12 p-6 bg-white shadow-md rounded-lg">
        {cupons.map((cupom, index) => (
          <div key={cupom.codigo} className="flex justify-between items-center bg-gray-100 gap-4 p-4 rounded-md mb-4">
            <div>
              <p className="text-lg font-bold">{cupom.codigo}</p>
              <p className="text-sm text-gray-700">{cupom.descricao}</p>
            </div>
            <button
              onClick={() => handleCopy(cupom.codigo, index)}
              className={`${
                copiedIndex === index
                  ? "bg-green-500" // Cor verde quando copiado
                  : "bg-myred hover:bg-red-700" // Cor original
              } text-white px-4 py-2 rounded-md transition ease-in-out w-32`} // Largura fixa de 8rem (128px)
            >
              {copiedIndex === index ? "Código copiado!" : "Copiar Código"}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}