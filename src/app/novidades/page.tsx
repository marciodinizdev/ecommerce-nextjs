import ListaProdutos from "@/components/ListaProdutos";

export default function Novidades() {
  return (
    <main className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">✨ Novidades</h1>
      <ListaProdutos categoria="novidades" />
    </main>
  );
}
