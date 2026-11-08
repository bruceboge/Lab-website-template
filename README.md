# DeKUT Integrated Circuit Engineering Lab

An App Router website for the DeKUT Integrated Circuit Engineering Lab.

## Project structure

- `src/app/` contains route files, route-specific `_components/`, metadata routes, and global styles.
- `src/components/` contains shared components as flat files.
- `src/data/` contains the site’s project, event, and inventory records.
- `src/lib/` contains schemas, site metadata constants, email delivery, and request handlers.
- `public/` contains static visual assets and self-hosted fonts.

## Contact and loan request delivery

Contact, donation, partnership, and inventory loan requests are sent through the Resend email API when the following server-side environment variables are configured:

```text
RESEND_API_KEY=
RESEND_FROM_EMAIL=
CONTACT_TO_EMAIL=
```

Use a sender address verified with the email provider. Keep these values in the deployment environment or an untracked local `.env.local`; never commit credentials. When delivery is not configured or the provider rejects a message, the API returns an error instead of reporting a false success. Loan requests are emailed for lab review; the generated receipt is not a confirmed reservation.

The inventory counts, availability, people, project results, events, and publications are draft content and must be verified by the lab before public launch. The inventory page labels its quantities as sample data.

Use [LAB-CONTENT-REQUEST.txt](./LAB-CONTENT-REQUEST.txt) to collect the approved institutional, research, course, people, event, publication, and facility details needed to replace preview content.

## Development

Run `npm run dev` to start the local server, `npx tsc --noEmit` for the TypeScript check, `npm run lint` for ESLint, and `npm run build` for a production build.
