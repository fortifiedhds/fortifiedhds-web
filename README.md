# Fortified HDS Website

Website for Fortified Health and Development Solutions Limited.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Vercel Deployment

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run typecheck
```

## Environment Variables

To enable the contact form functionality, you need a Web3Forms access key.

1. Copy `.env.example` to `.env`
2. Get a free access key from [Web3Forms](https://web3forms.com/)
3. Add it to your `.env` file:
   ```env
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```
