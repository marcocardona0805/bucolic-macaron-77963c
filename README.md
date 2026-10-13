# Marco Cardona

Sitio de catálogo en español para Marco Cardona, una marca de billeteras y pisabilletes de cuero. La experiencia conecta a los visitantes directamente con WhatsApp Business, sin carrito ni pagos en línea.

El catálogo ilustrativo contiene **12 referencias**, siguiendo el desglose solicitado: 5 billeteras de hombre, 3 pisabilletes y 4 billeteras de dama. Las fotografías generadas y los nombres de muestra están identificados como ilustrativos. No se publican precios, inventario, garantías ni condiciones de envío que no hayan sido confirmados.

## Tecnologías

React 19, TypeScript, TanStack Start y TanStack Router, Vite, CSS personalizado con Tailwind CSS 4 disponible, Lucide y Netlify. Los archivos fotográficos se sirven mediante Netlify Image CDN con tamaños adaptativos y formato WebP.

## Desarrollo local

Se requiere Node.js 22 o posterior y pnpm.

```bash
pnpm install
netlify dev --port 8889
```

Netlify Dev incluye la emulación de Image CDN. El despliegue utiliza la configuración de `netlify.toml` y el adaptador de TanStack Start para Netlify.

## Actualizar el catálogo

Los textos, colores, categorías y referencias editoriales están en `src/data/products.ts`. Para publicar el catálogo real, reemplaza las imágenes de `public/img/`, los nombres y las descripciones, y actualiza los avisos ilustrativos en las tarjetas, fichas, página de inicio, pie de página y preguntas frecuentes. Mantén los identificadores existentes si necesitas conservar los enlaces de las referencias.

El contacto y los mensajes de consulta están centralizados en `src/lib/site.ts`. El número configurado es +57 314 259 4205. Cada referencia tiene una ficha propia y un mensaje que solicita fotos reales, precio y disponibilidad.

No hay cuentas, formularios, gestión de inventario ni datos de clientes almacenados. El catálogo es contenido editorial del sitio, no una base de datos editable. Si se añade administración o persistencia, se debe utilizar Netlify Database.

## Imágenes ilustrativas

Los archivos generados ya están incluidos; no se requiere IA para visitar ni desplegar el sitio. `scripts/generate-images.mjs` documenta su generación mediante Netlify AI Gateway, Gemini y Sharp. Su ejecución es opcional, requiere un entorno autorizado de AI Gateway, consume créditos y reemplaza las imágenes ilustrativas. No ejecutes este script después de sustituirlas por fotografías reales.
