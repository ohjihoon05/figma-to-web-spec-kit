# Design Patterns

## 2024-2025 Design Trends

### Glassmorphism
Modern transparent glass-like UI elements with blur effects.

#### Implementation
```css
.glass-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

/* Dark mode variant */
.glass-card-dark {
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Fallback for unsupported browsers */
@supports not (backdrop-filter: blur(10px)) {
    .glass-card {
        background: rgba(255, 255, 255, 0.3);
    }
}
```

#### HTML Structure
```html
<div class="glass-card p-6 rounded-lg">
    <h3 class="text-xl font-semibold mb-4">Glass Card Title</h3>
    <p class="text-gray-300">Content with subtle transparency effect.</p>
</div>
```

### Gradient Animations
Dynamic color transitions and animated backgrounds.

#### CSS Implementation
```css
.gradient-bg {
    background: linear-gradient(-45deg, #667eea, #764ba2, #4facfe, #00f2fe);
    background-size: 400% 400%;
    animation: gradient-shift 15s ease infinite;
}

@keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

/* Text gradients */
.gradient-text {
    background: linear-gradient(135deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
```

#### Advanced Gradients
```css
/* Multi-stop gradients */
.complex-gradient {
    background: linear-gradient(
        135deg,
        #667eea 0%,
        #764ba2 25%,
        #f093fb 50%,
        #f5576c 75%,
        #4facfe 100%
    );
}

/* Radial gradients */
.radial-gradient {
    background: radial-gradient(
        circle at 30% 40%,
        rgba(120, 119, 198, 0.3),
        rgba(255, 255, 255, 0.1)
    );
}
```

### Neomorphism
Soft, extruded design elements that appear to emerge from the background.

#### Light Theme
```css
.neomorphic-light {
    background: #e0e5ec;
    border-radius: 20px;
    box-shadow: 
        20px 20px 60px #bebebe,
        -20px -20px 60px #ffffff;
}

.neomorphic-pressed {
    box-shadow: 
        inset 20px 20px 60px #bebebe,
        inset -20px -20px 60px #ffffff;
}
```

#### Dark Theme
```css
.neomorphic-dark {
    background: #2d3142;
    border-radius: 20px;
    box-shadow: 
        20px 20px 60px #1a1d29,
        -20px -20px 60px #40455b;
}
```

### Micro-interactions
Subtle animations that provide feedback and enhance user experience.

#### Button Interactions
```css
.interactive-button {
    background: linear-gradient(135deg, #667eea, #764ba2);
    border: none;
    border-radius: 50px;
    padding: 12px 24px;
    color: white;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(0);
}

.interactive-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
}

.interactive-button:active {
    transform: translateY(0);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}
```

#### Card Hover Effects
```css
.hover-card {
    transition: all 0.3s ease;
    cursor: pointer;
}

.hover-card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Tilt effect */
.tilt-card {
    transition: transform 0.3s ease;
}

.tilt-card:hover {
    transform: perspective(1000px) rotateX(5deg) rotateY(5deg);
}
```

## Layout Patterns

### Hero Sections

#### Full-Screen Hero
```html
<section class="hero min-h-screen flex items-center justify-center relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 z-0">
        <img src="hero-bg.jpg" alt="" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
    
    <!-- Content -->
    <div class="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Your Amazing Headline
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 mb-8">
            Compelling subtitle that explains your value proposition.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="interactive-button">Primary CTA</button>
            <button class="glass-card px-8 py-4 rounded-full">Secondary CTA</button>
        </div>
    </div>
    
    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
    </div>
</section>
```

#### Split Hero
```html
<section class="hero min-h-screen grid md:grid-cols-2 items-center">
    <div class="order-2 md:order-1 px-8">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Design meets <span class="gradient-text">Innovation</span>
        </h1>
        <p class="text-lg text-gray-300 mb-8">
            Creating digital experiences that inspire and engage users.
        </p>
        <button class="interactive-button">Get Started</button>
    </div>
    
    <div class="order-1 md:order-2">
        <img src="hero-image.png" alt="Hero" class="w-full h-auto">
    </div>
</section>
```

### Grid Systems

#### Responsive Grid
```css
.responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
}

/* Specific breakpoints */
.custom-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

@media (min-width: 640px) {
    .custom-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }
}

@media (min-width: 1024px) {
    .custom-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }
}
```

#### Masonry Layout
```css
.masonry {
    columns: 1;
    column-gap: 1rem;
}

@media (min-width: 640px) {
    .masonry { columns: 2; }
}

@media (min-width: 1024px) {
    .masonry { columns: 3; }
}

.masonry-item {
    break-inside: avoid;
    margin-bottom: 1rem;
}
```

## Component Patterns

### Navigation

