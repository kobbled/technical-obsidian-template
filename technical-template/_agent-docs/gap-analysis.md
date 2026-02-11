# Template Vault Gap Analysis

## Overview

This document identifies features, plugins, and structures present in the production notes vault (`D:\Documents\notes`) that are missing from or incomplete in the template vault (`technical-template/`). Last revised: 2026-02-10.

**Production vault:** 29 databases, 37 community plugins, 18 CSS snippets, 19 templates
**Template vault:** 4 databases, 33 community plugins, 20 CSS snippets, 21 templates + 6 web clipper configs

---

## Plugins

### Enabled in Production but Missing from Template

| Plugin | Purpose | Priority |
|--------|---------|----------|
| `cm-editor-syntax-highlight-obsidian` | Enhanced code syntax highlighting in edit mode | Medium |
| `obsidian-excel-to-markdown-table` | Import Excel/CSV data as markdown tables | Medium |
| `tag-many` | Bulk tag operations on multiple notes | Low |
| `metadata-menu` | Metadata Menu with fileclasses for typed property management | Medium |

### Enabled in Template but Not in Production

| Plugin | Purpose | Notes |
|--------|---------|-------|
| `obsidian-dynamic-toc` | Auto-generated table of contents | Template-only addition |

### Plugin Folders in Template but Not Enabled

These exist in `plugins/` but are absent from `community-plugins.json`:

| Plugin Folder | Notes |
|---------------|-------|
| `frontmatter-links` | Enabled in production; should be added to template's `community-plugins.json` |
| `mathpad` | Not in production |
| `number-headings-obsidian` | Not in production |
| `obsidian-kanban` | Not in production (in production plugin folder but not enabled either) |
| `obsidian-snippet-downloader` | Not in production |

### Previously Identified Plugin Gaps — Now Resolved

- `js-engine` — Added to template
- `obsidian-image-toolkit` — Added to template
- `image-converter` — Added to template

---

## CSS Snippets

**Template has 20 snippets. Production has 18 snippets.**

The template actually has **more** snippets than production. No snippets are missing from the template.

| Snippet | In Template | In Production | Notes |
|---------|:-----------:|:-------------:|-------|
| `time_of_day.css` | Yes | No | Template-only |
| `view.css` | Yes | No | Template-only (Issue Tracker styling; production keeps this inside `Issue Tracker/IssueTracker/`) |
| All other 18 snippets | Yes | Yes | Matching |

**Previously listed `latex.css` as missing** — this file does not exist in either vault. Removed from gap list.

---

## Databases (.base files)

### Current State

**Template: 6 databases** | **Production: 29 databases**

Template databases:
1. `media/Book Database.base` — Card view of books
2. `media/Movie Database.base` — Card view of movies
3. `media/Video Games Database.base` — Card view of video games
4. `cooking/recipes/Recipes Database.base` — Card view of recipes
5. `apps/Apps Database.base` — Table view of apps grouped by type
6. `subscriptions/Subscription Database.base` — Table view of subscriptions with active filter

### Missing Databases — By Category

#### Movies (5 missing filtered views)

| Database | Filter Pattern | View Type | Priority |
|----------|---------------|-----------|----------|
| `Movies Watchlist.base` | `watched == false` | Cards | High |
| `Movies Ranking.base` | `watched == true`, sorted by `rating DESC` | Table | Medium |
| `Movies Recent.base` | Sorted by `file.ctime DESC` | Table | Medium |
| `Movie Animation.base` | `genre.contains(link("Animation"))` and `!genre.contains(link("Anime"))` | Cards | Low |
| `Movie Anime.base` | `genre.contains(link("Anime"))` | Cards | Low |

#### TV Shows (1 missing — entire category)

| Database | Filter Pattern | View Type | Priority |
|----------|---------------|-----------|----------|
| `TV Database.base` | `file.inFolder("media/tv")` | Cards with watched/unwatched pills, genre tags, season count | High |

#### Video Games (2 missing filtered views)

| Database | Filter Pattern | View Type | Priority |
|----------|---------------|-----------|----------|
| `Video Games Playing.base` | `status == ["[[playing]]"]` | Cards | High |
| `Video Games Backlog.base` | `status == ["[[bought]]"]` and `status != ["[[played]]"]` | Cards | Medium |

