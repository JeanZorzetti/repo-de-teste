import { NextRequest, NextResponse } from 'next/server';

interface Message {
  id: string;
  author: string;
  text: string;
  createdAt: string;
}

const messages: Message[] = [
  {
    id: crypto.randomUUID(),
    author: 'Ana Lima',
    text: 'Bem-vindos ao mural de recados! Deixem suas mensagens aqui.',
    createdAt: new Date('2026-06-18T09:00:00Z').toISOString(),
  },
  {
    id: crypto.randomUUID(),
    author: 'Carlos Souza',
    text: 'Ótima iniciativa! Vou acompanhar as atualizações por aqui.',
    createdAt: new Date('2026-06-19T14:30:00Z').toISOString(),
  },
  {
    id: crypto.randomUUID(),
    author: 'Fernanda Rocha',
    text: 'Adorei o projeto. Parabéns a todos envolvidos!',
    createdAt: new Date('2026-06-20T08:15:00Z').toISOString(),
  },
];

export async function GET() {
  return NextResponse.json(messages, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { author, text } = body ?? {};

  if (!text || typeof text !== 'string' || text.trim() === '') {
    return NextResponse.json(
      { error: 'O campo "text" é obrigatório e não pode ser vazio.' },
      { status: 400 }
    );
  }

  const newMessage: Message = {
    id: crypto.randomUUID(),
    author: typeof author === 'string' && author.trim() !== '' ? author.trim() : 'Anônimo',
    text: text.trim(),
    createdAt: new Date().toISOString(),
  };

  messages.push(newMessage);

  return NextResponse.json(newMessage, { status: 201 });
}
