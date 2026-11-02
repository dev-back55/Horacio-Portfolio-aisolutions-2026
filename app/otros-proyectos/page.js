import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  CalendarDays,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Otros Proyectos | Horacio Abitú",
  description:
    "Una selección de sitios web, portales institucionales y plataformas digitales desarrolladas por Horacio Abitú.",
};

const otros_proyectos = [
  {
    name: "Rawson Chubut Vivilo",
    type: "Portal web · Turismo y ciudad",
    description:
      "Una experiencia digital para descubrir información, lugares y propuestas de Rawson.",
    tags: ["Web institucional", "Turismo"],
    image:
      "https://res.cloudinary.com/djdp4cavt/image/upload/v1793636347/web-horacio-porfolio/rawsonchubutonline_oslwl1.avif",
    url: "https://www.rawsonchubut.com.ar/",
    github: "",
  },
  {
    name: "FM Bahía Engaño",
    type: "Portal web · Emisora radial",
    description:
      "Portal web de noticias, información y programación para emisora radial.",
    tags: ["Web institucional", "Radio"],
    image:
      "https://res.cloudinary.com/djdp4cavt/image/upload/v1793636346/web-horacio-porfolio/fmbahiaengano_aoswfa.avif",
    url: "https://fmbahiaengano.com/",
    github: "",
  },
  {
    name: "Cecilia María Aliaga",
    type: "Portal web · Coach Ontológica",
    description:
      "Portal web institucional de Cecilia María Aliaga, Coach Ontológica.",
    tags: ["Portfolio", "Coach Ontológica"],
    image:
      "https://res.cloudinary.com/djdp4cavt/image/upload/v1793636346/web-horacio-porfolio/cecilia-aliaga_bmmjvu.avif",
    url: "https://www.ceciliamaliaga.com.ar/",
    github: "",
  },
  {
    name: "Amigos del Novio 2026 Conferencia",
    type: "Landing Page · Eventos",
    description: "Landing Page para la Conferencia Amigos del Novio 2026.",
    tags: ["Landing Page", "Eventos"],
    image:
      "https://res.cloudinary.com/djdp4cavt/image/upload/v1793636346/web-horacio-porfolio/adn2026_1_erat0b.avif",
    url: "https://cdarawson.com/adn2026/",
    github: "",
  },
];

function Logo() {
  return (
    <Link
      href="/#inicio"
      aria-label="Horacio Abitú, ir al inicio"
      className="group flex items-center gap-3"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-xl font-black italic text-cyan-300">
        HA
      </span>
      <span className="leading-tight">
        <span className="block text-base font-bold tracking-tight text-white sm:text-lg">
          Horacio <span className="text-cyan-300">Abitú</span>
        </span>
        <span className="mt-1 block text-[9px] font-bold uppercase tracking-[.16em] text-slate-400">
          Desarrollador Full Stack + IA
        </span>
      </span>
    </Link>
  );
}

