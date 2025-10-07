# Examples

This directory contains practical examples of Figma-to-web implementations using the spec kit guidelines.

## Available Examples

### 1. Web3 Studio (Complete)
- **Location**: `web3-studio/`
- **Description**: Full implementation of the Web3 product studio website
- **Features**: Glassmorphism, gradient animations, scroll effects
- **Figma URL**: https://www.figma.com/design/5DkZv3LXhxR5mS7bIZbV4E/
- **Technologies**: HTML, Tailwind CSS, Vanilla JavaScript

### 2. Basic Landing Page (Template)
- **Location**: `basic-landing/`
- **Description**: Simple landing page template with modern design patterns
- **Features**: Hero section, features grid, contact form
- **Use Case**: Quick startup/product launches

### 3. Portfolio Site (Template)
- **Location**: `portfolio-site/`
- **Description**: Personal portfolio template for designers/developers
- **Features**: Project showcase, about section, contact integration
- **Use Case**: Personal branding and portfolio display

## Example Structure

Each example includes:
- `index.html` - Main implementation file
- `README.md` - Specific implementation notes
- `assets/` - Any local assets (if applicable)
- `figma-reference/` - Screenshots and design references

## Using Examples

1. **Copy Template**
   ```bash
   cp -r examples/basic-landing my-project
   cd my-project
   ```

2. **Customize Content**
   - Update text content
   - Replace placeholder images
   - Modify color scheme
   - Adjust layout as needed

3. **Test Implementation**
   - Open in browser
   - Test responsive behavior
   - Verify animations
   - Check accessibility

## Command Examples

### Convert Web3 Studio Design
```
Figma URL: https://www.figma.com/design/5DkZv3LXhxR5mS7bIZbV4E/

Create a complete Web3 product studio website with:
- Single HTML file implementation
- Figma asset URLs for all images
- Tailwind CSS + custom glassmorphism effects
- Centered container (max-width: 1440px)
- Scroll animations for all sections
- Interactive carousel and navigation
- 2024-2025 design trends (gradients, glass effects)
- Full responsive design
- All sections from Figma included
```

### Create Basic Landing Page
```
Convert this Figma design to a landing page:
[FIGMA_URL]

Requirements:
- Hero with CTA
- Features section (3-column grid)
- Testimonials carousel
- Contact form with validation
- Footer with social links
- Mobile-first responsive design
- Loading animations
- Modern glassmorphism styling
```

### Build Portfolio Site
```
Create a portfolio website from Figma design:
[FIGMA_URL]

Sections needed:
- Hero introduction
- About with photo
- Projects gallery with filtering
- Skills visualization
- Contact form
- Social media integration

Features:
- Project detail modals
- Smooth scroll navigation
- Intersection observer animations
- Dark theme with glass effects
```

## Best Practices Applied

### Code Quality
- Semantic HTML structure
- Organized CSS with custom properties
- Efficient JavaScript with modern APIs
- Accessibility compliance (WCAG 2.1 AA)

### Performance
- Optimized asset loading
- Efficient animations
- Minimal JavaScript footprint
- Progressive enhancement

### Design Implementation
- Pixel-perfect Figma reproduction
- Consistent design system
- Responsive breakpoints
- Modern UI patterns

## Contributing Examples

To add a new example:

1. **Create Directory Structure**
   ```
   examples/your-example/
   ├── index.html
   ├── README.md
   └── figma-reference/
       └── design-screenshot.png
   ```

2. **Follow Spec Kit Guidelines**
   - Use specified HTML structure
   - Implement design patterns from DESIGN_PATTERNS.md
   - Include all accessibility features
   - Add performance optimizations

3. **Document Implementation**
   - Add detailed README
   - Include command template used
   - Note any special considerations
   - Provide screenshot comparisons

4. **Test Thoroughly**
   - Cross-browser compatibility
   - Responsive behavior
   - Performance metrics
   - Accessibility compliance

## Common Adaptations

### Color Scheme Changes
```css
:root {
    /* Update primary colors */
    --color-primary: #your-color;
    --color-secondary: #your-color;
    --gradient-primary: linear-gradient(135deg, #color1, #color2);
}
```

### Typography Updates
```css
/* Replace font imports */
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;700&display=swap');

body {
    font-family: 'YourFont', sans-serif;
}
```

### Layout Modifications
```css
/* Adjust container width */
.container {
    max-width: 1200px; /* Instead of 1440px */
}

/* Modify grid layouts */
.features-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

---

**Remember**: These examples are starting points. Customize them to match your specific design requirements and brand guidelines.