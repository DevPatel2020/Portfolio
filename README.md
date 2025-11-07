Dev Patel Portfolio
===================

A neo-brutalist personal portfolio showcasing AI/ML projects, full-stack work, and credentials. Built with Next.js 15, Tailwind CSS, and a rich component library, the site highlights Dev Patel’s technical skills, project accomplishments, experience, and professional certifications.

- **Live Site:** https://portfolio-delta-liard-52.vercel.app/
- **Author:** Dev Patel · devpatel93131@gmail.com · [GitHub](https://github.com/DevPatel2020) · [LinkedIn](https://www.linkedin.com/in/dev-patel-855ba6250/)

Features
--------

- Animated hero with dynamic cursor-driven background elements and call-to-action buttons (email compose + project scroll).
- About section with highlights and stats driven from a centralized content file.
- Interactive skills showcase with category navigation, expertise badges, and animated cards.
- Projects grid presenting six AI/ML and full-stack case studies, each with tech stacks and GitHub links.
- Experience timeline summarizing roles, internships, and hackathon achievements.
- Certificates gallery styled to match project cards, featuring full certificate imagery and external validation links.
- Global UI consistency through neo-brutalist cards, gradients, hover states, and animated accents.
- Content managed via `lib/content.ts` for quick updates without touching layout components.

Tech Stack
----------

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript / React 19
- **Styling:** Tailwind CSS, custom neo-brutalist components
- **Icons & UI:** lucide-react, shadcn/ui components
- **State & Effects:** React hooks (`useState`, `useEffect`)
- **Tooling:** ESLint, TypeScript, PostCSS, Tailwind config

Project Structure
-----------------

```
.
├── app/
│   ├── layout.tsx          # Global layout + metadata
│   └── page.tsx            # Home page composition
├── components/
│   ├── hero-section.tsx
│   ├── about-section.tsx
│   ├── skills-section.tsx
│   ├── projects-section.tsx
│   ├── experience-section.tsx
│   ├── certificates-section.tsx
│   └── footer.tsx
├── lib/content.ts          # Centralized portfolio data
└── public/
    ├── projects/           # Project showcase images
    └── certificates/       # Certificate screenshots
```

Getting Started
---------------

```
# install dependencies
npm install --legacy-peer-deps --no-audit --no-fund

# run locally (default port 3000)
npm run dev

# run on a custom port
npm run dev -- -p 3010

# production build
npm run build
npm run start
```

> **Requirement:** Node.js 20+. Some dependencies expect React 18 peer versions; use the `--legacy-peer-deps` flag if npm raises conflicts.

Updating Content
----------------

- All portfolio data (hero copy, skills, projects, experience, certificates) lives in `lib/content.ts`.
- Project and certificate images are referenced via `/public/projects/...` and `/public/certificates/...` respectively.
- To add new projects or certificates, place the assets in the appropriate `public` subfolder and update `portfolioContent`.

Deployment
----------

The site is deployed on **Vercel**. Configure the project by linking the repository, setting the framework preset to Next.js, and deploying from the `main` branch.

- Live site: https://portfolio-delta-liard-52.vercel.app/
- Build command: `npm run build`
- Output directory: `.next`

Contributing
------------

Issues and pull requests are welcome. Please fork the repository, create a feature branch, and submit a PR describing your changes.

License
-------

This portfolio is provided for personal showcase purposes. Reuse the layout or components freely, but please replace all personal information, images, and credentials with your own.
