import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import products, { categories } from '@/data/products'
import { ProductCard } from '@/components/ProductCard'
import { WhatsAppIcon } from '@/components/SiteLayout'
import { imageUrl, whatsappUrl } from '@/lib/site'

export const Route = createFileRoute('/products/$productId')({
  loader: ({ params }) => {
    const product = products.find(item => String(item.id) === params.productId)
    if (!product) throw notFound()
    return product
  },
  head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.name} | Marco Cardona` : 'Referencia no encontrada | Marco Cardona' }] }),
  component: ProductPage,
  notFoundComponent: () => <main id="contenido" className="not-found"><h1>No encontramos esta referencia.</h1><Link to="/" className="button button-dark">Volver a la colección</Link></main>,
})

function ProductPage() {
  const product = Route.useLoaderData()
  const related = products.filter(item => item.category === product.category && item.id !== product.id).slice(0, 4)
  return <main id="contenido" className="section-wrap product-page"><Link to="/" className="back-link"><ArrowLeft size={16}/> Volver a la colección</Link><div className="product-detail"><div className="detail-image"><img src={imageUrl(product.image, 1000)} alt={`${product.name}. Imagen ilustrativa, no representa un producto real confirmado.`} width={1000} height={1000}/><span>IMAGEN ILUSTRATIVA</span></div><div className="detail-content"><div className="eyebrow">{categories.find(item => item.id === product.category)?.name}</div><h1>{product.name}</h1><div className="detail-reference">REFERENCIA DE ESTILO MC-{String(product.id).padStart(2, '0')}</div><p>{product.description}</p><div className="product-color"><i style={{ backgroundColor: product.colorHex }}/>{product.color}</div><div className="detail-notice"><strong>Una inspiración para tu próxima billetera.</strong><p>Esta imagen y el nombre son ilustrativos. Solicita fotos del producto real, materiales, medidas, precio y disponibilidad antes de comprar.</p></div><a className="button button-dark" href={whatsappUrl(product.name)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={20}/> Consultar por WhatsApp <ArrowUpRight size={18}/></a><span className="detail-small">Atención directa · Sin carrito de compras</span><details className="detail-question"><summary>Envíos y medios de pago</summary><p>Indica tu ciudad por WhatsApp para conocer los costos, tiempos de entrega y medios de pago disponibles.</p></details></div></div><section className="related-products"><div className="eyebrow">SIGUE EXPLORANDO</div><h2>Otros estilos, el mismo <em>carácter.</em></h2><div className="product-grid">{related.map(item => <ProductCard key={item.id} product={item}/>)}</div></section></main>
}
