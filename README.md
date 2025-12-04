# Alcovia - Youth Mentorship Platform

A premium, high-energy website for Alcovia, a premier community of passion-driven teenagers (11-16 years). Built with Next.js 14+, featuring smooth animations, custom cursor, horizontal scroll effects, and modern interactions inspired by premium design aesthetics.


## **Live Deployment**: [https://alcovia-a2.vercel.app/](https://alcovia-a2.vercel.app/)


## 🚀 Features

- **Custom Cursor**: Unique "Alcovian with wings" cursor that follows mouse movement with smooth spring animations (desktop only)
- **Hero Section**: Full-viewport hero with parallax effects, staggered text animations, and scroll-triggered fade
- **Manifesto Section**: Bold typography with word-by-word reveal animations and highlighted keywords
- **Offerings Section**: 
  - **Desktop**: Horizontal scroll with GSAP ScrollTrigger, title animation, and card entrance effects
  - **Mobile**: 3 rows of endless horizontal scrolling cards (alternating directions)
- **Interactive Toggle**: Smooth state transitions between "At School" and "Outside of School" content
- **Social Cards**: Fanned-out social media cards in an arc layout with hover animations and z-index management
- **Responsive Design**: Mobile-first approach with breakpoints for all device sizes
- **60fps Animations**: GPU-accelerated animations using Framer Motion and GSAP
- **Accessibility**: ARIA labels, keyboard navigation, and reduced motion support

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP with ScrollTrigger
- **Icons**: Lucide React
- **Fonts**: Inter, Dancing Script (Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd alcovia-a2
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
alcovia-a2/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts, cursor, and favicon
│   │   ├── page.tsx             # Main page with all sections
│   │   └── globals.css          # Global styles, Tailwind config, and animations
│   ├── components/
│   │   ├── CustomCursor.tsx     # Custom cursor component (desktop only)
│   │   ├── HeroSection.tsx      # Hero section with parallax
│   │   ├── ManifestoSection.tsx # Manifesto with key offerings carousel
│   │   ├── OfferingsHorizontal.tsx # Horizontal scroll offerings (desktop) / 3-row scroll (mobile)
│   │   ├── ToggleSection.tsx    # Interactive toggle section
│   │   ├── SocialsFooter.tsx   # Social cards (arc layout) and footer
│   │   └── ui/
│   │       ├── Button.tsx       # Reusable button component
│   │       └── Card.tsx         # Reusable card component
│   └── lib/
│       ├── animations.ts        # Reusable animation variants
│       └── gsap-init.ts         # GSAP and ScrollTrigger initialization
├── public/
│   └── images/
│       ├── hero/                # Hero background images
│       ├── logo/                # Logo SVG
│       └── offerings/          # Offering card images
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🎨 Design System

### Color Palette
- **Primary**: Navy blue (#1E3A5F) - Main brand color
- **Primary Light**: #2D4F7C
- **Primary Dark**: #0F1F35
- **Accent Gold**: #F4A261 - Golden yellow
- **Accent Maroon**: #8B1538 - Deep maroon/burgundy
- **Background Light**: #FFFFFF
- **Background Offwhite**: #FAFAFA
- **Text Primary**: #1E3A5F
- **Text Secondary**: #4A5568

### Typography
- **Font**: Inter (weights: 400, 600, 700, 900)
- **Accent Font**: Dancing Script (for highlighted manifesto words)
- **Hero**: Responsive sizing with word-by-word animations
- **H1**: 3-8rem (responsive)
- **H2**: 2-5rem (responsive)
- **Body**: 1-1.125rem




### Build for Production

```bash
npm run build
npm start
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Desktop**: ≥ 768px

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus visible states
- Respects `prefers-reduced-motion` media query
- Proper heading hierarchy
- Touch device detection for cursor

## 🎯 Performance Optimizations

- GPU-accelerated animations (transform & opacity only)
- Lazy loading for below-the-fold content
- Optimized images with Next.js Image component
- Tree-shaking for minimal bundle size
- 60fps target for all animations
- `willChange` hints for animated elements
- ScrollTrigger cleanup on unmount

## 🔧 Key Features Explained

### Horizontal Scroll (Desktop)
The offerings section uses GSAP ScrollTrigger to create a pinned horizontal scroll experience:
1. Title starts large and centered, shrinks and moves to top
2. Cards enter from the right
3. Horizontal scroll through all offerings
4. Smooth transitions between phases

### Mobile Offerings
- 3 rows of cards (3 cards per row)
- Each row scrolls horizontally endlessly
- Row 1 & 3: Left to right
- Row 2: Right to left (alternating direction)

### Social Cards Arc
- Cards arranged in a curved arc
- Center card (WhatsApp) is highest
- Hover effects with z-index management
- Responsive sizing for mobile


