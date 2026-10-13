import { Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import type { Product } from '@/data/products'
import { imageUrl, whatsappUrl } from '@/lib/site'

export function ProductCard({ product }: { product: Product }) {
  return <article className="product-card">
    <Link to="/products/$productId" params={{ productId: String(product.id) }} className="product-image-link" aria-label={`Ver ${product.name}`}>
      <img src={imageUrl(product.image)} srcSet={`${imageUrl(product.image, 360)} 360w, ${imageUrl(product.image, 640)} 640w`} sizes="(max-width: 580px) 90vw, (max-width: 900px) 44vw, 23vw" alt={`${product.name}, color ${product.color}. Imagen ilustrativa.`} loading="lazy" width={640} height={640}/>
      {product.label && <span className="product-badge">{product.label}</span>}<span className="product-quick-view"><ArrowUpRight size={20}/></span><span className="illustration-label">Imagen ilustrativa</span>
    </Link>
    <div className="product-category">{product.category === 'hombre' ? 'BILLETERA DE HOMBRE' : product.category === 'dama' ? 'BILLETERA DE DAMA' : 'PISABILLETES'}</div>
    <Link className="product-name" to="/products/$productId" params={{ productId: String(product.id) }}>{product.name}</Link>
    <div className="product-meta"><span className="product-color"><i style={{ backgroundColor: product.colorHex }}/>{product.color}</span><a href={whatsappUrl(product.name)} target="_blank" rel="noopener noreferrer">Consultar <ArrowUpRight size={13}/></a></div>
  </article>
}
