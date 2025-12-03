# Alcovia - Youth Mentorship Platform

A premium, high-energy website for Alcovia, a premier community of passion-driven teenagers. Built with Next.js 14+, featuring smooth animations, custom cursor, and modern interactions inspired by premium design aesthetics.

## 🚀 Features

- **Custom Cursor**: Unique "Alcovian with wings" cursor that follows mouse movement with smooth spring animations
- **Hero Section**: Full-viewport hero with parallax effects and staggered text animations
- **Manifesto Section**: Bold typography with word-by-word reveal animations
- **Offerings Grid**: 9 key offerings displayed in a responsive 3-column grid with hover effects
- **Interactive Toggle**: Smooth state transitions between "At School" and "Outside of School" content
- **Social Cards**: Fanned-out social media cards with hover animations
- **Responsive Design**: Mobile-first approach with breakpoints for all device sizes
- **60fps Animations**: GPU-accelerated animations using Framer Motion and GSAP
- **Accessibility**: ARIA labels, keyboard navigation, and reduced motion support

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP with ScrollTrigger
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

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
│   │   ├── layout.tsx          # Root layout with fonts and cursor
│   │   ├── page.tsx             # Main page with all sections
│   │   └── globals.css          # Global styles and Tailwind config
│   ├── components/
│   │   ├── CustomCursor.tsx     # Custom cursor component
│   │   ├── HeroSection.tsx      # Hero section with parallax
│   │   ├── ManifestoSection.tsx # Manifesto with key offerings
│   │   ├── OfferingsGrid.tsx    # Grid of 9 offerings
│   │   ├── ToggleSection.tsx    # Interactive toggle section
│   │   ├── SocialsFooter.tsx    # Social cards and footer
│   │   └── ui/
│   │       ├── Button.tsx       # Reusable button component
│   │       └── Card.tsx         # Reusable card component
│   ├── hooks/
│   │   └── useCustomCursor.ts   # Custom cursor hook
│   └── lib/
│       └── animations.ts        # Reusable animation variants
├── public/                       # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🎨 Design System

### Color Palette
- **Primary**: Deep purple (#6B46C1) to blue (#2563EB) gradients
- **Background**: Dark navy (#0F172A) to black (#000000)
- **Accent**: Bright cyan (#06B6D4) and purple (#A855F7)
- **Text**: White (#FFFFFF) and light gray (#E2E8F0)

### Typography
- **Font**: Inter (weights: 400, 600, 700, 900)
- **Hero**: 4-8rem (responsive with clamp)
- **H1**: 3-4rem
- **H2**: 2-3rem
- **Body**: 1-1.125rem

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

### Build for Production

```bash
npm run build
npm start
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus visible states
- Respects `prefers-reduced-motion` media query
- Proper heading hierarchy

## 🎯 Performance Optimizations

- GPU-accelerated animations (transform & opacity only)
- Lazy loading for below-the-fold content
- Optimized images with Next.js Image component
- Tree-shaking for minimal bundle size
- 60fps target for all animations

## 🔧 Customization

### Changing Colors

Edit `tailwind.config.ts` to modify the color palette:

```typescript
colors: {
  primary: {
    DEFAULT: "#6B46C1",
    // ...
  }
}
```

### Modifying Animations

Edit `src/lib/animations.ts` to adjust animation variants and timings.

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add to `src/app/page.tsx`
3. Use animation variants from `src/lib/animations.ts`

## 📝 License

© 2024 Alcovia. All rights reserved.

## 🤝 Contributing

This is a private project for Alcovia. For questions or suggestions, please contact the development team.

---

**Built with ❤️ for the next generation of leaders**
