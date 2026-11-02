import {
  ArrowDownRight,
  ArrowRight,
  Bot,
  Braces,
  CalendarDays,
  CheckCircle2,
  Cloud,
  Code2,
  Cpu,
  ExternalLink,
  Github,
  Laptop,
  Linkedin,
  Mail,
  Menu,
  MonitorSmartphone,
  Palette,
  Smartphone,
  Sparkles,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    icon: Code2,
    title: "Desarrollo Full Stack",
    text: "Aplicaciones web modernas, escalables y seguras, desde la idea hasta producción.",
  },
  {
    icon: Palette,
    title: "UX/UI y diseño web",
    text: "Experiencias claras, accesibles y centradas en las necesidades de las personas.",
  },
  {
    icon: Smartphone,
    title: "Aplicaciones web y móviles",
    text: "Productos digitales adaptados a distintos dispositivos y formas de trabajar.",
  },
  {
    icon: Bot,
    title: "Inteligencia artificial",
    text: "Automatización y soluciones con IA para optimizar tareas y procesos.",
  },
  {
    icon: Wrench,
    title: "Consultoría IT",
    text: "Asesoramiento técnico, arquitectura y acompañamiento para tomar mejores decisiones.",
  },
];

const projects = [
  {
    name: "Historias Clínicas",
    type: "SaaS · Historia clínica electrónica",
    description:
      "Historia clínica electrónica, para atención primaria y hospitalaria.",
    tags: ["SaaS", "Historia clínica electrónica"],
    icon: Cloud,
    color: "from-cyan-500/30 via-sky-900/60 to-blue-950",
    image:
      "https://res.cloudinary.com/djdp4cavt/image/upload/v1793636346/web-horacio-porfolio/historias-clinicas_jpikhl.avif",
    url: "",
    github: "",
  },
  {
    name: "Camara de Industria, Comercio, Producción y Turismo de Rawson",
    type: "Portal web · Institucional · CRM Cobranzas",
    description:
      "Portal web institucional y herramientas internas de gestión y cobranzas para la Camara de Industria, Comercio, Producción y Turismo de Rawson.",
    tags: ["Web institucional", "CRM", "Cobranzas"],
    icon: Laptop,
    color: "from-blue-500/30 via-indigo-950 to-slate-950",
    image:
      "https://res.cloudinary.com/djdp4cavt/image/upload/v1793636346/web-horacio-porfolio/camara_wiv1bm.avif",
    url: "https://www.camaracomerciorawson.com/",
    github: "",
  },
  {
    name: "CafeRestoPOS",
    type: "SaaS · Gastronomía",
    description:
      "Sistema de gestión pensado para agilizar pedidos y operaciones en bares y restaurantes.",
    tags: ["SaaS / POS", "Gastronomía"],
    icon: Workflow,
    color: "from-amber-500/20 via-orange-950/70 to-slate-950",
    image:
      "https://res.cloudinary.com/djdp4cavt/image/upload/v1793636346/web-horacio-porfolio/caferestopos_1_sevcbf.avif",
    url: "https://www.caferestopos.com/",
    github: "",
  },
];

const stack = [
  "TypeScript",
  "Next.js",
  "Python",
  "Node.js",
  "Tailwind CSS",
  "Supabase",
  "IA",
];

