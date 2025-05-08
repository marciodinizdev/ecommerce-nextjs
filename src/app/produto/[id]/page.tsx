import { notFound } from "next/navigation";
import Image from "next/image";

// Avaliações sobre a loja
const avaliacoes = [
  "Ótima loja! Envio rápido e produtos de qualidade.",
  "Amei minha experiência de compra. O atendimento é excelente!",
  "Produto chegou antes do esperado e em perfeito estado. Super recomendo!",
  "Adoro essa loja! Sempre encontro o que preciso.",
  "Experiência fantástica, sempre superando minhas expectativas.",
  "Atendimento impecável! Com certeza voltarei a comprar.",
  "Produtos de qualidade e entrega rápida, muito satisfeito!",
  "Essa loja é maravilhosa! Tudo sempre chega no prazo e em ótimo estado.",
  "Comprei meu primeiro produto e a experiência foi incrível. Super recomendo!",
  "A loja tem ótimos preços e um atendimento excelente. Superou minhas expectativas!"
];

import produtos from "@/../public/produtos.json"; // ajuste o caminho se necessário

interface Produto {
  id: number;
  nome: string;
  precoNovo: string;
  precoAntigo?: string;
  imagem: string;
  categorias: string[];
}

async function getProduto(id: string | undefined) {
  if (!id) return null; // Evita erro se `id` for undefined

  return produtos.find((p) => p.id === Number(id)) || null;
}


export default async function ProdutoPage({ params }: { params: Promise<{ id?: string }> }) {
  const { id } = await params;

  if (!id) {
    return notFound();
  }

  const produto = await getProduto(id);

  if (!produto) {
    return notFound();
  }

  // Sortear uma avaliação aleatória da loja
  const avaliacaoAleatoria = avaliacoes[Math.floor(Math.random() * avaliacoes.length)];

  return (
    <div className="flex justify-center w-full">
      <div className="bg-white shadow-md rounded-lg p-8 flex flex-col md:flex-row max-w-6xl w-full my-5">

        {/* Imagem */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-lg">
            {/* Selo de OFERTA */}
            {produto.precoAntigo && (
              <div className="absolute top-4 left-4 bg-destaque text-white text-lg font-bold px-4 py-2 rounded-lg">
                OFERTA🔥
              </div>
            )}
            <div className="aspect-square w-full md:aspect-auto md:h-[600px]">
              <Image 
                src={produto.imagem} 
                alt={produto.nome} 
                width={600} 
                height={600} 
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Informações do produto */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start mt-6 md:mt-0 text-center md:text-left px-6">
          <h1 className="text-3xl font-bold">{produto.nome}</h1>

          {/* Preços */}
          <div className="mt-4 flex flex-col space-y-2">
            {produto.precoAntigo && (
              <p className="text-gray-500 line-through text-lg">De: {produto.precoAntigo}</p>
            )}
            <p className="text-2xl font-bold text-myred">Por: {produto.precoNovo}</p>
          </div>

          {/* Categorias */}
          <p className="mt-4 text-lg">
            <span className="font-semibold">Categorias:</span>{" "}
            {produto.categorias.map((cat: string, index: number) => (
              <span key={index} className=" px-2">
                <span className="bg-slate-100 text-[#9462FF] px-2 py-1 rounded-md font-bold shadow-md">
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </span>
              </span>
            ))}
          </p>
          
          {/* Avaliações sobre a loja */}
          <div className="mt-6 w-full">
            <h3 className="text-lg font-bold text-gray-700">Avaliações dos Clientes</h3>
            <p className="text-yellow-500 text-xl mt-2">⭐⭐⭐⭐☆ (4.5 de 5)</p>
            <p className="text-gray-600 italic mt-2">
              {avaliacaoAleatoria}
            </p>
          </div>

          {/* Garantia e Política de Devolução */}
          <div className="mt-6 bg-gray-100 p-4 rounded-lg w-full">
            <h3 className="text-lg font-bold text-gray-700 mb-2">Garantia & Devolução</h3>
            <p className="text-gray-600">
              Oferecemos garantia de 7 dias para troca ou devolução. Se não estiver satisfeito, garantimos seu reembolso.
            </p>
          </div>

          {/* Frete e Entrega */}
          <div className="mt-6 w-full">
            <h3 className="text-lg font-bold text-gray-700">Frete & Prazo de Entrega</h3>
            <p className="text-gray-600">Entrega estimada entre <strong>1 a 5 dias úteis</strong>.</p>
          </div>

          {/* Botão de compra */}
          <button className="mt-6 bg-myred text-white text-lg font-semibold px-10 py-3 rounded-lg hover:bg-red-700 transition">
            Comprar agora
          </button>
        </div>
      </div>
    </div>
  );
}
