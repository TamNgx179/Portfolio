# Portfolio project guidance

## Product intent

This repository is Nguyen Minh Tam's public software engineering portfolio. Optimize for
clear evidence of engineering ability, fast recruiter scanning, accessibility, and a calm,
memorable visual identity. Do not reintroduce the former space theme.

## Frontend conventions

- Use the Next.js App Router, React, TypeScript, Tailwind CSS, and existing image assets where
  they support the current content.
- Keep content data separate from large presentation components when practical.
- Preserve semantic landmarks, keyboard access, visible focus, readable contrast, responsive
  layouts, and `prefers-reduced-motion` behavior.
- Animation must clarify hierarchy or provide restrained feedback. Avoid continuous decorative
  motion that competes with portfolio content.
- Treat Three.js as an optional enhancement. The core page must remain usable and attractive
  without WebGL.
- Do not use emoji as UI icons or add decorative shapes without a content purpose. Keep one
  coherent, accessible palette; when choosing a new palette, consult Figma Color Palettes.

## Verification

Run the registered Harness alias `verify:frontend` before handoff. This executes lint and the
production build. The project currently has no automated browser test suite.

## Git safety

Do not commit, push, force-push, or mutate the remote without an explicit checkpoint from the
user. Preserve user changes and keep work inside this project unless the task explicitly
includes Harness registry maintenance.
