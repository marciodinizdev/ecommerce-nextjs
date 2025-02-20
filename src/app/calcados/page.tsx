import ListaProdutos from "@/components/ListaProdutos";

export default function Calcados() {
  return (
    <main className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Calçados</h1>
      <ListaProdutos categoria="calçados" />
    </main>
  );
}
