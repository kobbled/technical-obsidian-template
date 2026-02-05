# Obsidian Plugins Documentation

## Core Plugins

### Enabled (23)
| Plugin | Purpose |
|--------|---------|
| file-explorer | File navigation sidebar |
| global-search | Vault-wide search |
| switcher | Quick file switching (Ctrl+O) |
| graph | Graph view of note connections |
| backlink | Shows notes linking to current note |
| canvas | Visual canvas for spatial notes |
| outgoing-link | Shows links from current note |
| tag-pane | Tag browser sidebar |
| properties | Frontmatter property editor |
| page-preview | Hover preview of linked notes |
| daily-notes | Core daily notes functionality |
| templates | Core template insertion |
| note-composer | Merge and split notes |
| command-palette | Command palette (Ctrl+P) |
| editor-status | Word count in status bar |
| bookmarks | Bookmark notes and searches |
| outline | Document outline sidebar |
| word-count | Word/character count |
| audio-recorder | Record audio in notes |
| file-recovery | Snapshot history recovery |
| workspaces | Save/load workspace layouts |
| bases | Database views for notes |
| starred | Star important notes |

---

## Community Plugins (30 Enabled)

### Content & Data Management

| Plugin | Description |
|--------|-------------|
| Dataview | Complex data views for querying notes as a database |
| Meta Bind | Interactive input fields, metadata displays, and buttons |
| Templater | Advanced template system with scripting |
| QuickAdd | Quick note creation with macros and scripts |
| Homepage | Set startup note or workspace |
| Periodic Notes | Daily, weekly, monthly note management |
| Calendar | Calendar view for daily notes |
| Buttons | Create clickable buttons in notes |
| Heatmap Calendar | GitHub-style activity heatmaps |

### Visual & Media

| Plugin | Description |
|--------|-------------|
| Banners | Banner images at top of notes |
| Excalidraw | Whiteboard drawings in notes |
| Advanced Canvas | Enhanced canvas with presentations |
| Highlightr | Color-coded text highlighting |
| Contextual Typography | CSS hooks for typography styling |
| Local Media Embedder | Embed local video/audio files |

### Writing & Editing

| Plugin | Description |
|--------|-------------|
| Advanced Tables | Table navigation, formatting, formulas |
| Cooklang | Recipe format viewer/editor |
| Dynamic TOC | Auto-generated table of contents |

### Organization & Navigation

| Plugin | Description |
|--------|-------------|
| Tag Wrangler | Rename, merge, manage tags |
| Sortable | Sortable table columns |
| Recent Files | Recently opened files list |
| Show Current File Path | File path in status bar |

### Tasks & Tracking

| Plugin | Description |
|--------|-------------|
| Tasks | Task management with dates, recurrence |
| Update Modified Date | Auto-update Modified frontmatter field |

### Customization

| Plugin | Description |
|--------|-------------|
| Minimal Theme Settings | Minimal theme configuration |
| Style Settings | CSS variable controls for themes/snippets |
| Commander | Customize commands and toolbar |

### Reference & Integration

| Plugin | Description |
|--------|-------------|
| Zotero Integration | Import from Zotero reference manager |
| Open vault in VSCode | Open vault in VS Code |

---

## Key Plugin Configurations

### Dataview
- Enables inline queries (`dv.` in DataviewJS)
- Used extensively in Weekly/Monthly templates for habit aggregation
- Powers media library views

### Templater
- **Template folder:** `_templates`
- **User scripts folder:** `_scripts/_templater`
- User functions: `archiveGroceryList`, `multiSuggester`
- Syntax: `<% tp.* %>` for expressions, `<%* %>` for scripts

### QuickAdd
- **Macros with scripts:**
  - Books (Google Books API)
  - Movies (OMDb API)
  - TV Shows (OMDb API)
  - Video Games (IGDB API)
- Scripts located in `_scripts/`

### Meta Bind
- Used in Daily Template for habit toggles
- Progress bars for productivity/mood tracking
- Dynamic sliders (requires JS Engine for conditional display)

### Periodic Notes
- **Daily:** `YYYY-MM-DD` format
- **Weekly:** `YYYY-WW` format
- **Monthly:** `YYYY-MM` format
- Templates in `_templates/` folder

### Heatmap Calendar
- Renders in Monthly Template
- Tracks: exercise, music, art, reading, maker activities
- Custom styling via `heatmap_custom_styling.css`

### Homepage
- Opens designated note on startup
- Configured via plugin settings

### Banners
- Uses `banner` and `banner_y` frontmatter
- Applied to periodic note templates

---

## Recommended Additional Plugins

These plugins enhance the vault but are not included by default:

| Plugin | Purpose | Priority |
|--------|---------|----------|
| JS Engine | JavaScript execution for conditional Meta Bind | High |
| Image Toolkit | Click-to-zoom, rotate, flip images | High |
| Editor Syntax Highlight | Syntax highlighting in code blocks | Medium |
| Excel to Markdown Table | Paste spreadsheet data as tables | Medium |
| Image Converter | Compress/resize/convert images | Medium |

See [gap-analysis.md](gap-analysis.md) for details on what these plugins enable.
