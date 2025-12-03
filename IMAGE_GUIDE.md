# Image Guide for Alcovia Website

## 📁 Folder Structure

Place all images in the `public` folder. In Next.js, images in `public` are served from the root URL.

```
public/
├── images/
│   ├── logo/
│   ├── hero/
│   ├── offerings/
│   └── misc/
└── favicon.ico
```

## 🖼️ Required Images

### 1. Logo Files (Priority: HIGH)

**Location:** `public/images/logo/`

| File Name | Format | Size | Usage |
|-----------|--------|------|-------|
| `logo.svg` or `logo.png` | SVG (preferred) or PNG | 200x60px | Main logo for header |
| `logo-icon.svg` or `logo-icon.png` | SVG or PNG | 60x60px | Icon-only version |
| `logo-white.svg` or `logo-white.png` | SVG or PNG | 200x60px | For dark backgrounds (if needed) |

**Recommended:**
- Use SVG for crisp display at any size
- If using PNG, use transparent background
- Match your brand colors (navy blue, maroon, gold)

---

### 2. Hero Section Images (Priority: MEDIUM)

**Location:** `public/images/hero/`

| File Name | Format | Size | Usage |
|-----------|--------|------|-------|
| `hero-background.jpg` or `hero-bg.webp` | JPG/WebP | 1920x1080px | Background image for hero section |
| `hero-students.jpg` | JPG/WebP | 1200x800px | Students/community image (optional) |

**Recommended:**
- Use WebP for better compression
- Optimize for web (compress to ~200-500KB)
- Light, educational theme - students learning, collaboration, etc.

---

### 3. Offering/Feature Images (Priority: MEDIUM)

**Location:** `public/images/offerings/`

| File Name | Format | Size | Usage |
|-----------|--------|------|-------|
| `mentorship.jpg` | JPG/WebP | 600x400px | For mentorship offering card |
| `workshop.jpg` | JPG/WebP | 600x400px | For workshop offering card |
| `career-guidance.jpg` | JPG/WebP | 600x400px | For career guidance card |
| `peer-learning.jpg` | JPG/WebP | 600x400px | For peer learning card |
| `academic-support.jpg` | JPG/WebP | 600x400px | For academic support card |
| `networking.jpg` | JPG/WebP | 600x400px | For networking card |
| `resilience.jpg` | JPG/WebP | 600x400px | For resilience building card |
| `empathy.jpg` | JPG/WebP | 600x400px | For empathy building card |
| `leadership.jpg` | JPG/WebP | 600x400px | For leadership building card |

**Recommended:**
- Consistent aspect ratio (3:2 or 4:3)
- Light, professional images
- Optimize each to ~50-100KB

---

### 4. Social Media Icons (Priority: LOW - Already using Lucide icons)

Currently using Lucide React icons. If you want custom icons:

**Location:** `public/images/social/`

| File Name | Format | Size |
|-----------|--------|------|
| `linkedin-icon.svg` | SVG | 24x24px |
| `instagram-icon.svg` | SVG | 24x24px |

---

### 5. Miscellaneous Images (Priority: LOW)

**Location:** `public/images/misc/`

| File Name | Format | Size | Usage |
|-----------|--------|------|-------|
| `pattern-bg.svg` | SVG | Any | Decorative pattern (optional) |
| `testimonial-placeholder.jpg` | JPG | 400x400px | For testimonials (if added) |

---

## 📝 File Format Recommendations

### Best Practices:
1. **SVG** - For logos, icons, simple graphics (scalable, small file size)
2. **WebP** - For photos (best compression, modern browsers)
3. **JPG** - For photos (fallback, wider compatibility)
4. **PNG** - For logos with transparency (if SVG not available)

### Image Optimization:
- Compress images before adding (use tools like TinyPNG, Squoosh)
- Use WebP format when possible
- Keep file sizes small (< 500KB for hero, < 100KB for cards)

---

## 🔧 How to Use Images in Components

### Using Next.js Image Component (Recommended):

```tsx
import Image from 'next/image';

// Logo example
<Image
  src="/images/logo/logo.svg"
  alt="Alcovia Logo"
  width={200}
  height={60}
  priority // For above-the-fold images
/>

// Hero background example
<Image
  src="/images/hero/hero-background.jpg"
  alt="Hero background"
  fill
  className="object-cover"
  priority
/>

// Offering card example
<Image
  src="/images/offerings/mentorship.jpg"
  alt="Mentorship program"
  width={600}
  height={400}
  className="rounded-lg"
/>
```

### Using Regular img Tag:

```tsx
<img 
  src="/images/logo/logo.svg" 
  alt="Alcovia Logo" 
  className="h-12 w-auto"
/>
```

---

## ✅ Minimum Required Images

**To get started quickly, you only need:**

1. ✅ `public/images/logo/logo.svg` (or logo.png)
2. ⚠️ Optional: `public/images/hero/hero-background.jpg` (if you want a background image)

Everything else is optional and can be added later!

---

## 🎨 Image Content Suggestions

Based on Alcovia's educational focus:

- **Hero:** Diverse group of teenagers (11-16 years) collaborating, learning, or in a workshop
- **Offerings:** 
  - Mentorship: Student with mentor/advisor
  - Workshops: Students in a workshop or seminar
  - Career guidance: Students exploring career options
  - Peer learning: Students working together
- **Style:** Light, bright, professional, diverse, inspiring

---

## 📦 Quick Setup

1. Create the folder structure:
```bash
mkdir -p public/images/{logo,hero,offerings,misc}
```

2. Add your logo as `public/images/logo/logo.svg`

3. Update components to use images (I can help with this!)

---

**Note:** All image paths in Next.js start with `/` (root of public folder), so `/images/logo/logo.svg` refers to `public/images/logo/logo.svg`

