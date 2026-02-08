# Hema Sriram — Portfolio

A professional, minimalist personal portfolio for an AI & Machine Learning Engineer. Built with **React**, **Vite**, and **Tailwind CSS**.

## Features

- **Hero**: Two-column layout with intro and profile picture placeholder
- **Sticky navigation**: About, Projects, Experience, Skills, Contact
- **Skills**: Tech chips (Languages, Frameworks, Tools, Domains)
- **Experience**: Vertical timeline with education and roles
- **Projects**: Card grid with View Code / Live Demo, hover effects
- **Certifications & Digital Achievements**
- **Contact footer**: GitHub, LinkedIn, Email
- **Download Resume** button in Hero and floating action button
- Responsive, smooth scrolling, fade-in on scroll, Inter font

## Setup

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output is in `dist/`.

## Resume

Place your resume PDF as `public/resume.pdf` so the “Download Resume” links work. If you use another path, update the `href` in `src/App.jsx` (Hero and `ResumeFAB`).

## Customization

- **Content**: Edit `src/data.js` for profile, skills, experience, projects, certifications.
- **Profile image**: Replace the placeholder in the Hero section with an `<img>` pointing to your photo.
