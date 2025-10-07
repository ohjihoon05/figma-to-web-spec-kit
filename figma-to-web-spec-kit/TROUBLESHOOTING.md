# Troubleshooting Guide

## Common Issues & Solutions

### Figma Integration Issues

#### Issue: Cannot Access Figma Assets
**Symptoms:**
- Images not loading from Figma URLs
- "Access denied" errors
- Broken image placeholders

**Solutions:**
1. **Check Figma File Permissions**
   ```
   - Ensure file is set to "Anyone with the link can view"
   - Verify Dev Mode is enabled
   - Check if assets are published to library
   ```

2. **Use Direct Asset URLs**
   ```html
   <!-- Instead of relative paths -->
   <img src="http://localhost:3845/assets/image.png" alt="">
   
   <!-- Use Figma CDN URLs -->
   <img src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/..." alt="">
   ```

3. **Fallback Strategy**
   ```css
   .hero-bg {
       background-image: url('figma-url');
       background-image: url('fallback-url'), url('figma-url');
   }
   ```

#### Issue: Missing Design Elements
**Symptoms:**
- Sections not appearing in generated code
- Incomplete design implementation
- Layout differences from Figma

**Solutions:**
1. **Verify Node IDs**
   ```
   Check Figma URL for correct node-id parameter:
   https://figma.com/design/file-key?node-id=7-505
   ```

2. **Request Specific Sections**
   ```
   "The following section is missing: [Section Name]
   Node ID: 7-651
   Please add this section with proper styling."
   ```

3. **Use Complete Design URL**
   ```
   Share the main design file URL, not individual component URLs
   ```

### Layout & Styling Issues

#### Issue: Container Not Centered
**Symptoms:**
- Content stuck to left side
- Layout not responsive
- Container extends full width

**Solutions:**
1. **Tailwind CSS Classes**
   ```html
   <div class="container mx-auto max-w-7xl px-4">
       <!-- Content -->
   </div>
   ```

2. **Custom CSS**
   ```css
   .container {
       max-width: 1440px;
       margin: 0 auto;
       padding: 0 24px;
   }
   ```

3. **Responsive Breakpoints**
   ```css
   .container {
       width: 100%;
       max-width: 1440px;
       margin: 0 auto;
       padding: 0 1rem;
   }
   
   @media (min-width: 640px) {
       .container { padding: 0 1.5rem; }
   }
   ```

#### Issue: Glassmorphism Effects Not Working
**Symptoms:**
- No blur effect visible
- Transparent backgrounds showing solid
- Browser compatibility issues

**Solutions:**
1. **Check Browser Support**
   ```css
   .glass {
       background: rgba(255, 255, 255, 0.1);
       backdrop-filter: blur(10px);
       
       /* Fallback for unsupported browsers */
       @supports not (backdrop-filter: blur(10px)) {
           background: rgba(255, 255, 255, 0.3);
       }
   }
   ```

2. **Ensure Proper Stacking**
   ```css
   .glass-container {
       position: relative;
       z-index: 10;
       isolation: isolate; /* Creates new stacking context */
   }
   ```

3. **Add Webkit Prefix**
   ```css
   .glass {
       -webkit-backdrop-filter: blur(10px);
       backdrop-filter: blur(10px);
   }
   ```

### Animation Issues

#### Issue: Scroll Animations Not Triggering
**Symptoms:**
- Elements remain invisible
- No fade-in effects
- Intersection Observer not working

**Solutions:**
1. **Check JavaScript Implementation**
   ```javascript
   // Ensure this code is included
   const observer = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
           if (entry.isIntersecting) {
               entry.target.classList.add('visible');
           }
       });
   }, { threshold: 0.1 });
   
   document.addEventListener('DOMContentLoaded', () => {
       const elements = document.querySelectorAll('.fade-in');
       elements.forEach(el => observer.observe(el));
   });
   ```

2. **Verify CSS Classes**
   ```css
   .fade-in {
       opacity: 0;
       transform: translateY(30px);
       transition: opacity 0.6s ease, transform 0.6s ease;
   }
   
   .fade-in.visible {
       opacity: 1;
       transform: translateY(0);
   }
   ```

3. **Debug with Console**
   ```javascript
   console.log('Observer initialized');
   console.log('Elements found:', document.querySelectorAll('.fade-in').length);
   ```

#### Issue: Poor Animation Performance
**Symptoms:**
- Choppy or stuttering animations
- High CPU usage during animations
- Browser lag

**Solutions:**
1. **Use GPU-Accelerated Properties**
   ```css
   /* Good - GPU accelerated */
   .smooth-animation {
       transform: translateX(100px);
       opacity: 0.5;
   }
   
   /* Avoid - causes layout recalculation */
   .avoid {
       left: 100px;
       width: 200px;
   }
   ```

2. **Add will-change Property**
   ```css
   .animating-element {
       will-change: transform, opacity;
   }
   
   /* Remove after animation */
   .animation-complete {
       will-change: auto;
   }
   ```

3. **Reduce Animation Complexity**
   ```css
   /* Simple fade */
   @keyframes fade {
       from { opacity: 0; }
       to { opacity: 1; }
   }
   
   /* Instead of complex transforms */
   @keyframes complex {
       0% { transform: scale(0.5) rotate(180deg) translateX(100px); }
       100% { transform: scale(1) rotate(0deg) translateX(0); }
   }
   ```

