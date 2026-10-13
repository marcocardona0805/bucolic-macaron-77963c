import { GoogleGenAI } from '@google/genai'
import { writeFile } from 'node:fs/promises'
import sharp from 'sharp'

const client = new GoogleGenAI({
  apiKey: process.env.NETLIFY_AI_GATEWAY_KEY,
  httpOptions: { baseUrl: process.env.NETLIFY_AI_GATEWAY_BASE_URL?.replace(/\/$/, '') },
})

async function generate(prompt, aspectRatio) {
  const response = await client.models.generateContent({
    model: 'gemini-3.1-flash-image',
    contents: prompt,
    config: { responseModalities: ['IMAGE'], imageConfig: { aspectRatio, imageSize: '2K' } },
  })
  const image = response.candidates?.[0]?.content?.parts?.find(part => part.inlineData)?.inlineData
  if (!image?.data) throw new Error('No se recibió una imagen.')
  return Buffer.from(image.data, 'base64')
}

const jobs = [
  async () => {
    const image = await generate('Luxury editorial leather goods still life photography, horizontal composition. On the RIGHT HALF of frame a beautiful cognac brown leather bifold mens wallet standing partly open at a three quarter angle on a weathered warm walnut desk, another dark chocolate leather card holder lying nearby. Large aged tan leather hide and a subtle blurred wooden workshop background. Directional golden window light from upper right, natural strong shadows, authentic grain and tactile stitching, premium Italian fashion campaign, medium format film look. LEFT HALF is dark brown softly lit empty wall with subtle rich leather texture, enough negative space for white headline overlay. A little green olive branch on extreme right. No text, no lettering, no watermark, no logo, no people. Warm tobacco and deep chocolate palette, photorealistic.', '16:9')
    await writeFile('public/img/editorial.jpg', await sharp(image).jpeg({ quality: 92 }).toBuffer())
    console.log('Imagen editorial guardada.')
  },
]

const modelDescriptions = [
  'cognac brown closed classic bifold mens leather wallet',
  'black closed classic bifold mens leather wallet',
  'dark chocolate slightly open bifold mens leather wallet',
  'olive green vertical compact mens leather wallet',
  'tan leather trifold mens wallet',
  'cognac slim leather money clip wallet with visible small silver clip',
  'black slim leather money clip wallet with visible silver clip',
  'chocolate brown slim leather money clip wallet with visible brass clip',
  'burgundy long zip around womens leather wallet',
  'caramel envelope womens leather wallet with flap and gold snap',
  'ivory compact zip around womens leather wallet',
  'muted dusty rose long womens leather wallet with small gold clasp',
]

async function generateStrip(offset) {
  const descriptions = modelDescriptions.slice(offset, offset + 3)
  const image = await generate(`A WIDE HORIZONTAL TRIPTYCH of exactly THREE product photos arranged SIDE BY SIDE, ONE ROW ONLY, equal third-width panels. Left panel: ${descriptions[0]}. Middle panel: ${descriptions[1]}. Right panel: ${descriptions[2]}. Each product centered completely within its own third of the image with generous 20 percent blank margins all around. Each background is identical solid light warm beige #eee9e1. Soft studio shadows, premium photorealistic ecommerce photography, tactile leather grain, three quarter product angle. No text, no logos, no other objects. Exactly three photos side by side.`, '21:9')
  await writeFile(`/tmp/marco-strip-${offset}.jpg`, image)
  const metadata = await sharp(image).metadata()
  const cellWidth = Math.floor(metadata.width / 3)
  await Promise.all(descriptions.map(async (_, index) => {
    const buffer = await sharp(image).extract({ left: index * cellWidth + 20, top: 20, width: cellWidth - 40, height: metadata.height - 40 }).resize(700, 700, { fit: 'cover' }).jpeg({ quality: 92 }).toBuffer()
    await writeFile(`public/img/modelo-${String(offset + index + 1).padStart(2, '0')}.jpg`, buffer)
  }))
  console.log(`Referencias ${offset + 1} a ${offset + 3} guardadas.`)
}

await Promise.all([
  ...(process.argv.includes('--catalog-only') ? [] : jobs.map(job => job())),
  ...[0, 3, 6, 9].map(generateStrip),
])