#### Board Games & TTRPG (2 missing — entire category)

| Database | Filter Pattern | View Type | Priority |
|----------|---------------|-----------|----------|
| `Board Games Database.base` | `file.inFolder("media/games")` + `genre == ["[[Board Game]]"]` | Cards with owned/wishlist pills | High |
| `TTRPG Database.base` | `file.inFolder("media/games")` + `genre.contains(link("TTRPG"))` | Cards | High |

#### Non-Media (4 missing — entire categories)

| Database | Filter Pattern | View Type | Priority |
|----------|---------------|-----------|----------|
| `Apps Database.base` | `file.hasTag("#software/apps")` | Table grouped by type, with usage/OS columns | High |
| `Subscription Database.base` | `file.hasTag("#personal/subscriptions")` | Table grouped by type + Active Only filtered view | High |
| `Beer Database.base` | `file.hasTag("#personal/food/drinks/beer")` | Cards with brewery, ABV, rating, style | Medium |
| `Papers Database.base` | `file.hasTag("#paperitem")` | Table with By Status, To Read, Reading, Read views | Medium |

### Database Card Formula Patterns

Production databases use a sophisticated card formula system with the `bases-cards.css` snippet. Key patterns:

- `packed_*` formulas build card overlays with title, subtitle, pills (status badges), and genre tags
- `pill-watched` / `pill-unwatched` CSS classes for status coloring
- `link("c: tag font-smaller", ...)` for genre tags as overlays
- `link("c: link-icon", ...)` for external URL links (IMDb, BGG)

The template's existing databases (Book, Movie, Video Games) already use these patterns correctly. New databases should follow the same formula structure.

---

## Example Content Gaps

### Current Example Content in Template

| Category | Count | Location |
|----------|-------|----------|
| Books | 4 | `media/books/` |
| Movies | 8 | `media/movies/` |
| Video Games | 3 | `media/video games/` |
| Recipes | 1 | `cooking/recipes/` |
| Papers | 3 | `papers/` |
| Spaces | 1 | `Spaces/Example Project/` |

### Missing Example Content

| Category | Template Has | Issue | Priority |
|----------|:-----------:|-------|----------|
| TV Shows | 0 entries | `media/tv/` folder doesn't exist. No examples to populate `TV Database.base` | High |
| Board Games | 0 entries | No `media/games/` folder. No examples for `Board Games Database.base` | High |
| TTRPG | 0 entries | No examples for `TTRPG Database.base` | High |
| Apps | 3 entries | `apps/` folder with VS Code, Blender, 7-Zip | Complete |
| Subscriptions | 3 entries | `subscriptions/` folder with Spotify, GitHub Pro, Netflix | Complete |
| Beer | 0 entries | Template and Untappd clipper exist but no example entries | Medium |
| Topics | 0 entries | No `Topics/` knowledge base folder or examples | Low |

### Recommended Example Additions

```
technical-template/
├── media/
│   ├── tv/                          # NEW - TV show examples
│   │   ├── Example TV Show 1.md
│   │   └── Example TV Show 2.md
│   └── games/                       # NEW - board game/TTRPG examples
│       ├── Example Board Game.md
│       └── Example TTRPG.md
├── apps/                            # NEW - software catalog examples
│   ├── Example App 1.md
│   └── Example App 2.md
├── subscriptions/                   # NEW - subscription examples
│   └── Example Subscription.md
└── beer/                            # NEW - beer collection examples
    └── Example Beer.md
```

---

## Folder Structure Gaps

### Template vs Production Organization

The production vault organizes content under a `Personal/` hierarchy. The template uses a flatter structure. Key structural differences:

