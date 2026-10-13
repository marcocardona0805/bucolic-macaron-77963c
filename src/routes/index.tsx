import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { ArrowRight, ArrowUpRight, Check, Search, MessageCircle, SlidersHorizontal } from 'lucide-react'
import products, { categories } from '@/data/products'
import type { Category } from '@/data/products'
import { ProductCard } from '@/components/ProductCard'
import { WhatsAppIcon } from '@/components/SiteLayout'
import { imageUrl, whatsappUrl } from '@/lib/site'

export const Route = createFileRoute('/')({ component: HomePage })

function HomePage() {
  const [category, setCategory] = useState<Category | 'todos'>('todos')
  const [query, setQuery] = useState('')
  const [expanded, setExpanded] = useState(false)
  const [sort, setSort] = useState('coleccion')

  useEffect(() => {
    const syncCategory = () => {
      const value = window.location.hash.slice(1)
      if (value === 'hombre' || value === 'dama' || value === 'pisabilletes') {
        setCategory(value)
        setExpanded(true)
        setQuery('')
        document.getElementById('coleccion')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
      } else if (value === 'coleccion') {
        setCategory('todos')
        setQuery('')
        setExpanded(false)
      } else if (value === 'buscar') {
        document.getElementById('buscar')?.focus()
      }
    }
    syncCategory()
    window.addEventListener('hashchange', syncCategory)
    return () => window.removeEventListener('hashchange', syncCategory)
  }, [])

  const normalize = (text: string) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
  const filtered = products.filter(product => (category === 'todos' || product.category === category) && normalize(`${product.name} ${product.color}`).includes(normalize(query)))
  const sorted = sort === 'nombre' ? [...filtered].sort((first, second) => first.name.localeCompare(second.name, 'es')) : filtered
  const visible = expanded || category !== 'todos' || query ? sorted : sorted.slice(0, 4)

  function selectCategory(value: Category | 'todos') {
    setCategory(value)
    setExpanded(value !== 'todos')
    setQuery('')
    window.history.replaceState(null, '', value === 'todos' ? '#coleccion' : `#${value}`)
  }

  return <main id="contenido">
    <section className="hero">
      <img className="hero-image" src={imageUrl('/img/editorial.jpg', 1920)} srcSet={`${imageUrl('/img/editorial.jpg', 960)} 960w, ${imageUrl('/img/editorial.jpg', 1920)} 1920w`} sizes="100vw" alt="Composición ilustrativa de billeteras de cuero cognac sobre una mesa de madera" fetchPriority="high" width={1920} height={1080}/>
      <div className="hero-shade"/>
      <div className="hero-content"><div className="eyebrow light"><span/> LO ESENCIAL, BIEN ELEGIDO</div><h1>El carácter está<br/>en los <em>detalles.</em></h1><p>Billeteras que van contigo.<br/>Descubre el equilibrio entre estilo,<br className="mobile-break"/> funcionalidad y la esencia del cuero.</p><a href="#coleccion" className="button button-cream">Explorar la colección <ArrowUpRight size={18}/></a><div className="hero-footnote">MARCO CARDONA <span>—</span> MENOS, PERO MEJOR.</div></div>
      <div className="hero-caption"><span>01 / EL ARTE DE LO COTIDIANO</span><span>Fotografía ilustrativa</span></div>
    </section>
    <div className="benefit-strip"><span><Check size={18}/> Estilo para todos los días</span><span><MessageCircle size={18}/> Asesoría personalizada</span><span><WhatsAppIcon size={18}/> Compra directamente por WhatsApp</span></div>
    <section className="collection section-wrap" id="coleccion">
      <div className="section-heading"><div><div className="eyebrow">LA COLECCIÓN</div><h2>Tu estilo. Tu <em>esencial.</em></h2></div><p>Pequeñas piezas, grandes detalles.<br/>Encuentra la que mejor habla de ti.</p></div>
      <div className="catalog-toolbar"><div className="category-tabs" role="group" aria-label="Filtrar por categoría"><button className={category === 'todos' ? 'active' : ''} aria-pressed={category === 'todos'} onClick={() => selectCategory('todos')}>Todos <sup>12</sup></button>{categories.map(item => <button key={item.id} aria-pressed={category === item.id} className={category === item.id ? 'active' : ''} onClick={() => selectCategory(item.id)}>{item.id === 'hombre' ? 'Hombre' : item.id === 'dama' ? 'Mujer' : 'Pisabilletes'} <sup>{item.count}</sup></button>)}</div><label className="sort-select"><SlidersHorizontal size={14}/><select value={sort} onChange={event => setSort(event.target.value)} aria-label="Ordenar referencias"><option value="coleccion">Orden de colección</option><option value="nombre">Nombre: A–Z</option></select></label></div>
      <div className="catalog-search-line"><span aria-live="polite">{filtered.length} referencias ilustrativas{category === 'todos' && !expanded && !query ? ' · Una primera mirada' : ''}</span><label className="catalog-search"><Search size={15}/><input id="buscar" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Busca tu esencial" aria-label="Buscar por nombre o color"/></label></div>
      <div className="product-grid">{visible.map(product => <ProductCard key={product.id} product={product}/>)}</div>
      {visible.length === 0 && <div className="empty-state"><Search size={26}/><h3>No encontramos esa referencia.</h3><p>Prueba con otro nombre o color, o descubre toda la colección.</p><button className="button button-outline" onClick={() => { setQuery(''); selectCategory('todos') }}>Ver toda la colección <ArrowRight size={17}/></button></div>}
      {!expanded && category === 'todos' && !query && <div className="collection-more"><button className="button button-outline" onClick={() => setExpanded(true)}>Ver toda la colección <ArrowRight size={18}/></button></div>}
      <p className="catalog-notice">Una muestra de nuestro estilo. Las imágenes y los nombres son ilustrativos; confirma modelos reales, precios y disponibilidad por WhatsApp.</p>
    </section>
    <section className="category-editorial section-wrap" aria-label="Descubre las categorías"><a href="#hombre" className="category-feature"><img src={imageUrl('/img/modelo-01.jpg', 900)} alt="Billetera cognac ilustrativa para hombre" loading="lazy" width={900} height={900}/><div><span>PARA ÉL</span><h3>Carácter en cada detalle.</h3><p>Billeteras de hombre <ArrowUpRight size={22}/></p></div></a><a href="#dama" className="category-feature women-feature"><img src={imageUrl('/img/modelo-09.jpg', 900)} alt="Billetera borgoña ilustrativa para dama" loading="lazy" width={900} height={900}/><div><span>PARA ELLA</span><h3>Esenciales con personalidad.</h3><p>Billeteras de dama <ArrowUpRight size={22}/></p></div></a></section>
    <section className="story" id="esencia"><div className="story-image"><img src={imageUrl('/img/editorial.jpg', 1000)} alt="Detalle ilustrativo de cuero y texturas cálidas" loading="lazy" width={1000} height={1000}/><span>LA BELLEZA DE LO SIMPLE.</span></div><div className="story-content"><div className="eyebrow">NUESTRA ESENCIA</div><h2>No es solo lo que llevas.<br/>Es cómo te <em>acompaña.</em></h2><p>Creemos en los objetos que hacen parte de tu vida. En los tonos que combinan contigo y en esos pequeños detalles que marcan la diferencia.</p><p>Marco Cardona nace de una idea sencilla: elegir bien lo que te acompaña. Billeteras y pisabilletes con una mirada cercana al estilo, la funcionalidad y el carácter del cuero.</p><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="text-link">Encuentra tu próximo esencial <ArrowUpRight size={18}/></a><div className="story-signature">Marco Cardona</div></div></section>
    <section className="contact-banner section-wrap"><div><div className="eyebrow">HABLEMOS DE TU PRÓXIMA BILLETERA</div><h2>La mejor elección empieza<br/>con una <em>conversación.</em></h2><p>Consulta modelos, colores y precios. Te ayudamos a elegir por WhatsApp.</p></div><a className="button button-dark" href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={20}/> Escríbenos por WhatsApp <ArrowUpRight size={17}/></a></section>
    <section className="faq section-wrap" id="preguntas"><div><div className="eyebrow">SIN COMPLICACIONES</div><h2>Antes de <em>elegir.</em></h2></div><div className="faq-list"><details><summary>¿Cómo puedo comprar?<span>+</span></summary><p>Elige una referencia y pulsa «Consultar». Se abrirá nuestro WhatsApp Business con un mensaje listo para enviar. Allí confirmamos el modelo real, el precio, la disponibilidad y las condiciones de tu compra.</p></details><details><summary>¿Las fotos muestran los productos reales?<span>+</span></summary><p>Por ahora, las imágenes y los nombres son ilustrativos y sirven para explorar estilos. Antes de comprar, solicita por WhatsApp las fotos y características de los productos reales disponibles.</p></details><details><summary>¿Cómo consulto los envíos y medios de pago?<span>+</span></summary><p>Escríbenos e indica tu ciudad. Te compartimos las opciones de envío, sus costos, los tiempos estimados y los medios de pago disponibles antes de confirmar tu pedido.</p></details></div></section>
  </main>
}
