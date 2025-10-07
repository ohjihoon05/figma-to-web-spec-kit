# Implementation Guide

## Phase 1: Project Setup (5-10 minutes)

### Step 1: Environment Preparation
1. **Create project directory**
   ```bash
   mkdir project-name
   cd project-name
   ```

2. **Analyze Figma design**
   - Open Figma file in Dev Mode
   - Identify all sections and components
   - Note special interactions and animations
   - Export any custom assets if needed

3. **Choose implementation approach**
   - **Single HTML file**: For simple landing pages
   - **Component-based**: For complex applications
   - **Framework integration**: For existing projects

### Step 2: Initial Setup
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Title</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
    
    <style>
        /* Custom CSS will go here */
    </style>
</head>
<body class="bg-black text-white font-inter">
    <div class="container mx-auto max-w-7xl">
        <!-- Content will go here -->
    </div>
    
    <script>
        /* JavaScript will go here */
    </script>
</body>
</html>
```

## Phase 2: Layout Structure (15-20 minutes)

### Step 1: Create Semantic HTML Structure
```html
<body>
    <!-- Navigation -->
    <nav class="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md">
        <!-- Navigation content -->
    </nav>
    
    <!-- Main Content -->
    <main class="container mx-auto max-w-7xl">
        <!-- Hero Section -->
        <section class="hero min-h-screen flex items-center">
            <!-- Hero content -->
        </section>
        
        <!-- Content Sections -->
        <section class="about py-20">
            <!-- About content -->
        </section>
        
        <section class="projects py-20">
            <!-- Projects content -->
        </section>
        
        <!-- Additional sections -->
    </main>
    
    <!-- Footer -->
    <footer class="bg-gray-900 py-12">
        <!-- Footer content -->
    </footer>
</body>
```

### Step 2: Add Basic Styling Framework
```css
<style>
    /* CSS Custom Properties */
    :root {
        --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        --gradient-accent: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        --glass-bg: rgba(255, 255, 255, 0.1);
        --glass-border: rgba(255, 255, 255, 0.2);
    }
    
    /* Smooth scrolling */
    html {
        scroll-behavior: smooth;
    }
    
    /* Font family */
    body {
        font-family: 'Inter', sans-serif;
    }
    
    /* Glass morphism utility */
    .glass {
        background: var(--glass-bg);
        backdrop-filter: blur(10px);
        border: 1px solid var(--glass-border);
    }
    
    /* Animation utilities */
    .fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }
</style>
```

## Phase 3: Content Implementation (30-45 minutes)

### Step 1: Hero Section
```html
<section class="hero relative min-h-screen flex items-center overflow-hidden">
    <!-- Background elements -->
    <div class="absolute inset-0 z-0">
        <img src="[FIGMA_BACKGROUND_URL]" alt="" class="w-full h-full object-cover">
    </div>
    
    <!-- Content -->
    <div class="relative z-10 max-w-4xl">
        <h1 class="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            Your Main
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Headline
            </span>
        </h1>
        
        <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            Your compelling subtitle that explains what you do and why it matters.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4">
            <button class="glass rounded-full px-8 py-4 font-semibold transition-all hover:scale-105">
                Primary CTA
            </button>
            <button class="border border-gray-600 rounded-full px-8 py-4 font-semibold transition-all hover:border-gray-400">
                Secondary CTA
            </button>
        </div>
    </div>
</section>
```

### Step 2: Content Sections
```html
<section class="about py-20 fade-in">
    <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
            <h2 class="text-4xl font-bold mb-6">About Section</h2>
            <p class="text-gray-300 text-lg leading-relaxed mb-6">
                Your about content goes here. Make it engaging and informative.
            </p>
            <ul class="space-y-3">
                <li class="flex items-center text-gray-300">
                    <span class="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Feature or benefit point
                </li>
                <!-- More list items -->
            </ul>
        </div>
        
        <div class="relative">
            <img src="[FIGMA_IMAGE_URL]" alt="About image" class="rounded-lg shadow-2xl">
            <!-- Decorative elements -->
            <div class="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-60"></div>
        </div>
    </div>
</section>
```

### Step 3: Interactive Components
```html
<!-- Project Cards -->
<section class="projects py-20">
    <h2 class="text-4xl font-bold text-center mb-12">Projects</h2>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="project-card glass rounded-lg p-6 transition-all hover:scale-105 cursor-pointer">
            <img src="[FIGMA_PROJECT_URL]" alt="Project" class="w-full h-48 object-cover rounded-lg mb-4">
            <h3 class="text-xl font-semibold mb-2">Project Title</h3>
            <p class="text-gray-300 mb-4">Project description goes here.</p>
            <div class="flex flex-wrap gap-2">
                <span class="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">React</span>
                <span class="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm">CSS</span>
            </div>
        </div>
        <!-- More project cards -->
    </div>