### Responsive Design Issues

#### Issue: Mobile Layout Broken
**Symptoms:**
- Content overflowing on mobile
- Text too small to read
- Touch targets too small

**Solutions:**
1. **Mobile-First Approach**
   ```css
   /* Base styles for mobile */
   .hero-title {
       font-size: 2rem;
       line-height: 1.2;
   }
   
   /* Desktop enhancement */
   @media (min-width: 768px) {
       .hero-title {
           font-size: 4rem;
           line-height: 1.1;
       }
   }
   ```

2. **Proper Viewport Meta Tag**
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

3. **Touch-Friendly Interactions**
   ```css
   .button {
       min-height: 44px; /* iOS recommendation */
       padding: 12px 24px;
       touch-action: manipulation;
   }
   ```

### Performance Issues

#### Issue: Slow Page Loading
**Symptoms:**
- Long initial load times
- Poor Lighthouse scores
- High bounce rates

**Solutions:**
1. **Optimize Images**
   ```html
   <!-- Use appropriate formats -->
   <picture>
       <source srcset="image.webp" type="image/webp">
       <img src="image.jpg" alt="Description" loading="lazy">
   </picture>
   ```

2. **Preload Critical Assets**
   ```html
   <head>
       <link rel="preload" href="critical-font.woff2" as="font" type="font/woff2" crossorigin>
       <link rel="preload" href="hero-image.jpg" as="image">
   </head>
   ```

3. **Minimize JavaScript**
   ```javascript
   // Defer non-critical JavaScript
   window.addEventListener('load', () => {
       // Non-critical functionality
   });
   ```

### Browser Compatibility Issues

#### Issue: Features Not Working in Safari
**Symptoms:**
- Backdrop filter not working
- CSS Grid issues
- JavaScript errors

**Solutions:**
1. **Check Can I Use**
   ```
   Visit https://caniuse.com for feature support
   ```

2. **Provide Fallbacks**
   ```css
   .modern-feature {
       background: rgba(255, 255, 255, 0.1);
       backdrop-filter: blur(10px);
   }
   
   @supports not (backdrop-filter: blur(10px)) {
       .modern-feature {
           background: rgba(255, 255, 255, 0.3);
           border: 1px solid rgba(255, 255, 255, 0.2);
       }
   }
   ```

3. **Use Autoprefixer**
   ```css
   /* Input */
   .element {
       display: grid;
   }
   
   /* Output with prefixes */
   .element {
       display: -ms-grid;
       display: grid;
   }
   ```

## Debugging Strategies

### Development Tools

#### Browser DevTools
1. **Elements Panel**
   - Inspect HTML structure
   - Modify CSS in real-time
   - Check computed styles

2. **Console Panel**
   ```javascript
   // Debug animations
   console.log('Animation state:', element.classList.contains('visible'));
   
   // Check performance
   console.time('animation');
   // ... animation code
   console.timeEnd('animation');
   ```

3. **Performance Panel**
   - Identify performance bottlenecks
   - Analyze frame rates
   - Check memory usage

#### Network Analysis
```javascript
// Check resource loading
window.addEventListener('load', () => {
    const resources = performance.getEntriesByType('resource');
    resources.forEach(resource => {
        if (resource.duration > 1000) {
            console.warn('Slow resource:', resource.name, resource.duration);
        }
    });
});
```

### Testing Procedures

#### Progressive Enhancement Testing
1. **Disable JavaScript**
   - Verify core functionality works
   - Check that content is accessible
   - Ensure navigation functions

2. **Test with Slow Connection**
   - Use Chrome DevTools throttling
   - Verify loading states
   - Check fallback content

3. **Accessibility Testing**
   ```bash
   # Use axe-core for automated testing
   npm install -g @axe-core/cli
   axe-core https://your-site.com
   ```

## Emergency Fixes

### Quick CSS Fixes
```css
/* Force GPU acceleration */
.laggy-animation {
    transform: translateZ(0);
    backface-visibility: hidden;
}

/* Fix mobile scroll issues */
body {
    -webkit-overflow-scrolling: touch;
}

/* Fix iOS font rendering */
input, textarea {
    -webkit-appearance: none;
    border-radius: 0;
}
```

### Quick JavaScript Fixes
```javascript
// Fix scroll performance
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            // Scroll handling code
            ticking = false;
        });
        ticking = true;
    }
});

// Fix memory leaks
window.addEventListener('beforeunload', () => {
    // Clean up event listeners
    observer.disconnect();
    // Clear intervals/timeouts
});
```

### Rollback Procedures
1. **Identify Last Working Version**
   ```bash
   git log --oneline
   git checkout [commit-hash]
   ```

2. **Quick Hotfix Deployment**
   ```html
   <!-- Temporarily disable problematic features -->
   <style>
   .problematic-animation {
       animation: none !important;
   }
   </style>
   ```

3. **Emergency Contact List**
   - Project manager: [contact]
   - Technical lead: [contact]
   - Hosting provider: [contact]

---

**Remember**: Always test fixes in a staging environment before applying to production.