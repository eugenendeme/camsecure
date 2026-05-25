---
name: Sentinel Trust
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#444651'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#757682'
  outline-variant: '#c5c5d3'
  surface-tint: '#4059aa'
  primary: '#00236f'
  on-primary: '#ffffff'
  primary-container: '#1e3a8a'
  on-primary-container: '#90a8ff'
  inverse-primary: '#b6c4ff'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#4b1c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#6e2c00'
  on-tertiary-container: '#f39461'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b6c4ff'
  on-primary-fixed: '#00164e'
  on-primary-fixed-variant: '#264191'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#ffdbcb'
  tertiary-fixed-dim: '#ffb691'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#773205'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

The design system is engineered to project unwavering authority, technological sophistication, and urgent humanitarian care. It serves a dual purpose: providing a reliable, secure environment for sensitive data and a high-visibility platform for emergency response.

The aesthetic combines **Corporate Modern** structures with **Glassmorphism** accents. It leverages a high-fidelity interface that feels futuristic yet grounded in utility. The emotional response should be one of "calm urgency"—the user feels the gravity of the situation but is reassured by the professional, systematic efficiency of the tool. Heavy emphasis is placed on "humane technology," where sleek digital interfaces are balanced by empathetic, realistic imagery.

## Colors

The palette is anchored by **Navy (#1E3A8A)** to establish institutional trust and security. **Tech Blue (#3B82F6)** provides a modern, digital energy used for secondary actions and active states. 

**Safety Orange (#F97316)** is reserved strictly for critical path actions—reporting a missing person, emergency alerts, and high-priority status indicators. This ensures that in a high-stress environment, the most vital information is never missed. The background utilizes **Slate Light (#F8FAFC)** to minimize eye strain and provide a "surgical" cleanliness to the data presentation.

## Typography

This design system utilizes a tri-font hierarchy to balance legibility and technical precision. **Hanken Grotesk** is used for headlines, offering a sharp, contemporary feel that communicates progress. **Inter** handles the heavy lifting for body copy and forms, chosen for its exceptional readability in high-density data scenarios.

**JetBrains Mono** is introduced for technical metadata—timestamps, case IDs, and GPS coordinates—to evoke a sense of forensic accuracy and systematic tracking. This monospaced font provides a visual "anchor" for technical details, separating narrative text from data points.

## Layout & Spacing

The system employs a **12-column fluid grid** for desktop and a **4-column grid** for mobile. A strict 8px base unit (the "Sentinel Rhythm") governs all padding and margins to ensure a rigorous, engineered feel.

Layouts should favor high-information density without clutter. Use wide margins (40px) on desktop to frame content, creating a sense of "focus" on the central data. Content cards and modules should use consistent 24px gutters to allow the "Glassmorphism" layers enough room to breathe without overlapping visual noise.

## Elevation & Depth

Depth is achieved through **Tonal Layers** combined with **Subtle Glassmorphism**. 

1.  **Base Layer:** The Slate Light background (#F8FAFC).
2.  **Surface Layer:** Pure white cards with a very soft, diffused shadow (15% opacity Navy tint, 20px blur, 4px Y-offset).
3.  **Overlay Layer:** Semi-transparent panels (White at 80% opacity) with a 12px backdrop blur. This is used for navigation bars and modal headers to maintain context of the underlying data.
4.  **Active Elevation:** When an item is focused or hovered, the shadow intensity increases slightly, and a 1px border of Tech Blue (#3B82F6) at 20% opacity is applied to "illuminate" the selection.

## Shapes

The shape language is **Soft (0.25rem base)**. This provides a professional, "precision-machined" look that feels more modern and technical than fully rounded corners, while remaining more approachable than sharp 0px corners.

- **Standard Elements (Buttons, Inputs):** 4px (0.25rem).
- **Containers (Cards, Modals):** 8px (0.5rem).
- **Featured Modules (Search bars, Image containers):** 12px (0.75rem).

## Components

### Buttons
- **Primary:** Navy (#1E3A8A) background, white text, 4px radius.
- **Critical (Report Missing):** Safety Orange (#F97316) background, white text, bold weight. Use a subtle pulse animation for high-urgency alerts.
- **Ghost:** Tech Blue outline (1px), transparent background.

### Input Fields
Inputs should use a 1px border of Slate 200, moving to a 2px Tech Blue border on focus. Use JetBrains Mono for placeholder text to signal "data entry" mode.

### Cards
Cards are the primary vehicle for "Missing Person" profiles. They must feature a 1:1 aspect ratio for photos, a clear "Status" chip in the top right, and metadata (Last Seen, Location) presented in the data-mono typography style.

### Status Chips
- **Active Search:** Tech Blue background, white text.
- **Found:** Success Green background, white text.
- **Urgent/Critical:** Safety Orange background, white text.

### Additional Components
- **Case Timeline:** A vertical stepper using monospace labels to track the chronological history of a search case.
- **Verification Badge:** A small Navy/Gold icon to indicate "Official CamSecure Verified" information.