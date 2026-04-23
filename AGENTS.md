# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Hassan Mohamed (Senior Full Stack Developer). Single-page Next.js application with smooth scrolling between sections.

## Commands

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## Architecture

### Stack
- **Framework**: Next.js 16 (App Router)
- **React**: 19
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Email**: Resend API for contact form

### Directory Structure
- `app/` - Next.js App Router pages and API routes
  - `page.tsx` - Main page composing all sections
  - `layout.tsx` - Root layout with metadata
  - `globals.css` - Global styles and CSS variables
  - `api/contact/route.ts` - Contact form email handler
- `components/` - React components (one per section)
- `data/content.ts` - Centralized content/data file

### Content Management
All portfolio content (experience, skills, projects, contact info) lives in `data/content.ts`. Update this file to change any displayed information.

### Styling Conventions
- Dark theme with CSS variables defined in `globals.css`
- Primary accent color: `#3b82f6` (blue)
- Background: `#0a0a0a`
- Tailwind classes used throughout components

### Component Pattern
Components are client components (`'use client'`) using Framer Motion for scroll-triggered animations. Each section component is self-contained with its data imported from `@/data/content`.

## Environment Variables

- `RESEND_API_KEY` - Required for contact form email functionality
