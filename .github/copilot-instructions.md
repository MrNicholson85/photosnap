# Photosnap - AI Coding Instructions

## Project Overview
Vue 3 Composition API photo storytelling platform built with Vue CLI, Vue Router, and SCSS. Frontend-only static site with no backend or API integrations.

## Tech Stack
- **Framework**: Vue 3.2.13 with Composition API
- **Routing**: Vue Router 4 (history mode)
- **Styling**: SCSS with modular architecture (variable, typography, buttons, base)
- **Build**: Vue CLI 5 (Node 24.x)
- **Commands**: `yarn serve` (dev), `yarn build` (production)

## Architecture Patterns

### Component Communication via Slots
All major UI components use **named slots** for content injection, not props. This is the core pattern:

```vue
<!-- Parent usage -->
<Hero>
  <template #title><h1>Title</h1></template>
  <template #content><p>Content</p></template>
  <template #link><a href="#">Link</a></template>
  <template #image><img :src="img"/></template>
</Hero>
```

Key slot-based components: [Hero.vue](src/components/Hero.vue), [ContentImage.vue](src/components/ContentImage.vue), [HeroInternal.vue](src/components/HeroInternal.vue)

### Responsive Image Handling
- Desktop: CSS `background-image` via inline styles
- Mobile: Conditional rendering with `v-if="isMobile()"`
- Mobile detection: User agent check (repeated in components, not centralized)

```vue
<div class="hero__mobileImg" v-if="isMobile()" :style="{ backgroundImage: `url(${image})` }"></div>
```

### Layout Theme System
Components accept `theme` prop for layout variants:
- `theme="imgLeft"`: Reverses column order (see [ContentImage.vue](src/components/ContentImage.vue#L6-L18))
- Default: Image on right side
- Applied via dynamic classes: `:class="{imgLeft: theme === 'imgLeft'}"`

### Data-Driven Components
[Stories.vue](src/components/Stories.vue) and [Services.vue](src/components/Services.vue) iterate over local data arrays:
- Stories grid: 4 featured stories with overlay content
- Services: Feature cards (responsive, no-limit, embed)
- Uses `v-for` with data from component's `data()` function

## Styling Architecture

### SCSS Import Order (Critical)
Global styles imported in [main.js](src/main.js#L3-L6):
1. `variable.scss` - colors, fonts, breakpoints
2. `typography.scss` 
3. `buttons.scss`
4. `base.scss`

Component styles: `<style lang="scss">` with `@import '../assets/styles/variable.scss'`

### Breakpoints & Responsive
```scss
$container: 1110px;
$desktop: 1440px;
$tablet: 768px;
$mobile: 375px;
```

Mobile-first approach with `@media(min-width: $tablet)` and `@media(min-width: $desktop)`

### Color System
- Gradient accent: `$mainAccent` (linear gradient for CTAs)
- Base colors: `$pureBlack`, `$pureWhite`, `$lightGrey`
- See [variable.scss](src/assets/styles/variable.scss) for full palette

### Button Modifiers
BEM-style button classes in [buttons.scss](src/assets/styles/buttons.scss):
- `.btn--primary-dark` / `.btn--primary-light`
- `.btn--secondary-dark` / `.btn--secondary-light`
- Hover states change background to `$lightGrey`

## Page Structure

### Router Configuration
All routes eager-loaded in [router/index.js](src/router/index.js):
- `/` → Home
- `/stories` → Stories
- `/pricing` → Pricing
- `/features` → Features

### App Layout
[App.vue](src/App.vue) provides persistent layout:
- `<Nav/>` at top
- `<router-view/>` for page content
- `<Footer/>` at bottom
- Mobile: 74px top padding, Desktop: no padding

### View Composition
Views compose reusable components with slot content:
- [Home.vue](src/views/Home.vue): Hero + 2x ContentImage + Stories + Services
- [Pricing.vue](src/views/Pricing.vue): HeroInternal + PricingTier + CompareServices + ctaBanner

## Image Management
Images imported with `require()` in component `data()`:
```javascript
data() {
  return {
    heroImage: require('../assets/images/hero.jpg')
  }
}
```
Located in `src/assets/images/` directory

## Development Notes
- No test suite configured
- No linting setup visible
- No TypeScript (uses jsconfig.json for path aliases)
- No state management (Vuex/Pinia) - all state is component-local
- Mobile detection duplicated across components - consider extracting to composable if refactoring
