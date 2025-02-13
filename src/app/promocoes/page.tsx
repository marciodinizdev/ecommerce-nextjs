import ListaProdutos from "@/components/ListaProdutos";

export default function Promocoes() {
  return (
    <main className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">🔥 Promoções Especiais</h1>
      <ListaProdutos categoria="promoções" />
    </main>
  );
}
