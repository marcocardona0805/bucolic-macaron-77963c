export const whatsappNumber = '573142594205'

export function whatsappUrl(productName?: string) {
  const message = productName
    ? `Hola, Marco Cardona. Me interesa la referencia ilustrativa ${productName}. ¿Me compartes fotos del producto real, precio y disponibilidad?`
    : 'Hola, Marco Cardona. Me gustaría conocer el catálogo de billeteras, precios y disponibilidad.'
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function imageUrl(path: string, width = 640) {
  return `/.netlify/images?url=${encodeURIComponent(path)}&w=${width}&fm=webp&q=85`
}
