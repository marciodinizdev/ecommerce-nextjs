export default function DownloadApp() {
    return (
        <main className="flex flex-col items-center p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Baixe Nosso App</h1>
            <p className="text-xl mb-5">Nosso aplicativo está em desenvolvimento e em breve estará disponível para download!</p>
            <p className="text-md mb-12 text-myred italic text-center bg-slate-100 p-5 rounded-md w-full sm:w-[600px]">
                Atenção! O aplicativo ainda está em fase de desenvolvimento e não está disponível para download no momento.
            </p>
            <button className="bg-gray-500 text-white font-bold px-6 py-3 rounded-md cursor-not-allowed">
                Indisponível
            </button>
        </main>
    );
}
