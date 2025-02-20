import ListaProdutos from "@/components/ListaProdutos";

export default function PromocaoSazonal() {
  return (
    <main className="flex flex-col items-center p-6">
   

      {/* Banner Sazonal com Vídeo */}
      <video 
        src="/images/sazonal/banner-sazonal.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="w-[1300px] max-w-[1300px] rounded-lg mb-6"
      />

      <ListaProdutos categoria="sazonal" />
    </main>
  );
}