#### Glassmorphism Navigation
```html
<nav class="fixed top-0 w-full z-50 glass-card border-0 border-b border-white/20">
    <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
                <img src="logo.svg" alt="Logo" class="h-8 w-auto">
            </div>
            
            <div class="hidden md:block">
                <div class="flex items-center space-x-8">
                    <a href="#home" class="nav-link">Home</a>
                    <a href="#about" class="nav-link">About</a>
                    <a href="#projects" class="nav-link">Projects</a>
                    <a href="#contact" class="nav-link">Contact</a>
                </div>
            </div>
            
            <button class="md:hidden" id="mobile-menu-button">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
    </div>
</nav>
```

```css
.nav-link {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
    position: relative;
}

.nav-link:hover {
    color: white;
    background: rgba(255, 255, 255, 0.1);
}

.nav-link.active {
    color: white;
    background: rgba(255, 255, 255, 0.2);
}
```

### Cards

#### Project Cards
```html
<div class="project-card glass-card rounded-lg overflow-hidden group cursor-pointer">
    <div class="relative overflow-hidden">
        <img src="project.jpg" alt="Project" class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    
    <div class="p-6">
        <h3 class="text-xl font-semibold mb-2">Project Title</h3>
        <p class="text-gray-300 mb-4">Brief description of the project and its key features.</p>
        
        <div class="flex flex-wrap gap-2 mb-4">
            <span class="tech-tag">React</span>
            <span class="tech-tag">TypeScript</span>
            <span class="tech-tag">Tailwind</span>
        </div>
        
        <div class="flex items-center justify-between">
            <button class="text-blue-400 hover:text-blue-300 transition-colors">
                View Project →
            </button>
            <div class="flex space-x-2">
                <a href="#" class="text-gray-400 hover:text-white transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <!-- GitHub icon -->
                    </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <!-- External link icon -->
                    </svg>
                </a>
            </div>
        </div>
    </div>
</div>
```

```css
.tech-tag {
    background: rgba(59, 130, 246, 0.2);
    color: #93c5fd;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    border: 1px solid rgba(59, 130, 246, 0.3);
}
```

### Forms

#### Modern Contact Form
```html
<form class="glass-card p-8 rounded-lg max-w-md mx-auto">
    <h2 class="text-2xl font-bold mb-6 text-center">Get In Touch</h2>
    
    <div class="mb-6">
        <label for="name" class="block text-sm font-medium mb-2">Name</label>
        <input type="text" id="name" name="name" required
               class="modern-input">
    </div>
    
    <div class="mb-6">
        <label for="email" class="block text-sm font-medium mb-2">Email</label>
        <input type="email" id="email" name="email" required
               class="modern-input">
    </div>
    
    <div class="mb-6">
        <label for="message" class="block text-sm font-medium mb-2">Message</label>
        <textarea id="message" name="message" rows="4" required
                  class="modern-input resize-none"></textarea>
    </div>
    
    <button type="submit" class="interactive-button w-full">
        Send Message
    </button>
</form>
```

```css
.modern-input {
    width: 100%;
    padding: 0.75rem 1rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0.5rem;
    color: white;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.modern-input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    background: rgba(255, 255, 255, 0.1);
}

.modern-input::placeholder {
    color: rgba(255, 255, 255, 0.5);
}
```

## Animation Patterns

### Entrance Animations
```css
/* Fade in from bottom */
.fade-up {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-up.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Scale in */
.scale-in {
    opacity: 0;
    transform: scale(0.9);
    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.scale-in.visible {
    opacity: 1;
    transform: scale(1);
}

/* Slide in from left */
.slide-left {
    opacity: 0;
    transform: translateX(-50px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-left.visible {
    opacity: 1;
    transform: translateX(0);
}
```

### Staggered Animations
```javascript
// JavaScript for staggered entrance
const staggerElements = document.querySelectorAll('.stagger-item');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.stagger-child');
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('visible');
                }, index * 100);
            });
        }
    });
});

staggerElements.forEach(el => observer.observe(el));
```

### Parallax Scrolling
```css
.parallax-container {
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    perspective: 1px;
}

.parallax-element {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.parallax-back {
    transform: translateZ(-1px) scale(2);
}

.parallax-base {
    transform: translateZ(0);
}
```

```javascript
// Smooth parallax with requestAnimationFrame
let ticking = false;

function updateParallax() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelectorAll('.parallax-bg');
    
    parallax.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
    
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
    }
});
```

## Accessibility Patterns

### Focus Management
```css
/* Custom focus styles */
.focus-ring:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
}

/* Skip navigation */
.skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: #000;
    color: white;
    padding: 8px;
    text-decoration: none;
    transition: top 0.3s;
}

.skip-link:focus {
    top: 6px;
}
```

### Screen Reader Friendly
```html
<!-- Semantic structure -->
<main id="main-content">
    <section aria-labelledby="projects-heading">
        <h2 id="projects-heading">Our Projects</h2>
        <!-- Content -->
    </section>
</main>

<!-- Button with proper labeling -->
<button aria-label="Open navigation menu" 
        aria-expanded="false" 
        aria-controls="mobile-menu">
    <span class="sr-only">Menu</span>
    <svg><!-- Icon --></svg>
</button>
```

---

**Note**: These patterns should be adapted to your specific design requirements and branding guidelines.