export default function OtrosProyectosPage() {
  return (
    <main className="min-h-screen bg-[#020817] text-slate-100 overflow-hidden">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#020817]/85 backdrop-blur-xl">
        <div className="container-wide flex h-[76px] items-center justify-between">
          <Logo />
          <nav
            className="hidden items-center gap-7 text-sm text-slate-300 md:flex"
            aria-label="Navegación principal"
          >
            <Link className="transition hover:text-cyan-300" href="/#inicio">
              Inicio
            </Link>
            <Link className="transition hover:text-cyan-300" href="/#servicios">
              Servicios
            </Link>
            <Link className="text-cyan-300" href="/#proyectos">
              Proyectos
            </Link>
            <Link className="transition hover:text-cyan-300" href="/#sobre-mi">
              Sobre mí
            </Link>
            <Link className="transition hover:text-cyan-300" href="/#contacto">
              Contacto
            </Link>
          </nav>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a
              href="https://calendar.app.google/qB7HtErZcYHQXboN7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CalendarDays size={16} /> Agendar llamada
            </a>
          </Button>
          <Link
            href="/#contacto"
            aria-label="Ir a contacto"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-slate-200 md:hidden"
          >
            <Menu size={21} />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <section className="hero-glow relative min-h-[70vh] pb-24 pt-36 sm:pt-40">
        <div className="grid-glow pointer-events-none absolute inset-0 opacity-60" />
        <div className="container-wide relative">
          {/* Back button */}
          <div className="mb-8">
            <Link
              href="/#proyectos"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-slate-300 backdrop-blur-md transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              <ArrowLeft size={15} /> Volver a proyectos destacados
            </Link>
          </div>

          {/* Heading */}
          <div className="max-w-3xl">
            <p className="eyebrow mb-3">Portfolio</p>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              Otros proyectos
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
              Una recopilación de sitios web, portales institucionales y
              desarrollos personalizados en los que trabajé para diversos
              clientes y propósitos.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {otros_proyectos.map(
              ({ name, type, description, tags, image, url }) => (
                <Card
                  key={name}
                  className="group flex flex-col overflow-hidden border-white/10 bg-[#071426] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-xl hover:shadow-cyan-500/5"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                    {image ? (
                      <img
                        src={image}
                        alt={`Captura del proyecto ${name}`}
                        className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-slate-900 text-slate-600">
                        Sin imagen
                      </div>
                    )}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071426] via-transparent to-transparent opacity-80" />
                    <span className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-slate-950/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-200 backdrop-blur-md">
                      {type}
                    </span>
                    {url && (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-slate-300 backdrop-blur-md transition hover:border-cyan-300 hover:bg-cyan-400 hover:text-slate-950"
                        aria-label={`Visitar sitio de ${name}`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  <CardContent className="flex flex-1 flex-col p-6">
                    <h2 className="text-xl font-bold text-white">
                      {url ? (
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition hover:text-cyan-300"
                        >
                          {name}
                        </a>
                      ) : (
                        name
                      )}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
                      {description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3 py-1 text-xs text-cyan-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {url && (
                      <div className="mt-6 border-t border-white/10 pt-4">
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-300 transition hover:text-cyan-200"
                        >
                          Visitar sitio web <ExternalLink size={13} />
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ),
            )}
          </div>

          {/* CTA Banner */}
          <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-950/40 via-[#071426] to-slate-950 p-8 text-center sm:p-12">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              ¿Tenés una idea o proyecto para desarrollar?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
              Podemos coordinar una llamada o hablar por WhatsApp para analizar
              tus necesidades y buscar la mejor solución.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <a
                  href="https://wa.link/60bum6"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/icons/wtp.svg"
                    alt=""
                    width={18}
                    height={18}
                    className="h-[18px] w-[18px] shrink-0"
                    aria-hidden="true"
                  />{" "}
                  Hablemos por WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/#contacto">Ir a contacto</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#020817] py-8">
        <div className="container-wide flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <Logo />
          <nav
            className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-xs text-slate-400"
            aria-label="Navegación del pie"
          >
            <Link className="hover:text-cyan-300" href="/#inicio">
              Inicio
            </Link>
            <Link className="hover:text-cyan-300" href="/#servicios">
              Servicios
            </Link>
            <Link className="hover:text-cyan-300" href="/#proyectos">
              Proyectos
            </Link>
            <Link className="hover:text-cyan-300" href="/#sobre-mi">
              Sobre mí
            </Link>
            <Link className="hover:text-cyan-300" href="/#contacto">
              Contacto
            </Link>
          </nav>
          <div className="flex items-center gap-3 text-slate-400">
            <a
              aria-label="LinkedIn de Horacio Abitú"
              href="https://www.linkedin.com/in/horacioabitu/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg p-2 hover:bg-white/5 hover:text-cyan-300"
            >
              <Linkedin size={17} />
            </a>
            <a
              aria-label="GitHub de Horacio Abitú"
              href="https://github.com/dev-back55"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg p-2 hover:bg-white/5 hover:text-cyan-300"
            >
              <Github size={17} />
            </a>
            <a
              aria-label="Email"
              href="mailto:contacto@horacioabitu.com.ar"
              className="rounded-lg p-2 hover:bg-white/5 hover:text-cyan-300"
            >
              <Mail size={17} />
            </a>
          </div>
        </div>
        <p className="container-wide mt-7 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} Horacio Abitú. Todos los derechos
          reservados.
        </p>
      </footer>
    </main>
  );
}
