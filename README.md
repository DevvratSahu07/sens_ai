# Full Stack AI Career Coach with Next JS, Neon DB, Tailwind, Prisma, Inngest, Shadcn UI Tutorial 🔥🔥

### Make sure to create a `.env` file with following variables -

```
DATABASE_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

GEMINI_API_KEY=
```

### Deploying on Render (e.g. `https://sens-ai.onrender.com`)

The deploy log showing **Ready** only means the Node process started. If the site shows a blank page, **Application error**, or auth/database failures, check the following.

1. **Environment variables**  
   In the Render service, add every variable from the list above (same names as in `.env`). `DATABASE_URL` must point at your hosted Postgres (e.g. Neon) with **SSL** if the provider requires it.

2. **Build command (Prisma)**  
   Apply migrations before `next build` so the database schema exists when the app runs:

   `npm install && npx prisma migrate deploy && npm run build`

3. **Clerk (required for sign-in and middleware)**  
   In the [Clerk Dashboard](https://dashboard.clerk.com) for your application:

   - Under **Domains**, add your Render URL (e.g. `sens-ai.onrender.com`).
   - Under **Paths / Redirect URLs**, allow sign-in/sign-up and redirects for  
     `https://sens-ai.onrender.com/*` (and `http://localhost:3000/*` for local dev).

   Missing or wrong Clerk settings often cause **500** or redirect loops in production.

4. **Do not commit `package.json` self-dependencies**  
   A line like `"ai-career-coach": "file:"` breaks clean `npm install` on Render; it has been removed from this repo.

5. **Inngest** (optional)  
   If you use Inngest Cloud with `/api/inngest`, configure the signing/event keys in Render as required by [Inngest’s Next.js docs](https://www.inngest.com/docs/deploy/nextjs).
