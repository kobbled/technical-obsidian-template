# technical-obsidian-template
Base template for creating a vault for technical/scientific notes. It includes specific formatting, and specific use cases,
as well as examples for Temaples, and dataviews:

## Install

* Download [Obsidian](https://obsidian.md/)
* Clone the repository `git clone https://github.com/kobbled/technical-obsidian-template`
* Open the **technical-template** folder in obsidian as a new vault.
* Enable Community plugins

## Homepage

![](img/homepage.PNG)

## Features

### Periodic (Daily) Notes
Full periodic notes system with Daily, Weekly, and Monthly templates.
- **Daily:** Date-based naming (`YYYY-MM-DD`), linked to week/month notes
- **Weekly:** Aggregates daily data with embedded section transclusions (`![[{{day}}#Quick Notes]]`)
- **Monthly:** Dashboard view with heatmaps and task summaries
- Navigation buttons between days/weeks/months
- Plugins: Periodic Notes, Calendar

### Task/Habit Tracking
Comprehensive habit tracking system in Daily Template with 18+ trackable activities:
- **Exercise:** weights, cardio
- **Music:** guitar, piano, singing, recording
- **Art:** drawing, 3D modelling
- **Maker:** coding, electronics, 3D printing, modding
- **Reading:** books, articles
- **Media:** video games, movies/TV, TTRPGs

Features:
- Toggle switches for each habit (Meta Bind)
- Conditional time sliders appear when habit is toggled on (JS Engine + Meta Bind)
- Productivity and mood tracking (0-10 progress bars)
- Weekly aggregation tables showing habit completion per day

### Heatmap Tracking
GitHub-style activity heatmaps in Monthly Template using Heatmap Calendar plugin.
- Separate heatmaps for: Exercise, Music, Art, Reading, Maker categories
- DataviewJS queries filter daily notes by month and habit flags
- Custom styling via `heatmap_custom_styling.css`
- Visual year-at-a-glance progress tracking

### Post-it Notes
Sticky note styling for embedded content via `stickies.css`.
- 5 color variants: yellow, green, purple, cyan, orange
- Handwriting fonts (Rage, Segoe Print)
- Hover shake animation
- Applied via cssClass: `.stickies`, `.stickies-2` through `.stickies-5`

### Image Styling & Tools
Multiple image manipulation and display options:
- **Centering:** `.centerImg` class or `alt="center"`
- **Shapes:** URL hash `#circle` or `#round` for circular images
- **Galleries:** `[!callout|gallery]` or `cssClass: image-gallery` (MCL Gallery Cards)
- **Float/Aside:** Alt text keywords for positioning
- **Zoom:** Click-to-zoom via Image Toolkit plugin
- **Carousel:** Pure CSS slideshows via `carousel.css`
- **Banners:** Top-of-note images via Banners plugin
- **Processing:** Image Converter for resize/compress/convert

### Media Library Databases Using Bases
Obsidian Bases plugin for database-style views of media collections. See [bases-databases.md](_agent-docs/bases-databases.md) for full documentation.

**14 Active Databases:**

| Category | Databases | Source Folder |
|----------|-----------|---------------|
| Movies | 4 (All, Watchlist, Ranking, Recent) | `libraries/movies` |
| TV Shows | 1 | `libraries/tv` |
| Books | 1 | `libraries/books` |
| Video Games | 7 (All, Playing, On-Hold, Backlog, Rankings, PC Installed, Steam) | `libraries/video-games` |
| Board/TTRPG | 2 | `libraries/games` |

**Features:**
- Card layouts via `bases-cards.css` with property packing technique
- Image overlays with positioned pills and tags
- Status indicators (watched/played/owned)
- View-level filters for status-based views (`status == ["[[playing]]"]`)
- Dual views: Cards (visual) and Table (data) per database
- Poster images from external APIs (OMDb, Google Books, IGDB, BGG)

### Collections Management with Bases
Extended Bases usage for non-media collections:
- Software/Apps catalog
- Subscriptions tracking
- Beer collection

### API-Powered Media Entry
QuickAdd macros with custom scripts fetch metadata from external APIs:
- **Books:** Google Books API → title, authors, ISBN, cover, page count
- **Movies/TV:** OMDb API → cast, director, ratings, poster, plot
- **Video Games:** IGDB API (Twitch OAuth) → genres, platforms, cover art, developer
- Automatic template population with fetched data
- User prompts for personal ratings and status

### Zotero Paper Import
Academic reference management via Zotero Integration plugin.
- Paper Template with Nunjucks/Jinja2 syntax
- Imports: title, authors, DOI, citekey, abstract, annotations
- Status/priority extraction from Zotero "extra" field
- Linked to Zotero desktop application

### Grocery List Manager
Complete grocery workflow:
- Grocery List Template with categorized sections (Produce, Meat, Dairy, etc.)
- Archive button triggers QuickAdd command
- `archiveGroceryList.js` Templater script copies to dated backup
- Archive stored in `Personal/Cooking/Groceries Archive/`

### Cooklang Recipes Integration
Recipe format support via Cooklang plugin.
- Cooklang syntax for ingredients and steps
- Recipe Template for manual entry
- Stored in `Personal/Cooking/recipes/`

### Software Catalog System
Comprehensive tracking of installed software:
- Desktop apps (Apps Template) with 18 type categories
- Mobile apps (Phone Apps Template) with OS tracking
- Usage frequency scale (0-4)
- Installation status

### Subscription Tracker
Financial tracking for recurring costs:
- Categories: Computer, Phone, Internet, Social, Media, Home, Car, Courses
- Fields: cost, renewal date, termination date, payment term, account charged
- Active/inactive status

### External Cloud Folder Linking
File protocol links to local/cloud storage via utility scripts:
- `getCurrFolder.js` - Calculate parent folder paths
- `getRelFileLink.js` - Generate `file://` links with URL encoding
- Supports relative paths from current note location

### Obsidian Web Clipper AI Imports
6 web clipper configurations for automated note creation:

#### Untappd Beer Clipper
- **Trigger:** `untappd.com/b/`
- **Captures:** brewery, ABV, IBU, style, rating, label image
- **Path:** `Personal/Food & Drink/Beer`

#### BoardGameGeek Clipper
- **Trigger:** `boardgamegeek.com/boardgame/*`
- **Captures:** publisher, year, rating, description, image
- **Path:** `Personal/Media/libraries/games`

#### Medium Article Clipper
- **Trigger:** `medium.com/`, `*.medium.com/`
- **Captures:** full article content, author, published date, reading time
- **Path:** `Clippings/Medium`

#### Adafruit Product Clipper
- **Trigger:** `adafruit.com/`
- **Captures:** price, product ID, image
- **AI prompts:** category classification, product description
- **Path:** `Spaces/kobbled/Electronics/Products`

#### Realtor.ca Listing Clipper
- **Trigger:** `realtor.ca/real-estate/`
- **Captures:** price, sqft, year built, beds/baths, MLS#, address, photos
- **Path:** `personal/Home/buying/listings`

---

## Visual Customization

### Workspace Backgrounds
`workspace-background.css` provides:
- Background images for workspace, notes, and file explorer
- Multiple presets (Tokyo, Mountain, Forest, etc.)
- Custom URL support for light/dark modes
- Blur, brightness, saturation controls
- Style Settings integration for easy configuration

### Canvas Decorations
`canvas-candy.css` (by TfTHacker) adds:
- Colored headers and footers on canvas cards
- Vertical labels (left/right sides)
- Shape effects: circle, parallelogram
- Rotation (8 angles)
- Border styles: dotted, dashed, double, drop shadow
- Transparent/gradient card effects

### Multi-Column Layouts
MCL (Modular CSS Layout) snippets enable:
- `[!multi-column]` callout for flexbox columns
- Float callouts with size options
- List columns, grids, and cards via cssClass or tags
- Wide page views beyond readable line length

### Multi-Select Suggester
Custom Templater user script (`multiSuggester.js`) extends single-select to multi-select:
- Keeps modal open for multiple selections
- Returns array when user presses Escape
- Used in Apps, Phone Apps, Table Top Game templates for OS/platform selection

### Conditional UI Components
JS Engine + Meta Bind integration in Daily Template:
- Time tracking sliders only appear when corresponding habit is toggled on
- Reduces visual clutter
- Reactive updates via `mb.listenToMetadata()`