import "./globals.css";

export const metadata = {
  title: "Horacio Abitú | Desarrollador Full Stack + IA",
  description: "Desarrollo web, aplicaciones e inteligencia artificial para negocios que quieren crecer. Hablemos de tu proyecto.",
  metadataBase: new URL("https://www.horacioabitu.com.ar"),
  openGraph: {
    title: "Horacio Abitú | Desarrollador Full Stack + IA",
    description: "Transformo ideas en soluciones digitales.",
    url: "https://www.horacioabitu.com.ar",
    siteName: "Horacio Abitú",
    locale: "es_AR",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
