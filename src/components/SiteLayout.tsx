import { useState } from 'react'
import { ArrowUpRight, Menu, X, Search, MessageCircle } from 'lucide-react'
import { whatsappUrl } from '@/lib/site'

export function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.3 3.7A11.5 11.5 0 0 0 2.2 17.6L.8 23.2l5.8-1.5A11.5 11.5 0 0 0 20.3 3.7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M8.1 6.8c-.4-.2-.8-.1-1 .3-.4.5-.8 1.1-.7 1.8.2 2.7 3.6 6.4 6.8 7.5 1.3.4 2.2 0 2.8-.6.3-.3.7-1.2.6-1.5-.1-.3-2.2-1.3-2.5-1.3-.3 0-.8.9-1.1 1-.3.1-1.2-.4-2.2-1.2-1-.8-1.8-1.9-1.8-2.2 0-.3.7-.8.7-1.1 0-.3-1.2-2.5-1.6-2.7Z" fill="currentColor"/></svg>
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <>
    <div className="announcement"><span>Pequeños detalles. Mucho carácter.</span><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Asesoría personalizada por WhatsApp <ArrowUpRight size={12}/></a></div>
    <header className="site-header">
      <a href="/" className="wordmark" aria-label="Marco Cardona, inicio">MARCO CARDONA<span>CUERO CON CARÁCTER</span></a>
      <nav className="desktop-nav" aria-label="Navegación principal"><a href="/#coleccion">Colección</a><a href="/#hombre">Hombre</a><a href="/#dama">Mujer</a><a href="/#esencia">Nuestra esencia</a></nav>
      <div className="header-actions"><a className="search-link" href="/#buscar" aria-label="Buscar una referencia"><Search size={19}/></a><a className="header-whatsapp" href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={17}/><span>Hablemos</span><ArrowUpRight size={14}/></a><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen}>{menuOpen ? <X/> : <Menu/>}</button></div>
      {menuOpen && <nav className="mobile-nav" aria-label="Navegación móvil">{[['Colección', 'coleccion'], ['Hombre', 'hombre'], ['Mujer', 'dama'], ['Nuestra esencia', 'esencia']].map(([name, anchor]) => <a key={anchor} href={`/#${anchor}`} onClick={() => setMenuOpen(false)}>{name}<ArrowUpRight size={18}/></a>)}</nav>}
    </header>
  </>
}

export function Footer() {
  return <>
    <footer className="site-footer">
      <div className="footer-top"><div><a href="/" className="wordmark footer-wordmark">MARCO CARDONA<span>CUERO CON CARÁCTER</span></a><p>Detalles que hablan de ti.<br/>Encuentra tu próxima billetera.</p></div><div className="footer-column"><h3>EXPLORA</h3><a href="/#hombre">Billeteras de hombre</a><a href="/#pisabilletes">Pisabilletes</a><a href="/#dama">Billeteras de dama</a></div><div className="footer-column"><h3>ESTAMOS PARA TI</h3><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={14}/></a><a href="tel:+573142594205">+57 314 259 4205</a><a href="/#preguntas">Preguntas frecuentes</a></div><div className="footer-note"><MessageCircle size={25}/><h3>Una compra más personal.</h3><p>Sin carritos, sin complicaciones.<br/>Te acompañamos por WhatsApp.</p></div></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Marco Cardona.</span><span>Imágenes ilustrativas. Consulta el catálogo real por WhatsApp.</span><span>Hecho para acompañarte.</span></div>
    </footer>
    <a className="floating-whatsapp" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label="Contactar a Marco Cardona por WhatsApp"><WhatsAppIcon size={25}/></a>
  </>
}
