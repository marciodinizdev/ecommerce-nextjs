import ListaProdutos from "@/components/ListaProdutos";

export default function Roupas() {
  return (
    <main className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Acessórios</h1>
      <ListaProdutos categoria="acessórios" />
    </main>
  );
}