</section>
```

## Phase 4: Advanced Features (20-30 minutes)

### Step 1: Scroll Animations
```javascript
<script>
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.addEventListener('DOMContentLoaded', () => {
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(el => observer.observe(el));
    });
</script>
```

### Step 2: Interactive Elements
```javascript
// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Mobile menu toggle
const menuButton = document.querySelector('[data-menu-toggle]');
const mobileMenu = document.querySelector('[data-mobile-menu]');

if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Project card interactions
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});
```

### Step 3: Advanced Animations
```css
/* Advanced animation keyframes */
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}

@keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
    50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
}

@keyframes slide-in-left {
    from { opacity: 0; transform: translateX(-50px); }
    to { opacity: 1; transform: translateX(0); }
}

/* Apply animations */
.floating { animation: float 6s ease-in-out infinite; }
.glow { animation: pulse-glow 3s ease-in-out infinite; }
.slide-left { animation: slide-in-left 0.8s ease-out; }
```

## Phase 5: Optimization (10-15 minutes)

### Step 1: Performance Optimization
```html
<!-- Preload critical assets -->
<link rel="preload" href="[CRITICAL_FONT_URL]" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="[HERO_IMAGE_URL]" as="image">

<!-- Optimize images -->
<img src="[IMAGE_URL]" 
     alt="Description" 
     loading="lazy"
     decoding="async"
     width="800" 
     height="600">
```

### Step 2: Accessibility Improvements
```html
<!-- Skip navigation -->
<a href="#main-content" class="skip-link sr-only focus:not-sr-only">
    Skip to main content
</a>

<!-- ARIA labels -->
<nav aria-label="Main navigation">
    <ul role="list">
        <li><a href="#home" aria-current="page">Home</a></li>
        <li><a href="#about">About</a></li>
    </ul>
</nav>

<!-- Screen reader utilities -->
<style>
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }
    
    .sr-only:focus {
        position: static;
        width: auto;
        height: auto;
        padding: 0.5rem 1rem;
        margin: 0;
        overflow: visible;
        clip: auto;
        white-space: normal;
    }
</style>
```

### Step 3: SEO Optimization
```html
<head>
    <!-- Primary Meta Tags -->
    <title>Your Page Title</title>
    <meta name="description" content="Your page description">
    <meta name="keywords" content="relevant, keywords, here">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://yoursite.com/">
    <meta property="og:title" content="Your Page Title">
    <meta property="og:description" content="Your page description">
    <meta property="og:image" content="https://yoursite.com/image.jpg">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://yoursite.com/">
    <meta property="twitter:title" content="Your Page Title">
    <meta property="twitter:description" content="Your page description">
    <meta property="twitter:image" content="https://yoursite.com/image.jpg">
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Your Site Name",
        "url": "https://yoursite.com"
    }
    </script>
</head>
```

## Phase 6: Testing & QA (15-20 minutes)

### Step 1: Cross-browser Testing
- Test in Chrome, Firefox, Safari, Edge
- Verify responsive behavior
- Check animation performance
- Test interactive elements

### Step 2: Performance Testing
```javascript
// Performance monitoring
window.addEventListener('load', () => {
    const perfData = performance.getEntriesByType('navigation')[0];
    console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart);
    console.log('DOM Content Loaded:', perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart);
});
```

### Step 3: Accessibility Testing
- Use browser dev tools accessibility audit
- Test keyboard navigation
- Verify color contrast ratios
- Test with screen reader

## Common Implementation Patterns

### Responsive Grid System
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- Grid items -->
</div>
```

### Modal Implementation
```html
<div id="modal" class="fixed inset-0 z-50 hidden bg-black/50 backdrop-blur-sm">
    <div class="flex items-center justify-center min-h-screen p-4">
        <div class="glass rounded-lg p-6 max-w-md w-full">
            <h3 class="text-xl font-bold mb-4">Modal Title</h3>
            <p class="text-gray-300 mb-6">Modal content goes here.</p>
            <button onclick="closeModal()" class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
                Close
            </button>
        </div>
    </div>
</div>
```

### Form Implementation
```html
<form class="space-y-6" onsubmit="handleSubmit(event)">
    <div>
        <label for="name" class="block text-sm font-medium mb-2">Name</label>
        <input type="text" id="name" name="name" required
               class="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none">
    </div>
    
    <button type="submit" 
            class="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold transition-all">
        Submit
    </button>
</form>
```

---

**Next Steps**: After implementation, proceed to the quality assurance checklist and performance optimization guidelines.