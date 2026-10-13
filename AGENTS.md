# Marco Cardona — Project guidance

## Architecture

Spanish-language leather wallet catalog built with React 19, TypeScript, TanStack Start, file-based TanStack Router, Vite and the Netlify adapter. There is no cart, checkout, authentication, customer storage or runtime AI. Purchases and availability inquiries go to WhatsApp Business.

## Key directories

- `src/routes/__root.tsx`: document language, brand metadata, shared header/footer, favicon and global styles.
- `src/routes/index.tsx`: editorial homepage, category filters, normalized search, sorting, progressive catalog reveal, brand section and FAQ.
- `src/routes/products/$productId.tsx`: reference details, related references and Spanish missing-product handling.
- `src/data/products.ts`: twelve static editorial references and category metadata, not a persistent or editable inventory system.
- `src/components/`: shared navigation, WhatsApp icon, footer and reusable product cards.
- `src/lib/site.ts`: WhatsApp destination/messages and Netlify Image CDN URL generation.
- `src/styles.css`: responsive visual system, warm neutrals, Cormorant Garamond/DM Sans typography, keyboard focus and reduced-motion support.
- `public/img/`: local generated illustrative photography served through Image CDN.
- `scripts/generate-images.mjs`: optional asset generation using Netlify AI Gateway, Gemini and Sharp; not part of the build or visitor experience.

## Product decisions

Follow the explicit category breakdown of five men's wallets, three money clips and four women's wallets (twelve total), rather than the conflicting mention of six references. All current product names and images are illustrative and are disclosed as such. Never invent real prices, stock, specifications, manufacturing claims, shipping guarantees or payment conditions. Request real details through WhatsApp. When replacing the illustrations with actual catalog material, update the notices in every surface as well as the data.

The business WhatsApp number is centralized in `src/lib/site.ts`; keep its displayed version in the footer consistent. Product inquiries include the reference name. Use encoded messages, HTTPS WhatsApp links and `noopener noreferrer` for external new-tab links.

## Conventions

Use TypeScript, PascalCase components, camelCase helpers and the `@/` alias. Keep all visible text, error messages and accessibility labels in Spanish. Use the existing warm editorial design rather than generic component libraries. Avoid inline comments and unnecessary dependencies. Keep React filter/search state transient. Hash links select categories and scroll to the collection on both direct navigation and in-page navigation.

Do not add a database for static editorial content. Any future user data, editable catalog, inventory or orders must use Netlify Database and the corresponding skills. Uploaded assets must use Netlify Blobs. No generated or uploaded credentials belong in the repository.

## Development and deployment

Install dependencies with `pnpm install`. Use `netlify dev --port 8889` for local development and Image CDN emulation. The automated platform pipeline builds with the command in `netlify.toml`. Do not run builds, tests, type checks or development servers during agent sessions where project instructions prohibit them. Do not inspect the `.git` directory, create commits or write secrets to output.

The optional image generation script consumes credits and overwrites illustrative assets. Do not run it after real photos are installed. Credentials are read only from the gateway environment and must never be logged. Preserve the local assets so deployment never depends on a live AI request.

Keep `README.md` accurate and write a standalone, past-tense completion summary to `.netlify/results.md` after implementation. Do not set an Open Graph image; the platform supplies it.
