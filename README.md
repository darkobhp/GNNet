# GNNet Research

A responsive academic website built with Next.js App Router and Tailwind CSS.

## Run locally

1. Install Node.js 18.17 or newer.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000).

## Google Form Backend

The application form can post to Google Sheets and Google Drive through a Google Apps Script webhook.

1. Copy `.env.example` to `.env.local`
2. Set `GOOGLE_APPS_SCRIPT_URL` to your deployed Apps Script web app URL
3. Use the template in `google-apps-script/submit-application.gs`
4. In Apps Script, set your spreadsheet ID and optional Drive folder ID
5. Deploy the script as a web app that allows POST requests
6. If you deploy the Next.js site, add the same `GOOGLE_APPS_SCRIPT_URL` value to your hosting provider's environment variables as well, because `.env.local` is not committed to Git

The Next.js form submits to `app/api/apply/route.ts`, which forwards applicant data and an optional uploaded CV file to Google Apps Script.

## Project structure

- `app/` contains the App Router layout, page, and global styles
- `components/` contains reusable UI sections and cards
- `data/` contains editable content arrays and site copy
- `public/images/` contains placeholder headshots and static assets

## Editing content

Update structured content in `data/site.ts` to replace placeholder publications, registries, conferences, team members, links, and contact details without restructuring the UI.
