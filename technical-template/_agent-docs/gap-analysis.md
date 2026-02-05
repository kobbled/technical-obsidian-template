# Template Vault Gap Analysis

## Overview

This document identifies features, plugins, and structures present in the production notes vault (`D:\Documents\notes`) that are missing from or incomplete in the template vault (`technical-template/`).

---

## Plugins Missing from Template

The template has 30 community plugins. The following 8 plugins from the production vault could enhance the template:

| Plugin | Purpose | Priority |
|--------|---------|----------|
| `js-engine` | JavaScript execution for advanced Meta Bind conditionals | High |
| `obsidian-image-toolkit` | Click-to-zoom, rotate, flip images | High |
| `cm-editor-syntax-highlight-obsidian` | Enhanced code syntax highlighting | Medium |
| `obsidian-excel-to-markdown-table` | Import Excel/CSV data | Medium |
| `image-converter` | Compress/resize/convert images | Medium |
| `tag-many` | Bulk tag operations | Low |
| `frontmatter-links` | Render frontmatter as links | Low |
| `metaedit` | Inline metadata editing | Low |

### Notes
- **js-engine** is required for the conditional time tracking sliders in Daily Template
- **obsidian-image-toolkit** significantly improves image viewing experience
- Plugins are documented only; installation is manual via Obsidian settings

---

## CSS Snippets Gap

**Template has:** 20 CSS snippets (all enabled)

**Missing from template:**
| Snippet | Purpose |
|---------|---------|
| `latex.css` | Math/LaTeX rendering customization for scientific notes |

---

## Features Missing or Incomplete

### High Priority

#### 1. Conditional Habit Time Sliders
- **Issue:** Daily Template lacks JS Engine integration for conditional sliders
- **Production behavior:** Time tracking sliders only appear when corresponding habit toggle is enabled
- **Template behavior:** All sliders visible at all times (cluttered UI)
- **Fix:** Add JS Engine plugin + `metabind_button_conditional.js` integration

#### 2. IGDB Video Game Integration
- **Issue:** Template has `videogames.js` but no setup documentation
- **Missing:** OAuth setup instructions for Twitch/IGDB API credentials
- **Fix:** Add README section or setup guide for API configuration

#### 3. Device Configuration File
- **Issue:** No `config.md` for multi-device path configuration
- **Production has:** Device-specific paths for Dropbox, OneDrive, Ubuntu, Android
- **Fix:** Add `config.md` template with common path patterns

#### 4. Bases Database Views
- **Issue:** Only 1 database (`Movie Database.base`) exists
- **Production has:** 14+ databases with various filters (Watchlist, Playing, Backlog, etc.)
- **Fix:** Add example databases showing filter patterns

### Medium Priority

#### 5. Board Game/TTRPG Examples
- **Issue:** `Table Top Game Template.md` exists but no example entries
- **Missing:** Example board game and TTRPG notes demonstrating template usage
- **Fix:** Add `examples/games/` folder with sample entries

#### 6. Recipe System Examples
- **Issue:** Cooklang plugin installed but no recipe examples
- **Missing:** Sample `.cook` file demonstrating Cooklang syntax
- **Fix:** Add `examples/recipes/` folder with sample recipe

#### 7. Project Workspace Structure
- **Issue:** Template lacks `Spaces/` folder pattern for project workspaces
- **Production has:** Multi-project workspace system with context-aware folders
- **Fix:** Add `Spaces/Example Project/` demonstrating the pattern

#### 8. Subscription Tracking
- **Issue:** `Subscription Template.md` exists but no examples
- **Missing:** Sample subscription entries showing property usage
- **Fix:** Document in templates.md or add example entries

### Lower Priority

#### 9. Beer Collection
- **Issue:** `Beer Template.md` and Untappd clipper exist but no examples
- **Fix:** Document web clipper setup in templates.md

#### 10. Software/Apps Catalog
- **Issue:** `Apps Template.md` exists but no example structure
- **Fix:** Document expected folder structure and usage

---

## Example File Structures to Add

```
technical-template/
├── examples/
│   ├── games/                   # NEW - add board game/TTRPG examples
│   │   ├── Example Board Game.md
│   │   └── Example TTRPG.md
│   └── recipes/                 # NEW - add Cooklang examples
│       └── Example Recipe.cook
├── Spaces/                      # NEW - project workspace pattern
│   └── Example Project/
│       └── README.md
└── config.md                    # NEW - device configuration
```

---

## Bases Database Additions Needed

**Current:** 1 database (`Movie Database.base`)

**Recommended additions:**
| Database | Filter | Purpose |
|----------|--------|---------|
| `Movies Watchlist.base` | `watched == false` | Show unwatched movies |
| `Video Games Database.base` | `libraries/video-games` folder | All games |
| `Video Games Playing.base` | `status == ["[[playing]]"]` | Currently playing |
| `Board Games Database.base` | `#games/board-games` tag | Board game collection |

---

## Template Improvements Needed

| Template | Issue | Recommended Fix |
|----------|-------|-----------------|
| `Daily Template.md` | Missing conditional time sliders | Document JS Engine dependency |
| `Video Game Template.md` | Missing IGDB setup docs | Add OAuth setup instructions |
| `Table Top Game Template.md` | No usage examples | Add example entries |
| `Beer Template.md` | No usage examples | Document Untappd clipper |

---

## Implementation Status

| Item | Status | Notes |
|------|--------|-------|
| Gap Analysis Documentation | Complete | This file |
| Plugin Documentation | Complete | `plugins.md` |
| CSS Snippets Documentation | Complete | `css-snippets.md` |
| Templates Documentation | Complete | `templates.md` |
| Scripts Documentation | Complete | `scripts.md` |
| Metadata Schema | Complete | `metadata-schema.md` |
| Vault Features | Complete | `vault_features.md` |
| Bases Documentation | Complete | `bases-databases.md` |
| Example Board Game | Complete | `examples/games/` |
| Example TTRPG | Complete | `examples/games/` |
| Example Recipe | Complete | `examples/recipes/` |
| Project Workspace | Complete | `Spaces/Example Project/` |
| Device Config | Complete | `config.md` |
