import Banner from "@/components/Banner";
import ListaProdutos from "@/components/ListaProdutos";

export default function HomePage() {
  return (
    <div className='home-page px-10'>
      <Banner />
      <h1 className="text-3xl font-bold text-gray-900 mb-6 mt-10 text-center"> Destaques para você</h1>
      <ListaProdutos />
    </div>
  );
}
