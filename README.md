# Saint Central

A single-page Next.js website for the Saint Central mobile app. Its nighttime theme uses the app’s lamplit navy, warm cream, and peach palette, with celestial details, rounded surfaces, Inter body text, and serif marketing headings. The illustrated Pray preview and Prayer Pals use artwork adapted from the original app.

## Run locally

Requires Node.js 20.9 or later.

```sh
npm install
npm run dev
```

```sh
npm run typecheck
npm run build
npm start
```

## Deploy to Vercel

Push this project to the `colincherney/saint-central-website` GitHub repository, then import that repository at [Vercel New Project](https://vercel.com/new). Choose the Next.js framework preset and leave the root directory and build settings at their defaults. Deploy the project. Once the GitHub integration is connected, pushes to the production branch automatically trigger production deployments. Other branches receive preview deployments.

The supplied support email and App Store link are configured in `lib/site.ts`. Deployment works with zero environment variables. To override those values or add a canonical website URL, set the optional variables shown in `.env.example` in Vercel and redeploy. `NEXT_PUBLIC_SITE_URL` should be your final production URL, including `https://`.

## App listing links

The site is one page. These convenient paths redirect to its corresponding sections. Legal and deletion sections expand automatically when opened from a link.

- `/privacy` and `/privacy-policy`
- `/support`
- `/terms`
- `/eula`
- `/delete-account`

The footer also links directly to Apple’s [Standard EULA](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/).

## Policy content

Privacy and support copy follows the Prayer repository’s account, guest, prayer-sharing, group, journal, moderation, notification, purchase, and deletion implementation as inspected on November 14, 2026. It identifies Supabase, Expo, Apple, RevenueCat, OpenAI, and Vercel. Confirm the wording against your production service-provider configuration, retention practices, supported audiences, and actual business details before using it for an App Store submission. Revise the text and date when those practices change.
