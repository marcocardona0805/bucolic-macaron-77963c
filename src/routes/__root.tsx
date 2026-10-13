import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import '../styles.css'
import { Header, Footer } from '@/components/SiteLayout'

const siteName = 'Marco Cardona | Billeteras de cuero'
const siteDescription = 'Billeteras para hombre, pisabilletes y billeteras para dama. Descubre el estilo de Marco Cardona y consulta tu próximo favorito por WhatsApp.'

export const Route = createRootRoute({
  head: () => ({
    links: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: siteName,
      },
      {
        name: 'description',
        content: siteDescription,
      },
      {
        property: 'og:title',
        content: siteName,
      },
      {
        property: 'og:description',
        content: siteDescription,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:locale',
        content: 'es_CO',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: () => <main id="contenido" className="not-found"><h1>Esta página no está disponible.</h1><a href="/" className="button button-dark">Volver a la colección</a></main>,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        <a href="#contenido" className="skip-link">Saltar al contenido</a>
        <Header />
        {children}
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
