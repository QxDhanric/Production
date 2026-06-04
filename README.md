# QxDhanric Storefront

Premium fashion streetwear e-commerce website for QxDhanric.

## Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Optimized local image assets with `next/image`

## Brand

- Brand: QxDhanric
- Tagline: Be You. Own It.
- Palette: Bone `#ECE8E0`, Black `#1A1A1A`, Charcoal `#2A2A2A`, Muted Lime `#B5C44A`
- Positioning: modern luxury streetwear, minimalist, confident, premium, editorial

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## Deploy To Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Keep the default Next.js framework preset.
4. Build command: `npm run build`
5. Output directory: `.next`

All brand and product assets are local files in `public/brand`, `public/generated`, and `public/products`.
