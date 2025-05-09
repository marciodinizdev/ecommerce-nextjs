'use client';

import { useState } from 'react';

export default function Suporte() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const response = await fetch('/suporte', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            setFormData({ nome: '', email: '', mensagem: '' });
        } else {
            alert('Erro ao enviar mensagem. Tente novamente mais tarde.');
        }
    };

    return (
        <main className="flex flex-col items-center p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Suporte ao Cliente</h1>
            <p className="text-xl mb-5">Tem alguma dúvida ou problema? Entre em contato conosco!</p>
            <div className="max-w-lg mx-auto mb-12 p-6 bg-white shadow-md rounded-lg">
                <h1 className="text-xl font-bold mb-4">Fale Conosco</h1>
                <form onSubmit={handleSubmit} className="space-y-4 text-[1.1rem]">
                    <input
                        type="text"
                        name="nome"
                        placeholder="Seu Nome"
                        value={formData.nome}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Seu E-mail"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />

                    <textarea
                        name="mensagem"
                        placeholder="Digite sua mensagem..."
                        value={formData.mensagem}
                        onChange={handleChange}
                        className="w-full p-2 border rounded h-32 resize-none"
                        required
                    />

                    <button type="submit" className="font-bold text-xl w-full bg-myred text-white p-4 hover:bg-red-700 transition ease-in-out rounded-md">
                        Enviar Mensagem
                    </button>
                </form>
            </div>
        </main>
    );
}
