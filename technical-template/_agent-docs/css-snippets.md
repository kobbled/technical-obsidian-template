# CSS Snippets Documentation

## Overview

- **Theme:** Minimal
- **Active Snippets:** 20
- **Snippets with Style Settings:** 5

---

## Snippets by Category

### Layout & Structure

#### MCL Multi Column.css (~558 lines)
**Purpose:** Multi-column layouts via callouts and CSS classes

**Features:**
- `[!multi-column]` callout for flexbox columns
- `[!blank]` / `[!blank-container]` invisible containers
- Float callouts with size options (small/medium/large)
- List columns via cssClass: `two-column-list`, `three-column-list`, `multi-column-list`
- List grid/card layouts via tags: `#mcl/list-column`, `#mcl/list-grid`, `#mcl/list-card`

**Style Settings:** Yes
- Callout column min-width, gap, margin
- Float callout width sizes
- List column ruler styling
- List grid/card background, border, gap

**Dependencies:** Contextual Typography plugin (for tag-based features)

---

#### MCL Wide Views.css (~327 lines)
**Purpose:** Page width control beyond readable line length

**cssClasses:**
- `wide-page` - Full-width notes
- `wide-dataview`, `wide-table`, `wide-callout`, `wide-backlinks` - Selective widening
- `narrow-page` - Force narrow when RLL disabled globally

**Style Settings:** Yes
- Adjustable readable line length max-width
- Wide page/block max-width
- Vault-wide toggles for dataview/table/callout/backlinks

---

### Visual Effects

#### workspace-background.css (~1155 lines)
**Purpose:** Workspace background images and transparency effects

**Features:**
- Background images for workspace, note pages, file explorer
- Multiple presets: Tokyo, Mountain, Cosmic Sky, Deer, Forest, etc.
- Custom URL support for light/dark modes
- Blur, brightness, saturation controls
- Frosted glass menu effects
- File/folder icons in file explorer

**Style Settings:** Yes (extensive)
- Workspace/note/explorer background toggles
- Image selection dropdowns
- Custom URL inputs
- Blur radius, brightness, saturation sliders

---

#### canvas-candy.css (~831 lines)
**Purpose:** Canvas card decorations and effects (by TfTHacker)

**Features:**
- Headers (`cc-header`) and footers (`cc-footer`) with colored borders
- Left/right labels with vertical text
- Card effects: transparent, opaque, filled, gradients
- Shapes: circle, parallelogram
- Rotation: 8 angles (45° to 360°)
- Border styles: none, rounded, squared, dotted, dashed, double, drop shadow
- Image callouts and stickers

**Style Settings:** Yes
- Header/footer opacity
- Label opacity and width
- Gradient opacity values

---

#### carousel.css (~233 lines)
**Purpose:** Pure CSS image slideshow/carousel

**Features:**
- Slide transitions via radio button state
- Navigation indicators (dots)
- Previous/next arrow buttons
- Wrap-around navigation

**Data Attributes:**
- `data-animation-style`
- `data-show-indicators`
- `data-show-buttons`

---

#### stickies.css (~72 lines)
**Purpose:** Sticky note styling for embeds

