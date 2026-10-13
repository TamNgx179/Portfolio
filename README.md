# Portfolio

Personal software-engineering portfolio for Nguyễn Minh Tâm. Built with Next.js, React, TypeScript, and Three.js. The site includes an interactive 3D skills scene, internship experience, selected projects, and contact links.

## Run locally

```bash
npm install
npm run dev
```

Open http://127.0.0.1:3000.

## Deployment

Production: https://tam-nguyen-portfolio-eight.vercel.app. The GitHub repository is linked to Vercel; production deployments follow updates to `main`.

The Download CV button serves the original PDF as `Nguyễn Minh Tâm_CV_Software Engineer.pdf`, preserving the supplied file bytes and download filename.

## Verify

```bash
npm run lint
npm run build
```

Content for projects and experience is maintained in `app/portfolio-content.ts`. Skill categories and navigation live in `app/components/PortfolioInteractions.tsx`. Visual design tokens and responsive layouts live in `app/globals.css`.

## Interaction and design

- One wheel gesture switches to a single full-screen section with a restrained 400 ms fade/translation entrance, without revealing adjacent sections or an outer scrollbar. Reduced motion removes the entrance animation. Long content scrolls inside its own panel with hidden scrollbars before changing sections at the boundary. Touch, keyboard, icon navigation, deep links and browser Back/Forward are supported. Without JavaScript the content remains a regular readable page.
- Project screenshots are fully contained, without cropping or hover zoom. Each screenshot links to its original full-resolution image.
- Skills show only a large rotating cluster of extruded technology logos. Drag or click a logo; keyboard arrows rotate, Space pauses/resumes, and Home resets. A logo grid replaces WebGL when unavailable; reduced-motion preferences disable automatic rotation. Haystack and Gemini are excluded.
- The unified palette is based on [Figma Slate Blue](https://www.figma.com/color-palettes/slate-blue/). Contact follows the supplied Alvalens composition, using only verified contact destinations.
- Research: [developer-portfolios](https://github.com/emmabostian/developer-portfolios), [Bruno Simon](https://bruno-simon.com/) for purposeful interactive 3D, and [Brittany Chiang](https://brittanychiang.com/) for clear content hierarchy. The skills logo cloud is an original implementation, not a copied scene.
- `public/images/tam-developer-avatar.png` was generated with built-in Imagegen from the supplied cartoon reference: a rounded, toy-like 3D developer with black hair, slate-blue clothing, and an open laptop. No photographic face compositing is used.
