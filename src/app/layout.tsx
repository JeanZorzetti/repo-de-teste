import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Polaris IA — Atendimento Inteligente no WhatsApp",
  description:
    "Automatize seu atendimento no WhatsApp com Inteligência Artificial. Responda clientes 24h por dia, aumente conversões e escale seu negócio com a Polaris IA.",
  keywords: ["IA", "WhatsApp", "atendimento", "automação", "chatbot", "Polaris"],
  authors: [{ name: "Polaris IA" }],
  openGraph: {
    title: "Polaris IA — Atendimento Inteligente no WhatsApp",
    description:
      "Automatize seu atendimento no WhatsApp com Inteligência Artificial.",
    url: "https://polarisia.com.br",
    siteName: "Polaris IA",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
