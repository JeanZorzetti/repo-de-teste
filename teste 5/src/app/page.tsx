'use client';

import { useEffect, useState } from 'react';

interface Message {
  id: string | number;
  author: string;
  text: string;
  createdAt: string;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/messages')
      .then((res) => {
        if (!res.ok) throw new Error(`Erro ao carregar recados (${res.status})`);
        return res.json();
      })
      .then((data) => setMessages(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author, text }),
      });
      if (!res.ok) throw new Error(`Erro ao enviar recado (${res.status})`);
      const newMessage: Message = await res.json();
      setMessages((prev) => [newMessage, ...prev]);
      setAuthor('');
      setText('');
    } catch (err: unknown) {
      setSubmitError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-indigo-700 tracking-tight">
            Mural de Recados
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Deixe sua mensagem para todos verem
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8 space-y-8">
        {/* Formulário */}
        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Novo Recado</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="author"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Seu nome
              </label>
              <input
                id="author"
                type="text"
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Ex: Maria Silva"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              />
            </div>
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Mensagem
              </label>
              <textarea
                id="text"
                required
                rows={3}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Escreva seu recado aqui…"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition resize-none"
              />
            </div>
            {submitError && (
              <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">
                {submitError}
              </p>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-semibold py-2 rounded-lg transition"
            >
              {submitting ? 'Enviando…' : 'Enviar'}
            </button>
          </form>
        </section>

        {/* Lista de recados */}
        <section>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Recados</h2>

          {loading && (
            <div className="flex items-center justify-center py-12 text-indigo-500 text-sm gap-2">
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                />
              </svg>
              Carregando…
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
              {error}
            </div>
          )}

          {!loading && !error && messages.length === 0 && (
            <p className="text-center text-gray-400 py-12 text-sm">
              Nenhum recado ainda. Seja o primeiro!
            </p>
          )}

          <ul className="space-y-4">
            {messages.map((msg) => (
              <li
                key={msg.id}
                className="bg-white rounded-2xl shadow px-5 py-4 border-l-4 border-indigo-400"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-indigo-700 text-sm">
                    {msg.author}
                  </span>
                  <span className="text-xs text-gray-400">
                    {new Date(msg.createdAt).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{msg.text}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
