export default function Devolução() {
    return (
      <main className="flex flex-col items-center justify-center p-6 w-full max-w-[1300px] mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Devolução</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Nossa política de devolução permite que você devolva os produtos em até 7 dias após o recebimento. Se não estiver satisfeito com a sua compra, basta seguir os passos abaixo para abrir um chamado de devolução:
        </p>
        <ul className="text-lg text-gray-700 mb-6 text-center">
          <li>1. Entre em contato conosco através da seção de "Abertura de Chamado".</li>
          <li>2. Informe o motivo da devolução e os detalhes do produto.</li>
          <li>3. Aguardamos a confirmação do processo de devolução, que será gerido de forma rápida e eficiente.</li>
        </ul>
        <div className="bg-gray-100 p-4 rounded-md shadow-md w-full max-w-md mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Abertura de Chamado de Devolução</h2>
          <form className="flex flex-col">
            <label htmlFor="motivo" className="text-gray-700">Motivo da devolução</label>
            <textarea
              id="motivo"
              className="border-2 border-gray-300 p-2 mb-4"
              placeholder="Digite o motivo da devolução"
            ></textarea>
            <button type="submit" className="bg-myred text-white p-2 rounded-md hover:bg-red-700 transition ease-in-out">Enviar Solicitação</button>
          </form>
        </div>
      </main>
    );
  }
  