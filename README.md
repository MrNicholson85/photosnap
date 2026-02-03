# Photosnap

A Vue 3 photo storytelling platform for photographers and visual storytellers. Frontend-only static website showcasing modern component architecture with slot-based composition.

## Tech Stack

- **Framework**: Vue 3.2.13 (Composition API)
- **Routing**: Vue Router 4 (history mode)
- **Styling**: SCSS with modular architecture
- **Build Tool**: Vue CLI 5
- **Node Version**: 18.x

## Project Structure

```
src/
├── assets/
│   ├── images/          # Image assets (imported via require())
│   └── styles/          # Global SCSS modules
│       ├── variable.scss    # Colors, fonts, breakpoints
│       ├── typography.scss  # Text styles
│       ├── buttons.scss     # Button components
│       └── base.scss        # Base styles
├── components/          # Reusable UI components
│   ├── Hero.vue            # Main hero with named slots
│   ├── ContentImage.vue    # Content + image layout
│   ├── Stories.vue         # Story grid (data-driven)
│   ├── Services.vue        # Feature cards
│   └── PricingTier.vue     # Pricing table with toggle
├── views/              # Page components
│   ├── Home.vue
│   ├── Stories.vue
│   ├── Pricing.vue
│   └── Features.vue
└── router/
    └── index.js        # Route configuration
```

## Architecture Patterns

### Slot-Based Component Design
Components use **named slots** for content injection instead of props:

```vue
<Hero>
  <template #title><h1>Title</h1></template>
  <template #content><p>Content</p></template>
  <template #link><a href="#">CTA</a></template>
  <template #image><img :src="image"/></template>
</Hero>
```

### Responsive Images
- **Desktop**: CSS `background-image` via inline styles
- **Mobile**: Conditional rendering with `v-if="isMobile()"`
- User agent detection for mobile/desktop switching

### Layout Themes
Components support `theme` prop for layout variants:
- `theme="imgLeft"` - Reverses column order
- Default - Image on right side

## Styling System

### SCSS Import Order (Critical)
Global styles imported in `main.js`:
1. `variable.scss` - Design tokens
2. `typography.scss` - Text styles
3. `buttons.scss` - Button components
4. `base.scss` - Base/reset styles

### Breakpoints
```scss
$mobile: 375px
$tablet: 768px
$desktop: 1440px
$container: 1110px
```

### Button Modifiers (BEM)
- `.btn--primary-dark` / `.btn--primary-light`
- `.btn--secondary-dark` / `.btn--secondary-light`

## Development

### Setup
```bash
yarn install
```

### Development Server
```bash
yarn serve
```
Runs on `http://localhost:8080` with hot-reload

### Production Build
```bash
yarn build
```
Outputs to `dist/` directory

### Project Configuration
See [Vue CLI Configuration Reference](https://cli.vuejs.org/config/)

## Features

- 📸 Story showcase with overlay content
- 💰 Pricing page with monthly/yearly toggle
- 🎨 Responsive design (mobile/tablet/desktop)
- 🎯 Feature highlights with icon cards
- 🔄 Theme-based layout switching

## Routes

- `/` - Home page
- `/stories` - Stories showcase
- `/pricing` - Pricing tiers
- `/features` - Feature highlights

## Development Notes

- No backend/API integrations
- No state management library (component-local state only)
- No test suite configured
- Images managed via `require()` imports
