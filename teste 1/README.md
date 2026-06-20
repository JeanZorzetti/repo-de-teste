# Polaris IA — Landing Page

Landing page de **Polaris IA**, plataforma de atendimento inteligente no WhatsApp. A IA responde clientes 24h por dia, qualifica leads e ajuda a fechar vendas automaticamente — com respostas em milissegundos via Groq AI.

> Pasta `teste 1` do repositório `repo-de-teste` (Code Factory da Polaris Teams — Sub-projeto C).

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS 3**
- **lucide-react** (ícones)
- **Radix UI** (`@radix-ui/react-slot`) + **class-variance-authority** para o componente `Button`

## Estrutura

```
src/
├── app/
│   ├── layout.tsx              # Root layout + metadata/SEO
│   └── (marketing)/
│       ├── layout.tsx
│       └── page.tsx            # Landing page completa
├── components/
│   └── ui/
│       └── button.tsx          # Botão (CVA + Radix Slot)
└── lib/
    └── utils.ts                # Helper cn()
```

## Seções da página

- **Navbar** fixa com navegação âncora (Benefícios, Como funciona, Preços)
- **Hero** com badge "Powered by Groq AI" e mockup do dashboard de atendimento
- **Stats** (98% de resolução, <1s de resposta, 3× conversões, 24/7)
- **Benefícios** — 6 diferenciais (24h, respostas rápidas, multi-canal, analytics, IA treinada, LGPD)
- **Como funciona** — 3 passos (conectar WhatsApp, configurar IA, automatizar)
- **CTA final** com prova social
- **Footer** com links de Produto, Empresa e Legal

## Como rodar

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando         | Descrição                          |
| --------------- | ---------------------------------- |
| `npm run dev`   | Servidor de desenvolvimento        |
| `npm run build` | Build de produção                  |
| `npm run start` | Servir o build de produção         |
| `npm run lint`  | Lint com ESLint (config Next)      |
