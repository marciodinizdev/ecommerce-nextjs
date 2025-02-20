'use client';

import { useState } from 'react';

export default function SejaVendedor() {
    const [formData, setFormData] = useState({
        nome: '',
        precoAntigo: '',
        precoNovo: '',
        imagem: null as string | null,
        categoria: 'Roupas', // Valor padrão do select
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prev) => ({ ...prev, imagem: reader.result as string }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const newProduct = {
            id: crypto.randomUUID(), // Gera um ID único
            nome: formData.nome,
            precoAntigo: parseFloat(formData.precoAntigo) || 0,
            precoNovo: parseFloat(formData.precoNovo) || 0,
            imagem: formData.imagem || '',
            categoria: formData.categoria,
        };

        const response = await fetch('/api/addProduct', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProduct),
        });

        if (response.ok) {
            alert('Produto adicionado com sucesso!');
            setFormData({ nome: '', precoAntigo: '', precoNovo: '', imagem: null, categoria: 'Roupas' });
        } else {
            alert('Erro ao adicionar produto.');
        }
    };

    return (
        <main className="flex flex-col items-center p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Desapegue!</h1>
            <p className="text-xl mb-5">Tem algum produto sobrando? Venda com a gente!</p>
            <p className="text-md mb-12 text-myred italic text-center bg-slate-100 p-5 rounded-md w-[600px]">Atenção! Estamos passando por instabilidades em nosso servidor, portanto não estamos adicionando produtos novos no momento</p>
            <div className="max-w-lg mx-auto mb-12 p-6 bg-white shadow-md rounded-lg">
                <h1 className="text-xl font-bold mb-4">Adicione um Produto</h1>
                <form onSubmit={handleSubmit} className="space-y-4 text-[1.1rem]">
                    <input
                        type="text"
                        name="nome"
                        placeholder="Nome"
                        value={formData.nome}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                    
                    <input
                        type="number"
                        name="precoNovo"
                        placeholder="Preço"
                        value={formData.precoNovo}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />

                    {/* Input para carregar imagem */}
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full p-2 border rounded"
                        required
                    />

                    {/* Exibir imagem carregada */}
                    {formData.imagem && (
                        <img src={formData.imagem} alt="Prévia da Imagem" className="mt-4 w-full rounded-lg shadow-md" />
                    )}

                    {/* Select para categorias */}
                    <select
                        name="categoria"
                        value={formData.categoria}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    >
                        <option value="Roupas">Roupas</option>
                        <option value="Calçados">Calçados</option>
                        <option value="Acessórios">Acessórios</option>
                    </select>

                    <button type="submit" className="font-bold text-xl w-full bg-myred text-white p-4 hover:bg-red-700 transition ease-in-out rounded-md">
                        Adicionar Produto
                    </button>
                </form>
            </div>
        </main>
    );
}
