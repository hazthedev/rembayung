# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Rembayung is a modern restaurant website for Khairul Aming's RM4 million venture in Kampung Baru, Kuala Lumpur. Built with Next.js 16, TypeScript, and Tailwind CSS, it features a sophisticated animation system, custom branding, and mobile-first responsive design.

## Development Commands

```bash
# Development
npm run dev          # Starts development server on localhost:3000

# Production
npm run build        # Creates production build
npm run start        # Starts production server

# Code Quality
npm run lint         # Runs ESLint
```

## Technology Stack

- **Framework**: Next.js 16.0.10 with App Router
- **Language**: TypeScript 5 (strict mode)
- **Styling**: Tailwind CSS 3.4.1 with custom design system
- **UI Components**: Custom components using Radix UI primitives and shadcn/ui patterns
- **Animations**: Framer Motion 12.23.26 + custom CSS animations
- **Icons**: Lucide React 0.560.0

## Architecture Overview

### Directory Structure
```
src/
├── app/                 # Next.js App Router pages
│   ├── about/           # About page
│   ├── contact/         # Contact page
│   ├── menu/            # Interactive menu
│   ├── reservations/    # Booking system
│   ├── globals.css      # Global styles with custom animations
│   ├── layout.tsx       # Root layout with Navbar/Footer
│   └── page.tsx         # Homepage
├── components/          # React components
│   ├── ui/             # Base UI components (button, card, animations)
│   ├── Navbar.tsx      # Navigation
│   └── Footer.tsx      # Footer
└── lib/                # Utilities (utils.ts)
```

### Key Architectural Decisions

1. **Client-Side Rendering**: All pages use `'use client'` directive - heavy animation focus
2. **Component Pattern**: Reusable UI components in `/ui` directory with variants using class-variance-authority
3. **Styling System**: Comprehensive Tailwind config with custom brand colors and animations
4. **Animation System**: Hybrid approach - Framer Motion for complex animations, CSS for simple ones

### Brand Design System

**Colors** (defined in tailwind.config.ts):
- Primary Orange: `#D97B3A` (primary.DEFAULT)
- Terracotta: `#B85A3A` (secondary.DEFAULT)
- Forest Green: `#2C5F4D` (forest.DEFAULT)
- Cream Background: `#F4EDE3` (cream.DEFAULT)

**Typography**:
- Display: Playfair Display (serif)
- Body: Inter (sans-serif)

### Animation Components

Key reusable animation components in `src/components/ui/`:
- `ScrollAnimation` - Trigger animations on scroll
- `AnimatedElement` - Reveal animations with direction
- `CountingNumber` - Animated number counters
- `TypewriterText` - Typewriter text effect

### Custom CSS Animations

Defined in `globals.css`:
- Floating animations (vertical, subtle)
- Slide animations (left, right, up, down)
- Scale and fade effects
- Custom scroll animations

## Development Guidelines

### When Adding New Pages

1. Create `page.tsx` in appropriate `src/app/` subdirectory
2. Use `'use client'` directive (all pages are client components)
3. Follow existing pattern: hero section → content sections → CTA
4. Utilize `ScrollAnimation` component for section reveals
5. Maintain consistent styling with brand colors

### When Creating Components

1. Place reusable components in `src/components/ui/`
2. Use class-variance-authority for component variants (see button.tsx)
3. Follow established naming conventions (PascalCase)
4. Import using absolute path with `@/` alias

### Styling Practices

1. Use Tailwind classes with custom color palette
2. Responsive design with Tailwind breakpoints (sm, md, lg, xl)
3. Maintain consistency with existing spacing and typography
4. Leverage custom animations defined in tailwind.config.ts

### Image Optimization

- Use Next.js `<Image>` component
- Configure remote patterns in next.config.js for external images
- WebP/AVIF formats automatically enabled
- Device sizes configured for responsive images

## Performance Considerations

- Image optimization configured in next.config.js
- Security headers implemented (XSS protection, frame options)
- Static asset caching configured
- Compression enabled for production builds

## Common Patterns

### Animation Pattern
```tsx
<ScrollAnimation>
  <AnimatedElement direction="up" delay={0.2}>
    {/* Content */}
  </AnimatedElement>
</ScrollAnimation>
```

### Component Pattern
```tsx
'use client'

import { cn } from "@/lib/utils"

export function ComponentName({ className, ...props }: ComponentProps) {
  return (
    <div className={cn("base-classes", className)} {...props}>
      {/* Component content */}
    </div>
  )
}
```

### Color Usage
- Use `bg-primary` for main brand orange
- Use `bg-cream` for backgrounds
- Use `text-forest` for green accents
- Apply `hover:scale-105 transition-transform` for interactive elements