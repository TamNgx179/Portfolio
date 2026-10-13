# Portfolio redesign brief

## Direction

Use Alvalens as a high-level reference for the compact header, image-led hero, generous but controlled spacing, strong section headings, and interaction rhythm. Keep this portfolio distinct and concise. The user's annotated screenshots are the acceptance reference for removing secondary labels and number clutter.

Use a single slate-blue color family throughout the page, based on [Figma's Slate Blue palette](https://www.figma.com/color-palettes/slate-blue/). Dark ink, light slate surfaces, and brand-logo colors provide hierarchy. No emoji, space theme, or purposeless abstract shapes.

## Screen map

1. Header: only “Tam Nguyen” and Menu; icon-only desktop rail with accessible names.
2. Hero: short positioning, CV/contact actions, smaller real portrait. No eyebrow, status strip, caption, or scroll prompt.
3. About: two concise paragraphs and experience link. Education section removed.
4. Skills: selectable categories, interactive Three.js logo-card scene, visible text/keyboard fallback, reduced-motion support.
5. Experience: prominent date chip beside a company card, official/company logos, circular technology marks, focused contribution bullets, offset shadow retained.
6. Projects: two-column desktop grid, one-column mobile, real screenshots, technology logos, working external links.
7. Contact: email and functional LinkedIn, GitHub, and email links. No footer.

## Interaction and acceptance

- Desktop rail and menu navigate to each section with its underlined title and content visible below the fixed header.
- No UI numbering. Section titles are large, legible and underlined.
- Skills scene responds to pointer and selection; every technology remains accessible through visible buttons if WebGL is unavailable. Reduced-motion preference removes autonomous floating motion.
- Menu closes on Escape or link selection and retains keyboard focus management. Category tabs support Left/Right arrows.
- No horizontal overflow on mobile. Typography and media scale down, without making links or controls hard to use.
- The portfolio is static: no backend, form-validation, or network-derived content states apply. Image/WebGL failure must not hide core content.
- Run the registered `verify:frontend` alias and visual browser checks at desktop and mobile sizes before handoff. Do not commit/push without a separate user checkpoint.