| Production Path | Template Path | Status |
|----------------|---------------|--------|
| `Personal/Media/books/` | `media/books/` | Different root but functional |
| `Personal/Media/movies/` | `media/movies/` | Different root but functional |
| `Personal/Media/video-games/` | `media/video games/` | Different root but functional |
| `Personal/Media/libraries/tv/` | `media/tv/` | **Missing — folder doesn't exist** |
| `Personal/Media/libraries/games/` | `media/games/` | **Missing — folder doesn't exist** |
| `Personal/Computer/apps/` | — | **Missing — no apps folder** |
| `Personal/Food & Drink/Beer/` | — | **Missing — no beer folder** |
| `Personal/Cooking/` | `cooking/` | Present |
| `Spaces/` | `Spaces/` | Present (1 example vs 3 real projects) |
| `Topics/` | — | **Missing — no knowledge base section** |
| `Clippings/` | — | **Missing — no web clipper imports folder** |
| `Courses/` | — | **Missing — no courses section** |
| `Paper MOCS/` | `mocs/` | Present but minimal (2 files vs 14+) |

### Missing Folders to Add

| Folder | Purpose | Priority |
|--------|---------|----------|
| `media/tv/` | TV show entries for TV Database | High |
| `media/games/` | Board game and TTRPG entries | High |
| `apps/` | Software/apps catalog entries (or ensure template `folderPath` points somewhere valid) | High |
| `Clippings/` | Landing zone for web clipper imports | Medium |
| `Topics/` | Knowledge base with topic notes | Low |

---

## Template File Differences

### Apps Template — Suggester Mismatch

**Production** (`_templates/Apps Template.md`): Uses `tp.system.suggester()` with 23 predefined app type categories (3D Modelling, drawing, music, media, gaming, vr, web, AI, coding, engineering, robotics, maker, automation, document, knowledge, finance, storage, utility, audio).

**Template**: Uses `tp.system.prompt("Type of App?")` — free-text input with no predefined options.

**Impact:** Template users get no guidance on app categorization. The production version's suggester ensures consistent tagging.

**Fix:** Update template's Apps Template to use the production's suggester list.

### Apps Template — Folder Path

Both templates use `folderPath = "Personal/Computer/apps"` but this folder doesn't exist in the template vault. The template should either:
- Create this folder, or
- Update the path to match the template's structure (e.g., `apps/`)

### Subscription Template — Missing "Social" Type

**Production**: Subscription type suggester includes "Social" as an option.
**Template**: Omits "Social" from the type list.

**Fix:** Add "Social" to the Subscription Template's type suggester.

### Daily Note Fileclass (metadata-menu)

**Production** has `_templates/fileclass/daily.md` — a Metadata Menu configuration defining 32 tracked fields for daily notes (productivity, mood, and 18 activity categories each with boolean toggle + time tracking). This powers the conditional habit sliders.

**Template**: Does not have this file. This is tightly coupled to the `metadata-menu` plugin which is also missing from the template. If `metadata-menu` is added, this fileclass should be included.

---

## Widget Differences

### Widgets in Production but Missing from Template

| Widget | Purpose | Priority |
|--------|---------|----------|
| `Newest Notes.md` | Dataview table of 10 most recently created `#note/knowledge` notes | Medium |
| `Papers Last Read.md` | DataviewJS table of papers read in last 4 months | Medium |
| `Papers to Read (Priority).md` | Dataview table of unread papers sorted by priority | Medium |
| `Tasks to Start this Month.md` | Tasks query for upcoming start dates | Medium |

### Widget Name Differences

| Template Widget | Production Widget | Difference |
|----------------|-------------------|------------|
| `Newly Added Papers.md` | `Newly Added Papers (unread).md` | Production specifies unread filter in name |
| `Youtube Player.md` | — | Template-only widget |

---

## Paper/MOC System Gap

**Template:** 2 files in `mocs/` (Paper Symbol Key, Papers MOC)
**Production:** 14+ files in `Paper MOCS/` including:
- 7 topic-specific MOCs (Laser Cladding, Lasers/Optics, Machine Learning, Materials, Robotics, Slicers, Wear)
- Papers Database.base with 4 view tabs (By Status, To Read, Reading, Read)
- Paper Full List, Paper Inbox, Papers to Get, Research Paper Search, Research Papers

The template's paper system is functional but minimal. Adding the `Papers Database.base` and a generic topic MOC example would demonstrate the full workflow.

---

## Implementation Plan

### Phase 1 — High Priority (Databases & Missing Content)

