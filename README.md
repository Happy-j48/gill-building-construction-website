# Gill Building & Construction — Portfolio Website

This project started as the BrightVolt Energy React/Vite practice website and has been converted into a construction-focused portfolio concept for **Gill Building & Construction**.

## Stack
- React 18
- Vite
- React Router
- JavaScript
- CSS

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal (normally `http://localhost:5173/`).

## Main pages
- Home
- About
- Services
- Projects
- Residential Construction
- Commercial Construction
- Renovations & Extensions
- FAQs
- Contact

## Where to update client information
Most reusable business content is in:

`src/data/siteData.js`

Replace the placeholder phone, email, address, ABN, hours, services, project details, FAQs and testimonials with client-approved information before publishing.

## Client logo assets
The supplied client assets are in:

`public/images/`

- `gill-logo-cropped.jpg` — website logo version
- `gill-logo-original.jpg` — original supplied logo
- `gill-brand-banner.jpg` — original supplied wide brand graphic

## Project photos
The current portfolio uses temporary construction imagery from remote image URLs. Replace those URLs in `src/data/siteData.js` with the client's own project photos when available.

## Important
The current contact form is **front-end only** and does not send emails. Connect it to the client's chosen form service or backend before using the site for real enquiries.

The current testimonials and project descriptions are portfolio/demo content and should be replaced with client-approved material before launch.
