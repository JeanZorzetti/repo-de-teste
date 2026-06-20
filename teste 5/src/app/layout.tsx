import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Teste 5",
  description: "Next.js App Router project",
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
