export type Category = 'hombre' | 'pisabilletes' | 'dama'

export interface Product {
  id: number
  name: string
  category: Category
  color: string
  colorHex: string
  description: string
  image: string
  label?: string
}

export const categories: { id: Category; name: string; count: number }[] = [
  { id: 'hombre', name: 'Billeteras de hombre', count: 5 },
  { id: 'pisabilletes', name: 'Pisabilletes', count: 3 },
  { id: 'dama', name: 'Billeteras de dama', count: 4 },
]

const products: Product[] = [
  { id: 1, name: 'Clásica Cognac', category: 'hombre', color: 'Cognac', colorHex: '#a56a3f', description: 'Una silueta clásica de dos cuerpos en un tono cálido. Una propuesta para quienes prefieren los detalles discretos.', image: '/img/modelo-01.jpg', label: 'ESTILO CLÁSICO' },
  { id: 2, name: 'Esencial Negra', category: 'hombre', color: 'Negro', colorHex: '#30302d', description: 'Líneas sencillas y un tono negro que combina con todo. Una referencia de estilo sobrio para el día a día.', image: '/img/modelo-02.jpg' },
  { id: 3, name: 'Tradición Chocolate', category: 'hombre', color: 'Chocolate', colorHex: '#5d3b2b', description: 'Una propuesta de billetera tradicional en un tono chocolate profundo. Consulta sus características y opciones disponibles.', image: '/img/modelo-03.jpg' },
  { id: 4, name: 'Compacta Oliva', category: 'hombre', color: 'Oliva', colorHex: '#65634b', description: 'Un formato vertical compacto y un tono oliva diferente. Una inspiración para llevar lo esencial con carácter.', image: '/img/modelo-04.jpg', label: 'FORMATO COMPACTO' },
  { id: 5, name: 'Pliegue Arena', category: 'hombre', color: 'Arena', colorHex: '#b68b5d', description: 'Una silueta de tres pliegues en un tono arena natural. Consulta por WhatsApp el modelo real y su distribución interior.', image: '/img/modelo-05.jpg' },
  { id: 6, name: 'Pisabilletes Cognac', category: 'pisabilletes', color: 'Cognac', colorHex: '#a56a3f', description: 'Una propuesta delgada con clip metálico y acabado cognac. Una inspiración para quienes prefieren llevar menos.', image: '/img/modelo-06.jpg', label: 'MENOS ES MÁS' },
  { id: 7, name: 'Pisabilletes Negro', category: 'pisabilletes', color: 'Negro', colorHex: '#30302d', description: 'Un formato minimalista en negro con clip metálico. Consulta el diseño definitivo y su disponibilidad antes de comprar.', image: '/img/modelo-07.jpg' },
  { id: 8, name: 'Pisabilletes Chocolate', category: 'pisabilletes', color: 'Chocolate', colorHex: '#5d3b2b', description: 'Un tono chocolate con un detalle metálico cálido. Una referencia de diseño ligero para acompañarte cada día.', image: '/img/modelo-08.jpg' },
  { id: 9, name: 'Larga Borgoña', category: 'dama', color: 'Borgoña', colorHex: '#773d48', description: 'Una silueta alargada con cierre y un tono borgoña expresivo. Consulta los detalles del modelo real con nuestra asesoría.', image: '/img/modelo-09.jpg' },
  { id: 10, name: 'Sobre Caramelo', category: 'dama', color: 'Caramelo', colorHex: '#ac764a', description: 'Una propuesta de solapa tipo sobre y un pequeño acento metálico. Un equilibrio entre líneas delicadas y tonos naturales.', image: '/img/modelo-10.jpg' },
  { id: 11, name: 'Compacta Marfil', category: 'dama', color: 'Marfil', colorHex: '#d6cfbd', description: 'Un formato compacto con cierre en un tono marfil suave. Una inspiración luminosa para tus accesorios de todos los días.', image: '/img/modelo-11.jpg', label: 'TONOS NATURALES' },
  { id: 12, name: 'Larga Rosa', category: 'dama', color: 'Rosa antiguo', colorHex: '#b58383', description: 'Una propuesta alargada en rosa antiguo, con un detalle de cierre metálico. Consulta por WhatsApp las opciones reales disponibles.', image: '/img/modelo-12.jpg' },
  { id: 13, name: 'Prueba 13', category: 'hombre', color: 'Rosa antiguo', colorHex: '#b58383', description: 'Esto es una prueba para testear la configuracion de la pagina web.', image: '/img/modelo-13.jpg' }, 
]

export default products