| Task | Description | Status |
|------|-------------|--------|
| Add `media/tv/` folder with 2-3 example TV show entries | Populate for TV Database | Not Started |
| Add `media/games/` folder with 2-3 example entries | Board games and TTRPGs with BGG metadata | Not Started |
| Create `TV Database.base` | Card view with watched/unwatched pills | Not Started |
| Create `Board Games Database.base` | Card view with owned/wishlist pills | Not Started |
| Create `TTRPG Database.base` | Card view filtered by TTRPG genre | Not Started |
| Create `Movies Watchlist.base` | Filtered card view (unwatched only) | Not Started |
| Create `Apps Database.base` | Table view grouped by type | Complete |
| Create `Subscription Database.base` | Table with active/inactive filter views | Complete |
| Add 2-3 example app entries | Demonstrate apps template output | Complete |
| Add 1-2 example subscription entries | Demonstrate subscription template output | Complete |
| Fix Apps Template suggester | Replace free-text prompt with predefined category suggester | Complete |
| Fix Apps Template folder path | Update `folderPath` to match template structure | Complete |

### Phase 2 — Medium Priority (Filtered Views & Polish)

| Task | Description | Status |
|------|-------------|--------|
| Create `Video Games Playing.base` | Status-filtered card view | Not Started |
| Create `Video Games Backlog.base` | Backlog-filtered card view | Not Started |
| Create `Movies Ranking.base` | Table sorted by rating | Not Started |
| Create `Movies Recent.base` | Table sorted by creation date | Not Started |
| Create `Beer Database.base` | Card view with brewery/ABV/style | Not Started |
| Create `Papers Database.base` | Table with status-based tabs | Not Started |
| Add 1-2 example beer entries | Demonstrate beer template and Untappd clipper | Not Started |
| Add missing widgets | Newest Notes, Papers Last Read, Papers to Read, Tasks to Start | Not Started |
| Add `frontmatter-links` to `community-plugins.json` | Plugin folder exists but not enabled | Not Started |
| Add `Clippings/` folder | Landing zone for web clipper imports | Not Started |

### Phase 3 — Lower Priority (Plugins & Structure)

| Task | Description | Status |
|------|-------------|--------|
| Add `cm-editor-syntax-highlight-obsidian` plugin | Enhanced code syntax highlighting | Not Started |
| Add `obsidian-excel-to-markdown-table` plugin | Excel/CSV import capability | Not Started |
| Add `tag-many` plugin | Bulk tag operations | Not Started |
| Evaluate `metadata-menu` plugin | Fileclasses for typed properties — adds complexity | Not Started |
| Create genre-filtered movie databases | Animation, Anime filtered views | Not Started |
| Add `Topics/` folder with example topic note | Knowledge base structure | Not Started |

---

## Previously Completed Items

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
| Productivity Documentation | Complete | `productivity.md` |
| Example Recipe | Complete | `cooking/recipes/` |
| Project Workspace | Complete | `Spaces/Example Project/` |
| Device Config | Complete | `config.md` |
| JS Engine Plugin | Complete | Added to template |
| Image Toolkit Plugin | Complete | Added to template |
| Image Converter Plugin | Complete | Added to template |
| Book Database | Complete | `media/Book Database.base` |
| Video Games Database | Complete | `media/Video Games Database.base` |
| Recipes Database | Complete | `cooking/recipes/Recipes Database.base` |
| Book Examples | Complete | 4 entries in `media/books/` |
| Movie Examples | Complete | 8 entries in `media/movies/` |
| Video Game Examples | Complete | 3 entries in `media/video games/` |
| Paper Examples | Complete | 3 entries in `papers/` |
| Apps Database | Complete | `apps/Apps Database.base` |
| Subscription Database | Complete | `subscriptions/Subscription Database.base` |
| App Examples | Complete | 3 entries in `apps/` (VS Code, Blender, 7-Zip) |
| Subscription Examples | Complete | 3 entries in `subscriptions/` (Spotify, GitHub Pro, Netflix) |
| Apps Template Suggester | Complete | Replaced free-text with 23-category suggester |
| Apps Template Folder Path | Complete | Updated to `apps/` |
| Subscription Template Folder Path | Complete | Simplified to `subscriptions/` |
| Subscription Template Social Type | Complete | Added "Social" to type suggester |
