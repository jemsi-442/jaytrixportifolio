<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:000000,100:0f2027&height=200&section=header&text=JAYTRIX&fontSize=60&fontColor=00ffcc&animation=fadeIn" alt="JAYTRIX header" />
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=24&duration=3000&pause=1000&color=00FFCC&center=true&vCenter=true&width=700&lines=Software+Engineer;System+Architect;Security-Minded+Developer;Linux+Power+User;Building+Scalable+%26+Secure+Systems" alt="Typing banner" />
</p>

<h3 align="center">Software Engineer Portfolio</h3>

<p align="center">
  A modern portfolio built with Next.js to present software engineering work, system architecture thinking, and production-oriented projects.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=nextdotjs" alt="Next.js 14" />
  <img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react" alt="React 18" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-0ea5e9?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel" alt="Vercel" />
</p>

## Overview

This repository contains the personal portfolio for **Jemsi Pallangyo (JAYTRIX)**.

Preferred repository name: `jaytrixportifolio`

The site is designed to communicate:

- software engineering identity rather than a narrow single-role title
- architecture-first thinking
- structured presentation of skills, projects, education, and contact details
- a polished visual style with motion, layered cards, and responsive sections

## Highlights

- Built with the Next.js App Router
- Content-driven structure using a central data source
- Responsive hero section with animated technical visualization
- Reusable UI components for headings, cards, badges, and animated section reveals
- Production-safe setup with working `lint` and `build` commands

## Tech Stack

```bash
Framework    -> Next.js 14
UI Layer     -> React 18
Styling      -> Tailwind CSS 4 + custom global CSS
Content      -> Centralized JS data objects
Deployment   -> Vercel-ready
Tooling      -> ESLint
Runtime      -> Node.js 18.18+
```

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the app in your browser:

```bash
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Structure

```text
app/
  globals.css        Global theme, motion, and shared utility styles
  layout.js          App shell and metadata
  page.js            Home page section composition

public/
  images/profile.jpg Profile image asset

src/
  components/
    layout/          Navbar and footer
    sections/        Hero, About, Skills, Projects, Experience, Education, Contact
    ui/              Reusable presentational components
  hooks/
    useScrollSpy.js  Active section tracking for navigation
  lib/
    data.js          Portfolio content source
    utils.js         Small helpers
```

## Content Management

Most portfolio content is controlled from:

```text
src/lib/data.js
```

This includes:

- profile identity and contact information
- stats and focus areas
- skills categories
- experience history
- education items
- projects and project metadata
- navigation labels

## Design Direction

The interface is intentionally built around:

- dark, technical presentation
- accent-driven hierarchy
- architecture and systems messaging
- strong card-based information layout
- subtle motion instead of excessive animation noise

## Quality Checks

The project currently passes:

```bash
npm run lint
npm run build
```

## Notes

- This repo uses centralized content so copy and branding updates are fast.
- The UI is already structured for future additions like more project screenshots or a live contact backend.