function SectionHeading({ eyebrow, title, text, centered = false }) {
  return (
    <div className={`mb-9 max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-4 leading-7 text-slate-600">{text}</p>}
    </div>
  );
}

function Logo() {
  return (
    <a
      href="#inicio"
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
    </a>
  );
}

export default function Home() {
  return (
    <main id="inicio" className="overflow-hidden">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#020817]/85 backdrop-blur-xl">
        <div className="container-wide flex h-[76px] items-center justify-between">
          <Logo />
          <nav
            className="hidden items-center gap-7 text-sm text-slate-300 md:flex"
            aria-label="Navegación principal"
          >
            <a className="text-cyan-300" href="#inicio">
              Inicio
            </a>
            <a className="transition hover:text-cyan-300" href="#servicios">
              Servicios
            </a>
            <a className="transition hover:text-cyan-300" href="#proyectos">
              Proyectos
            </a>
            <a className="transition hover:text-cyan-300" href="#sobre-mi">
              Sobre mí
            </a>
            <a className="transition hover:text-cyan-300" href="#contacto">
              Contacto
            </a>
          </nav>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link
              href="https://calendar.app.google/qB7HtErZcYHQXboN7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CalendarDays size={16} /> Agendar llamada
            </Link>
          </Button>
          <a
            href="#contacto"
            aria-label="Ir a contacto"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-slate-200 md:hidden"
          >
            <Menu size={21} />
          </a>
        </div>
      </header>

      <section className="hero-glow relative flex min-h-[690px] items-center pb-16 pt-32 sm:min-h-[720px] sm:pt-36">
        <div className="grid-glow pointer-events-none absolute inset-0 opacity-70" />
        <div className="container-wide relative grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-2 text-xs font-semibold text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
              DESARROLLADOR FULL STACK + IA
            </div>
            <h1 className="text-4xl font-black leading-[1.08] tracking-[-.045em] text-white sm:text-5xl lg:text-6xl">
              Transformo ideas en{" "}
              <span className="text-gradient">soluciones digitales.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Desarrollo web, aplicaciones e inteligencia artificial para
              negocios que quieren crecer.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
                  Hablemos de tu proyecto
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#proyectos">
                  <ArrowDownRight size={18} /> Ver proyectos
                </a>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/10 pt-6 text-xs font-medium text-slate-400 sm:gap-x-7">
              <span className="inline-flex items-center gap-2">
                <Braces size={16} className="text-cyan-300" /> Web Full Stack
              </span>
              <span className="inline-flex items-center gap-2">
                <MonitorSmartphone size={16} className="text-cyan-300" /> Apps
                web / móviles
              </span>
              <span className="inline-flex items-center gap-2">
                <Cpu size={16} className="text-cyan-300" /> Inteligencia
                artificial
              </span>
              <span className="inline-flex items-center gap-2">
                <Zap size={16} className="text-cyan-300" /> Automatización
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[510px]">
            <div className="absolute inset-8 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-cyan-300/20 bg-[#061426]/90 p-4 shadow-glow sm:p-6">
              <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-auto font-mono text-[10px] text-slate-500">
                  digital-solutions.js
                </span>
              </div>
              <div className="grid min-h-[280px] grid-cols-[1fr_auto] gap-3 py-7 sm:min-h-[320px]">
                <div className="font-mono text-xs leading-7 sm:text-sm">
                  <p className="text-slate-500">
                    // Ideas que se convierten en productos
                  </p>
                  <p>
                    <span className="text-fuchsia-300">const</span>{" "}
                    <span className="text-cyan-200">solution</span> = {"{"}
                  </p>
                  <p className="pl-4 text-slate-300">
                    web:{" "}
                    <span className="text-emerald-300">"experiencias"</span>,
                  </p>
                  <p className="pl-4 text-slate-300">
                    apps: <span className="text-emerald-300">"a medida"</span>,
                  </p>
                  <p className="pl-4 text-slate-300">
                    ai:{" "}
                    <span className="text-emerald-300">"automatización"</span>,
                  </p>
                  <p className="pl-4 text-slate-300">
                    focus:{" "}
                    <span className="text-emerald-300">"resultados"</span>
                  </p>
                  <p>{"};"}</p>
                  <p className="mt-4 text-cyan-300">
                    {"// Construyamos algo útil."}
                  </p>
                  <span className="mt-2 inline-block h-4 w-2 animate-pulse bg-cyan-300" />
                </div>
                <div className="flex flex-col justify-center gap-3">
                  {[
                    { icon: Code2, label: "FULL STACK" },
                    { icon: Bot, label: "IA" },
                    { icon: Cloud, label: "CLOUD" },
                  ].map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex h-[76px] w-[76px] flex-col items-center justify-center gap-2 rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.06] text-cyan-300 sm:h-20 sm:w-20"
                    >
                      <Icon size={24} />
                      <span className="text-[9px] font-bold tracking-widest">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-xs text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />{" "}
                  Enfoque en soluciones reales
                </span>
                <Sparkles size={16} className="text-cyan-300" />
              </div>
            </div>
            <div className="absolute -bottom-5 -left-3 hidden rounded-xl border border-white/10 bg-[#0b2035] px-4 py-3 shadow-xl sm:block">
              <p className="text-xs text-slate-400">De la idea al producto</p>
              <p className="mt-1 text-sm font-bold text-white">
                Código · Creatividad · Resultados
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section
        id="servicios"
        className="section-pad bg-slate-50 text-slate-950"
      >
        <div className="container-wide">
          <SectionHeading
            eyebrow="Servicios"
            title="Soluciones a medida para cada necesidad."
            text="Desde una web profesional hasta sistemas personalizados, integro tecnología, diseño y estrategia para ayudarte a crecer en el mundo digital."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {services.map(({ icon: Icon, title, text }) => (
              <Card
                key={title}
                className="group border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
              >
                <CardContent className="h-full p-5">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 transition group-hover:bg-cyan-400 group-hover:text-slate-950">
                    <Icon size={23} />
                  </div>
                  <h3 className="text-base font-bold leading-snug">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PROYECTOS */}

      <section id="proyectos" className="section-pad bg-[#030b19]">
        <div className="container-wide">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Portfolio"
              title="Proyectos destacados"
              text="Ideas que toman forma en productos digitales. Una selección de proyectos y soluciones en los que trabajo."
            />
            <a
              href="#contacto"
              className="mb-9 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200"
            >
              ¿Tenés un proyecto? <ArrowRight size={16} />
            </a>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map(({ name, type, description, tags, image, url }) => (
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
                <CardContent className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl font-bold text-white">
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
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
                    {description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
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
                    <div className="mt-5 border-t border-white/10 pt-4">
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
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-cyan-400/40 hover:border-cyan-300"
            >
              <Link href="/otros-proyectos">
                Ver otros proyectos <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre Mi */}

      <section id="sobre-mi" className="section-pad bg-white text-slate-950">
        <div className="container-wide grid items-center gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 p-6 sm:p-9">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-cyan-300/30 blur-3xl" />
            <div className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-5 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-rose-400" />
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="ml-auto font-mono text-xs text-slate-500">
                  about-me.md
                </span>
              </div>
              <p className="font-mono text-sm leading-7 text-slate-600">
                <span className="text-cyan-700"># Hola, soy Horacio</span>
                <br />
                <br />
                Desarrollo soluciones digitales combinando tecnología,
                pensamiento creativo e inteligencia artificial.
                <br />
                <br />
                <span className="text-blue-700">Mi objetivo:</span> convertir
                problemas reales en herramientas útiles.
              </p>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Sobre mí"
              title="Hola, soy Horacio Abitú."
              text="Soy desarrollador Full Stack y trabajo creando sitios web, aplicaciones y soluciones con inteligencia artificial. Me apasiona transformar ideas en productos digitales que resuelvan problemas reales y generen valor para las personas y los negocios."
            />
            <div className="flex flex-wrap gap-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-7 flex items-start gap-3 text-sm leading-6 text-slate-600">
              <CheckCircle2 className="mt-1 shrink-0 text-cyan-600" size={18} />
              <p>
                Me interesa construir soluciones claras, mantenibles y pensadas
                para las personas que las usan.
              </p>
            </div>
            <a
              href="#contacto"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-cyan-700 hover:text-cyan-900"
            >
              Conocé más sobre mí <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="hero-glow relative section-pad border-t border-white/10 bg-[#061426]"
      >
        <div className="container-wide relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow mb-3">Contacto</p>
            <h2 className="max-w-2xl text-3xl font-black tracking-tight text-white sm:text-4xl">
              ¿Tenés un proyecto en mente?
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-300">
              Hablemos. Estoy listo para ayudarte a convertir tu idea en una
              solución digital.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <Button asChild size="lg">
              <a
                href="https://calendar.app.google/qB7HtErZcYHQXboN7"
                target="_blank"
                rel="noreferrer"
              >
                <CalendarDays size={18} /> Agendar una conversación
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://wa.link/60bum6" target="_blank" rel="noreferrer">
                <Image
                  src="/icons/wtp.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px] shrink-0 brightness-0 invert"
                  aria-hidden="true"
                />{" "}
                Escribime por WhatsApp
              </a>
            </Button>
          </div>
          <div className="md:col-span-2 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-5 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2">
              <Cloud size={16} className="text-cyan-300" /> Rawson, Chubut,
              Argentina
            </span>
            <a
              href="mailto:contacto@horacioabitu.com.ar"
              className="inline-flex items-center gap-2 transition hover:text-cyan-300"
            >
              <Mail size={16} className="text-cyan-300" />{" "}
              contacto@horacioabitu.com.ar
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#020817] py-8">
        <div className="container-wide flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <Logo />
          <nav
            className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-xs text-slate-400"
            aria-label="Navegación del pie"
          >
            <a className="hover:text-cyan-300" href="#inicio">
              Inicio
            </a>
            <a className="hover:text-cyan-300" href="#servicios">
              Servicios
            </a>
            <a className="hover:text-cyan-300" href="#proyectos">
              Proyectos
            </a>
            <a className="hover:text-cyan-300" href="#sobre-mi">
              Sobre mí
            </a>
            <a className="hover:text-cyan-300" href="#contacto">
              Contacto
            </a>
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