**cssClasses:**
- `.stickies` (yellow - #FFFF99)
- `.stickies-2` (green - #9fdf9f)
- `.stickies-3` (purple - #deb7e7)
- `.stickies-4` (cyan - #7afcff)
- `.stickies-5` (orange - #ffb470)

**Features:**
- Handwriting fonts (Rage, Segoe Print)
- Box shadow and rotation effect
- Shake animation on hover

---

### Images & Media

#### MCL Gallery Cards.css (~342 lines)
**Purpose:** Image galleries and positioning

**Features:**
- Gallery layouts via `[!<callout>|gallery]` or `cssClass: image-gallery`
- Image float/aside with alt text keywords (left/right)
- Image zoom on click
- Mermaid SVG scaling

**Style Settings:** Yes
- Image border radius, zoom toggle
- Gallery gap, max height/width
- Float/aside margins
- Mermaid scaling

---

#### images.css (~47 lines)
**Purpose:** Image centering and styling

**Patterns:**
- `.centerImg` class or `alt="center"` - Center images
- URL hash `#circle` or `#round` - Circular images
- Banner image styling
- `.no-caption` class - Hide captions

---

### Typography & Formatting

#### minimal_theme_mods.css (~21 lines)
**Purpose:** Blockquote styling modifications
- Blue left border (3px), rounded corners
- Dark background with box shadow

---

#### callouts.css (~18 lines)
**Purpose:** Global callout styling
- 4px left border at full opacity
- Box shadow for depth
- Alt background for content

---

#### headers.css (~7 lines)
**cssClasses:**
- `.dashboard` - Hides inline title
- `.hide-h3` - Hides H3 in embeds

---

#### properties.css (~3 lines)
**Purpose:** Hide properties header
**Pattern:** Class containing "hide-properties"

---

### Tables & Data

#### table.css (~11 lines)
**Purpose:** Table centering and layout
- Centers non-dataview tables
- `.time-of-day` positioning

---

#### bases-cards.css (~200 lines)
**Purpose:** Card layouts for Obsidian Bases plugin
**Source:** Adapted from [obsidian-bases-css-guide](https://github.com/EzraMarks/obsidian-bases-css-guide)

**Property Packing Technique:**
Formula properties prefixed with `packed_` use link hrefs prefixed with `c:` as CSS class selectors (not real links).

**CSS Classes:**

| Class | Purpose |
|-------|---------|
| `title` | Bold text, 2-line clamp, 0.9em |
| `subtitle` | Small text, single line ellipsis |
| `link-icon` | External link icon (bottom-right of text area) |
| `image-overlay` | Absolute positioned over poster (2:3 aspect ratio) |
| `align-top-left`, `align-bottom-right`, etc. | Flexbox corner alignment |
| `stack-vertical` | Vertical flex column |
| `gap-small`, `gap-smaller` | Flex gap spacing |
| `margin-small` | Margin around element |
| `pill` | Rounded badge with overlay colors |
| `pill-watched` | Green pill (completed status) |
| `pill-unwatched` | Amber pill (pending status) |
| `tag` | Accent-colored rounded label |
| `font-smaller` | Smaller font size |

**Spacer Pattern:**
`formula.spacer_` properties are hidden but add card height.

**Theme Support:**
- Light mode: Dark overlay text on semi-transparent background
- Dark mode: Light text on primary background

**Used By:** All media library `.base` files

---

### Diagrams & Charts

#### mermaid.css (~10 lines)
**Purpose:** Mermaid diagram styling
- Overflow/auto-scroll
- Centered diagrams
- Responsive SVG scaling

---

#### heatmap_custom_styling.css (~47 lines)
**Purpose:** Heatmap Calendar plugin styling
- Overflow handling for dataviewjs blocks
- Hover tooltip styling
- `.heatmap-page` specific sizing

---

### UI Components

#### buttons.css (~110 lines)
**Purpose:** Custom styled navigation buttons
- Dark background (#323953), cream text (#E8DDB5)
- Rotation effects
- Icon symbols (pencil, envelope, checkmark)
- Mobile responsive adjustments

---

#### clock.css (~24 lines)
**Purpose:** Embedded digital clock styling
- Transparent background
- Hidden below 800px width
- Hidden in edit mode

---

#### time_of_day.css
**Purpose:** Absolute positioning for time-of-day display elements

---

#### view.css
**Purpose:** Issue tracker UI styling
- Status colors for issue states
- Label chip styling
- Search bar styling
- Issue list borders and hover effects

---

## Style Settings Summary

Snippets that integrate with the Style Settings plugin:

1. **MCL Gallery Cards.css** - Image settings
2. **MCL Multi Column.css** - Column/grid settings
3. **MCL Wide Views.css** - Width settings
4. **workspace-background.css** - Background images/effects
5. **canvas-candy.css** - Canvas decorations

Access via: Settings → Style Settings → (snippet name)
