# CLAUDE.md

Obsidian vault template for technical/scientific note-taking. The actual vault lives in `technical-template/`. Configuration, plugins, snippets, scripts, and templates are all under `technical-template/.obsidian/` and `technical-template/_scripts/` / `technical-template/_templates/`.

## Theme & Appearance

- **Theme:** Minimal (with Minimal Theme Settings plugin for customization)
- **Font:** Inter, base size 16px
- **Style Settings plugin** exposes CSS variables for fine-tuning across theme and snippets

## CSS Snippets (19 active)

All in `technical-template/.obsidian/snippets/`. These are the primary visual customization layer.

### Layout System (MCL family)
- **MCL Multi Column.css** — Multi-column layouts via callout syntax. Supports blank containers, floating callouts (small/medium/large), list columns/grids, card styling.
- **MCL Gallery Cards.css** — Gallery card layouts from callouts/paragraphs. Image zoom, mermaid zoom, table cards in grid layout, float support.
- **MCL Wide Views.css** — Page width control classes: `wide-page`, `wide-dataview`, `wide-table`, `wide-callout`, `narrow-page`.

### Component Styling
- **buttons.css** — Styled buttons for daily/weekly/monthly note creation. Dark bg (#323953), light text (#E8DDB5), hover effects.
- **callouts.css** — Box-shadow, 4px left border, custom background colors for callout blocks.
- **stickies.css** — Post-it note styling with 5 color variants (#FFFF99, #9fdf9f, #deb7e7, #7afcff, #ffb470). Uses Rage/Segoe Print fonts.
- **carousel.css** — Pure-CSS slideshow with slide indicators and navigation arrows.
- **images.css** — Image centering, 15px border-radius, caption support. `#circle` / `#round` src fragments for circular images.
- **table.css** — Centered tables, time-of-day element positioning.
- **view.css** — Issue tracker UI: status colors, label chips, search bar, issue list borders and hover effects.
- **headers.css** — Hides H3 in dashboards and inline titles in embeds.
- **properties.css** — Hides property headers by class name.

### Visualization
- **heatmap_custom_styling.css** — Heatmap calendar hover effects, content display, overflow handling.
- **mermaid.css** — Centers and scales mermaid diagrams responsively.
- **canvas-candy.css** — (by TfTHacker) Canvas presentation styling: headers/footers/labels, card effects, shape transforms (circles, parallelograms), rotations, gradients, borders, image callouts.

### Workspace
- **workspace-background.css** — Background images with multiple themes for light/dark mode, blur/brightness/saturation filters, transparency modes, file explorer backgrounds, folder/file icons with color filters.
- **minimal_theme_mods.css** — Blockquote styling (3px blue border), vertical centering tweaks.
- **clock.css** — Digital clock display positioning; hidden on mobile via media query.
- **time_of_day.css** — Absolute positioning for time-of-day display elements.

## Plugins (29 community)

Listed in `technical-template/.obsidian/community-plugins.json`. Plugin data in `technical-template/.obsidian/plugins/<id>/`.

### Core Workflow
| Plugin | What it does |
|--------|-------------|
| **Templater** | Advanced templates with JavaScript execution. Templates in `_templates/`. |
| **QuickAdd** | Fast note/content creation via configurable commands. |
| **Periodic Notes** | Daily, weekly, and monthly note scaffolding. |
| **Calendar** | Calendar sidebar for navigating daily notes. |
| **Homepage** | Sets the startup page (Home.md). |
| **Tasks** | Task management with due dates, recurrence, and query-based filtering. |
| **Dataview** | Query engine for dynamic views and tables from note metadata. |
| **Meta Bind** | Interactive inline input fields and buttons inside notes. |
| **Buttons** | Clickable buttons that trigger commands, links, or templates. |
| **Commander** | Add commands to UI elements, create macros. |

### Visual & Layout
| Plugin | What it does |
|--------|-------------|
| **Minimal Theme Settings** | GUI controls for the Minimal theme. |
| **Style Settings** | Exposes CSS variable controls for themes and snippets. |
| **Banners** | Banner images at the top of notes. |
| **Highlightr** | Color-coded text highlighting menu. |
| **Contextual Typography** | Adds `data-tag-name` attributes for targeted CSS styling. |
| **Heatmap Calendar** | GitHub-style activity heatmap for tracking. |

### Canvas & Diagrams
| Plugin | What it does |
|--------|-------------|
| **Excalidraw** | Freehand drawing and diagramming embedded in notes. |
| **Advanced Canvas** | Enhanced canvas with presentation mode and flowcharts. |

### Tables & Organization
| Plugin | What it does |
|--------|-------------|
| **Advanced Tables** | Table navigation, formatting, formulas. |
| **Sortable** | Click-to-sort table columns. |
| **Dynamic Table of Contents** | Auto-generated TOC that updates with the document. |
| **Tag Wrangler** | Rename, merge, toggle, search tags from the tag pane. |
| **Recent Files** | Sidebar list of recently opened files. |

### Integration & Utility
| Plugin | What it does |
|--------|-------------|
| **Zotero Integration** | Citation and bibliography import from Zotero (desktop only). |
| **Cooklang** | Display/edit recipes in Cooklang format. |
| **Open in VSCode** | Open vault in VS Code (desktop only). |
| **Local Media Embedder** | Embed local video/image/audio files (desktop only). |
| **Show Current File Path** | Displays full path in the status bar. |
| **Update Modified Date** | Auto-updates `modified` frontmatter field on save. |

## Scripts & Automation

`technical-template/_scripts/` contains JavaScript (used by Templater/Dataview) and Python utilities:

- **books.js, movies.js, tv.js, videogames.js** — Media database automation (fetch metadata, populate templates).
- **dateFilters.js** — Date filtering utilities for dataview queries.
- **getCurrFolder.js / getRelFileLink.js** — Path and link helpers.
- **metabind_button_conditional.js** — Conditional button logic for Meta Bind.
- **_templater/archiveGroceryList.js** — Archives completed grocery items.
- **_templater/multiSuggester.js** — Multi-select suggestion modal for Templater.
- **convert_props.py** — Python utility for property conversion.

## Key Features

- **Periodic Notes** — Daily/weekly/monthly with templates, calendar sidebar, and button-based creation.
- **Task & Habit Tracking** — Tasks plugin queries + heatmap calendar visualization.
- **Post-it Notes** — Styled sticky notes in 5 colors via `stickies.css`.
- **Media Libraries** — Book, movie, TV, video game databases with Dataview queries and API-fetching scripts.
- **Issue Tracker** — Custom issue tracking system in `Issue Tracker/` with dedicated CSS.
- **Grocery List** — Template-based list with Templater archiving script.
- **Academic Papers** — Zotero integration with auto-generated MOCs.
- **Image Gallery** — MCL Gallery Cards + image styling snippets.
- **Canvas Presentations** — Advanced Canvas + Canvas Candy CSS for slide-like presentations.
- **Dashboard** — `Dashboard.md` and `Home.md` as entry points with widget components in `Widgets/`.

## Directory Layout

```
technical-template/
├── .obsidian/          # Config, plugins, snippets
├── _scripts/           # JS (Templater/Dataview) and Python automation
├── _templates/         # Note templates (daily, media, papers, grocery, etc.)
├── examples/           # Sample entries (books, movies, TV, video games)
├── Excalidraw/         # Drawing files
├── img/                # Vault images
├── Issue Tracker/      # Issue tracking system
├── lists/              # Lists with archive subfolder
├── mocs/               # Maps of Content
├── papers/             # Academic papers
├── Productivity/       # Daily/weekly/monthly notes, post-it notes
├── Widgets/            # Dashboard widget components
├── Dashboard.md
└── Home.md
```
