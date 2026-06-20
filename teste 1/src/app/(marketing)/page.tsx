import Link from "next/link";
import {
  MessageCircle,
  Zap,
  Clock,
  BarChart3,
  Shield,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Bot,
  Plug,
  Settings2,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#25D366]">
            <MessageCircle className="h-4 w-4 text-black" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            Polaris <span className="text-[#25D366]">IA</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#beneficios"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            Benefícios
          </Link>
          <Link
            href="#como-funciona"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            Como funciona
          </Link>
          <Link
            href="#precos"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            Preços
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden text-sm text-zinc-400 transition-colors hover:text-white md:block"
          >
            Fazer login
          </Link>
          <Button asChild size="sm" className="bg-[#25D366] text-black hover:bg-[#1fb855] font-semibold">
            <Link href="/register">Começar grátis</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0a0a] px-6 pt-20">
      {/* Radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-[600px] w-[600px] rounded-full bg-[#25D366]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-1.5 text-sm text-[#25D366]">
          <Sparkles className="h-3.5 w-3.5" />
          Powered by Groq AI — Respostas em milissegundos
        </div>

        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Atendimento{" "}
          <span className="text-[#25D366]">inteligente</span>
          <br />
          no WhatsApp,{" "}
          <span className="text-zinc-400">24h por dia.</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-zinc-400 leading-relaxed">
          Configure agentes de IA para responder seus clientes automaticamente,
          qualificar leads e fechar vendas — enquanto você foca no que realmente
          importa.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className="w-full bg-[#25D366] text-black hover:bg-[#1fb855] font-bold text-base sm:w-auto"
          >
            <Link href="/register" className="flex items-center gap-2">
              Começar grátis
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white text-base sm:w-auto"
          >
            <Link href="/login">Ver demonstração</Link>
          </Button>
        </div>

        <p className="mt-6 text-sm text-zinc-600">
          Sem cartão de crédito · 14 dias grátis · Cancele quando quiser
        </p>

        {/* Product mockup */}
        <div className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 shadow-2xl">
          <div className="flex items-center gap-2 border-b border-zinc-800 pb-3 mb-4">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-zinc-700" />
              <span className="h-3 w-3 rounded-full bg-zinc-700" />
              <span className="h-3 w-3 rounded-full bg-zinc-700" />
            </div>
            <span className="text-xs text-zinc-600 mx-auto">
              Polaris IA — Dashboard de Atendimento
            </span>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { label: "Respondido pela IA", msg: "Olá! Posso te ajudar com informações sobre nossos planos 😊", time: "agora", green: true },
              { label: "Lead qualificado", msg: "Perfeito! Vou encaminhar para o time de vendas...", time: "2min", green: false },
              { label: "Venda fechada", msg: "Pagamento confirmado! Seu acesso está ativo.", time: "5min", green: false },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-left"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      item.green
                        ? "bg-[#25D366]/15 text-[#25D366]"
                        : "bg-zinc-800 text-zinc-400"
                    }`}
                  >
                    {item.label}
                  </span>
                  <span className="text-xs text-zinc-600">{item.time}</span>
                </div>
                <p className="text-sm text-zinc-300 leading-snug">{item.msg}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Benefits / Features ──────────────────────────────────────────────────────

const features = [
  {
    icon: Clock,
    title: "Atendimento 24h/7 dias",
    description:
      "Sua IA nunca dorme. Responde clientes a qualquer hora, inclusive feriados e finais de semana, sem custo extra.",
  },
  {
    icon: Zap,
    title: "Respostas em milissegundos",
    description:
      "Integração com Groq AI garante respostas ultra-rápidas, mantendo a conversa fluida e natural para o cliente.",
  },
  {
    icon: MessageCircle,
    title: "Multi-canal WhatsApp",
    description:
      "Gerencie múltiplos números e atendentes em um único painel. Escale sem precisar contratar mais equipe.",
  },
  {
    icon: BarChart3,
    title: "Analytics em tempo real",
    description:
      "Acompanhe volume de atendimentos, taxa de resolução, satisfação e leads gerados — tudo em um dashboard.",
  },
  {
    icon: Bot,
    title: "IA treinada no seu negócio",
    description:
      "Carregue catálogos, FAQs e políticas da sua empresa. A IA responde com contexto real do seu produto.",
  },
  {
    icon: Shield,
    title: "Seguro e conformidade LGPD",
    description:
      "Dados criptografados e armazenados em servidores no Brasil. Total conformidade com a Lei Geral de Proteção de Dados.",
  },
];

function Benefits() {
  return (
    <section id="beneficios" className="bg-[#0a0a0a] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[#25D366]">
            Diferenciais
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Tudo que você precisa para{" "}
            <span className="text-zinc-400">escalar o atendimento</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-all duration-300 hover:border-[#25D366]/40 hover:bg-zinc-900/70"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366] transition-colors group-hover:bg-[#25D366]/20">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Como funciona ────────────────────────────────────────────────────────────

const steps = [
  {
    number: "01",
    icon: Plug,
    title: "Conecte seu WhatsApp",
    description:
      "Integre seu número em menos de 5 minutos via API oficial do WhatsApp Business. Zero código necessário.",
  },
  {
    number: "02",
    icon: Settings2,
    title: "Configure sua IA",
    description:
      "Defina a personalidade, instrua com informações do seu negócio e crie fluxos de atendimento personalizados.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Automatize e escale",
    description:
      "Sua IA entra em ação imediatamente — respondendo, qualificando leads e transferindo para humanos quando necessário.",
  },
];

function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-zinc-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[#25D366]">
            Processo
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Comece em{" "}
            <span className="text-[#25D366]">3 passos simples</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Do zero ao atendimento automatizado em menos de 10 minutos.
          </p>
        </div>

        <div className="relative grid gap-8 sm:grid-cols-3">
          {/* Connector line (desktop) */}
          <div
            aria-hidden
            className="absolute left-[16.67%] right-[16.67%] top-10 hidden h-px bg-gradient-to-r from-transparent via-[#25D366]/40 to-transparent sm:block"
          />

          {steps.map(({ number, icon: Icon, title, description }) => (
            <div key={number} className="relative flex flex-col items-center text-center">
              <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900">
                <Icon className="h-8 w-8 text-[#25D366]" />
                <span className="absolute -top-2.5 -right-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366] text-xs font-bold text-black">
                  {number.replace("0", "")}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Social proof / Stats ─────────────────────────────────────────────────────

const stats = [
  { value: "98%", label: "Taxa de resolução automática" },
  { value: "<1s", label: "Tempo médio de resposta" },
  { value: "3×", label: "Aumento em conversões" },
  { value: "24/7", label: "Disponibilidade garantida" },
];

function Stats() {
  return (
    <section className="border-y border-zinc-800 bg-[#0a0a0a] px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-4xl font-extrabold text-[#25D366] sm:text-5xl">
                {value}
              </p>
              <p className="mt-2 text-sm text-zinc-400">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Final ────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section id="precos" className="bg-[#0a0a0a] px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <div className="rounded-3xl border border-[#25D366]/20 bg-gradient-to-b from-[#25D366]/10 to-zinc-900/30 p-10 md:p-16">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366]">
            <MessageCircle className="h-7 w-7 text-black" />
          </div>

          <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Pronto para transformar seu atendimento?
          </h2>

          <p className="mb-8 text-lg text-zinc-400 leading-relaxed">
            Mais de <strong className="text-white">500 empresas</strong> já
            automatizaram o WhatsApp com a Polaris IA. Comece grátis hoje — sem
            cartão de crédito, cancele quando quiser.
          </p>

          <ul className="mb-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            {[
              "14 dias de teste grátis",
              "Suporte em português",
              "Sem taxa de setup",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-zinc-300"
              >
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#25D366]" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="w-full bg-[#25D366] text-black hover:bg-[#1fb855] font-bold text-base sm:w-auto"
            >
              <Link href="/register" className="flex items-center gap-2">
                Começar grátis agora
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="text-zinc-400 hover:text-white hover:bg-zinc-800 text-base"
            >
              <Link href="/login">Já tenho conta</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-zinc-800/60 bg-zinc-950 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#25D366]">
                <MessageCircle className="h-4 w-4 text-black" />
              </div>
              <span className="text-lg font-bold text-white">
                Polaris <span className="text-[#25D366]">IA</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-zinc-500">
              Atendimento inteligente no WhatsApp para empresas que querem crescer sem aumentar custos.
            </p>
          </div>

          {/* Produto */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-zinc-400">
              Produto
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Funcionalidades", href: "#beneficios" },
                { label: "Como funciona", href: "#como-funciona" },
                { label: "Preços", href: "#precos" },
                { label: "Changelog", href: "/changelog" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-zinc-500 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-zinc-400">
              Empresa
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Sobre nós", href: "/sobre" },
                { label: "Blog", href: "/blog" },
                { label: "Contato", href: "/contato" },
                { label: "Carreiras", href: "/carreiras" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-zinc-500 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-zinc-400">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Termos de uso", href: "/termos" },
                { label: "Privacidade", href: "/privacidade" },
                { label: "Cookies", href: "/cookies" },
                { label: "LGPD", href: "/lgpd" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-zinc-500 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-zinc-800/60 pt-8 sm:flex-row">
          <p className="text-sm text-zinc-600">
            © {currentYear} Polaris IA. Todos os direitos reservados.
          </p>
          <p className="text-sm text-zinc-600">
            Feito com ❤️ no Brasil · polarisia.com.br
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LandingPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Benefits />
      <HowItWorks />
      <FinalCTA />
      <Footer />
    </main>
  );
}
