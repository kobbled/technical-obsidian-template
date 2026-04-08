# Template Vault Gap Analysis

## Overview

This document identifies features, plugins, and structures present in the production notes vault (`D:\Documents\notes`) that are missing from or incomplete in the template vault (`technical-template/`). Last revised: 2026-04-07.

**Production vault:** 29 databases, 38 community plugins, 18 CSS snippets, 19 templates
**Template vault:** 7 databases, 37 community plugins, 20 CSS snippets, 21 templates + 6 web clipper configs

---

## Plugins

### Enabled in Production but Missing from Template

| Plugin | Purpose | Priority |
|--------|---------|----------|
| `metaedit` | MetaEdit — frontmatter metadata management helper | Low |
| `scales-chords` | Musical tab notation with clickable chord links (niche) | Low |
| `simple-canvasearch` | Fuzzy search within an open Canvas | Low |

### Enabled in Template but Not in Production

| Plugin | Purpose | Notes |
|--------|---------|-------|
| (none) | All template plugins now exist in production | — |

### Plugin Folders in Template but Not Enabled

These exist in `plugins/` but are absent from `community-plugins.json`:

| Plugin Folder | Notes |
|---------------|-------|
| `mathpad` | Not in production — leftover folder |
| `number-headings-obsidian` | Not in production — leftover folder |
| `obsidian-dynamic-toc` | Removed from production; leftover folder in template |
| `obsidian-snippet-downloader` | Not in production — leftover folder |

### Previously Identified Plugin Gaps — Now Resolved

- `js-engine` — Added to template
- `obsidian-image-toolkit` — Added to template
- `image-converter` — Added to template
- `cm-editor-syntax-highlight-obsidian` — Added to template (2026-04-07)
- `obsidian-excel-to-markdown-table` — Added to template (2026-04-07)
- `tag-many` — Added to template (2026-04-07)
- `metadata-menu` — Added to template (2026-04-07)
- `calendar-bases` — Added to template (2026-04-07)
- `frontmatter-links` — Enabled in `community-plugins.json` (2026-04-07)

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

**Template: 7 databases** | **Production: 29+ databases**

Template databases:
1. `media/Book Database.base` — Card view of books
2. `media/Movie Database.base` — Card view of movies
3. `media/Video Games Database.base` — Card view of video games
4. `cooking/recipes/Recipes Database.base` — Card view of recipes
5. `apps/Apps Database.base` — Table view of apps grouped by type
6. `subscriptions/Subscription Database.base` — Table view of subscriptions with active filter
7. `Productivity/Habits Calendar.base` — Calendar view of daily habit booleans + emoji summary (2026-04-07)

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

#### Video Games (3 missing filtered views)

| Database | Filter Pattern | View Type | Priority |
|----------|---------------|-----------|----------|
| `Video Games Playing.base` | `status == ["[[playing]]"]` | Cards | High |
| `Video Games Backlog.base` | `status == ["[[bought]]"]` and `status != ["[[played]]"]` | Cards | Medium |
| `Video Games On-Hold.base` | `status == ["[[on-hold]]"]` | Cards | Low |

#### Board Games & TTRPG (2 missing — entire category)

| Database | Filter Pattern | View Type | Priority |
|----------|---------------|-----------|----------|
| `Board Games Database.base` | `file.inFolder("media/games")` + `genre == ["[[Board Game]]"]` | Cards with owned/wishlist pills | High |
| `TTRPG Database.base` | `file.inFolder("media/games")` + `genre.contains(link("TTRPG"))` | Cards | High |

#### Non-Media (2 missing)

| Database | Filter Pattern | View Type | Priority |
|----------|---------------|-----------|----------|
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

## Habit Tracking System

### Current State (as of 2026-04-07)

The template has a complete habit tracking system matching production:

- **Daily Template** — Contains all `*time` frontmatter fields (weightstime, cardiotime, guitartime, etc.) and the JS Engine reactive time-slider block
- **Weekly Template** — Includes `*time` columns in dataview tables for each habit category
- **Monthly Template** — Heatmap calendars use `page.*time` for intensity, showing actual minutes tracked
- **`Productivity/Habits Calendar.base`** — Calendar view of all daily habits with emoji summary formula; table view with all boolean columns (Added 2026-04-07)
- **`_templates/fileclass/daily.md`** — Metadata Menu fileclass defining all 38 daily note fields as typed properties (Boolean for habit toggles, Number with step:30 for time fields) (Added 2026-04-07)

### How It Works

1. Each daily note has boolean toggles for each habit (weights, cardio, guitar, etc.)
2. When a toggle is enabled, a JS Engine block reactively shows a time slider for that habit
3. The slider writes `*time` values (in 30-min increments) back to frontmatter
4. Weekly/Monthly notes aggregate these via Dataview
5. `Habits Calendar.base` shows a visual calendar with emoji summaries per day
6. `metadata-menu` plugin uses the fileclass to provide typed UI for all these fields

### Emoji Reference

| Habit | Property | Emoji |
|-------|----------|-------|
| Weights | `weights` / `weightstime` | 🏋️ |
| Cardio | `cardio` / `cardiotime` | 🏃 |
| Guitar | `guitar` / `guitartime` | 🎸 |
| Piano | `piano` / `pianotime` | 🎹 |
| Singing | `singing` / `singingtime` | 🎤 |
| Recording | `recording` / `recordingtime` | 🎙️ |
| Drawing | `drawing` / `drawingtime` | ✏️ |
| 3D Modelling | `modelling` / `modellingtime` | 🗿 |
| Coding | `coding` / `codingtime` | 💻 |
| Modding | `moding` / `modingtime` | 🎮 |
| Electronics | `electronics` / `makertime` | 🔌 |
| 3D Printing | `printing` / `makertime` | 🖨️ |
| TTRPG | `ttrpg` / `ttrpgtime` | 🎲 |
| Book Reading | `book_reading` / `readingtime` | 📚 |
| Article Reading | `article_reading` / `readingtime` | 📰 |
| CV Work | `cv` / `cvtime` | 📄 |
| Obsidian | `obsidian` / `obsidiantime` | 💎 |
| Video Games | `videogames` / `videogametime` | 🕹️ |
| Movies/TV | `moviestv` / `moviestvtime` | 🎬 |

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
| Apps | 3 | `apps/` (VS Code, Blender, 7-Zip) |
| Subscriptions | 3 | `subscriptions/` (Spotify, GitHub Pro, Netflix) |
| Spaces | 1 | `Spaces/Example Project/` |

### Missing Example Content

| Category | Template Has | Issue | Priority |
|----------|:-----------:|-------|----------|
| TV Shows | 0 entries | `media/tv/` folder doesn't exist. No examples to populate `TV Database.base` | High |
| Board Games | 0 entries | No `media/games/` folder. No examples for `Board Games Database.base` | High |
| TTRPG | 0 entries | No examples for `TTRPG Database.base` | High |
| Beer | 0 entries | Template and Untappd clipper exist but no example entries | Medium |
| Topics | 0 entries | No `Topics/` knowledge base folder or examples | Low |

---

## Folder Structure Gaps

### Missing Folders to Add

| Folder | Purpose | Priority |
|--------|---------|----------|
| `media/tv/` | TV show entries for TV Database | High |
| `media/games/` | Board game and TTRPG entries | High |
| `Clippings/` | Landing zone for web clipper imports | Medium |
| `Topics/` | Knowledge base with topic notes | Low |

---

## Template File Differences

### Daily Note Fileclass (metadata-menu)

**Template** now has `_templates/fileclass/daily.md` — a Metadata Menu configuration defining 38 typed fields for daily notes (productivity, mood, and 19 activity categories each with boolean toggle + time tracking). This powers the conditional habit sliders. Added 2026-04-07.

### Movie Template — watchlistRank

`watchlistRank:` field added to `_templates/Movie Template.md` (2026-04-07). Allows ranking unwatched movies by priority in the watchlist view.

---

## Widget Differences

### Widgets in Production but Missing from Template

| Widget | Purpose | Priority |
|--------|---------|----------|
| (none) | All key widgets now added | — |

### Current Widget State

| Widget | Status | Notes |
|--------|--------|-------|
| `Newest Notes.md` | Added 2026-04-07 | Dataview table of 10 most recent `#note/knowledge` notes |
| `Newly Added Papers (unread).md` | Added 2026-04-07 | Papers widget filtered to unread only (replaces old `Newly Added Papers.md`) |
| `Papers Last Read.md` | Added 2026-04-07 | DataviewJS table of papers read in last 4 months |
| `Papers to Read (Priority).md` | Added 2026-04-07 | Unread papers sorted by priority |
| `Tasks to Start this Month.md` | Added 2026-04-07 | Tasks query for upcoming start dates |
| `Habits Last 7 Days.md` | Template-only | Referenced by Home.md; not present in production Widgets/ (may be embedded directly there) |
| `Youtube Player.md` | Template-only | Not in production |

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
| Create `Productivity/Habits Calendar.base` | Calendar view of daily habit emojis | Complete |
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
| Create `Video Games On-Hold.base` | On-hold filtered card view | Not Started |
| Create `Movies Ranking.base` | Table sorted by rating | Not Started |
| Create `Movies Recent.base` | Table sorted by creation date | Not Started |
| Create `Beer Database.base` | Card view with brewery/ABV/style | Not Started |
| Create `Papers Database.base` | Table with status-based tabs | Not Started |
| Add 1-2 example beer entries | Demonstrate beer template and Untappd clipper | Not Started |
| Add `Clippings/` folder | Landing zone for web clipper imports | Not Started |

### Phase 3 — Lower Priority (Plugins & Structure)

| Task | Description | Status |
|------|-------------|--------|
| Add `metaedit` plugin | Metadata helper (minor benefit) | Not Started |
| Evaluate `scales-chords` plugin | Musical notation — niche use | Not Started |
| Evaluate `simple-canvasearch` plugin | Canvas search — niche use | Not Started |
| Create genre-filtered movie databases | Animation, Anime filtered views | Not Started |
| Add `Topics/` folder with example topic note | Knowledge base structure | Not Started |
| Remove orphaned plugin folders | `mathpad`, `number-headings-obsidian`, `obsidian-dynamic-toc`, `obsidian-snippet-downloader` | Not Started |

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
| cm-editor-syntax-highlight | Complete | Added 2026-04-07 |
| obsidian-excel-to-markdown-table | Complete | Added 2026-04-07 |
| tag-many | Complete | Added 2026-04-07 |
| metadata-menu | Complete | Added 2026-04-07 |
| calendar-bases | Complete | Added 2026-04-07 |
| frontmatter-links enabled | Complete | Added to community-plugins.json 2026-04-07 |
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
| Habits Calendar.base | Complete | `Productivity/Habits Calendar.base` — Added 2026-04-07 |
| Daily fileclass | Complete | `_templates/fileclass/daily.md` — Added 2026-04-07 |
| Movie Template watchlistRank | Complete | Added `watchlistRank:` field 2026-04-07 |
| Newest Notes widget | Complete | Added 2026-04-07 |
| Newly Added Papers (unread) widget | Complete | Added 2026-04-07 (replaces old Newly Added Papers.md) |
| Papers Last Read widget | Complete | Added 2026-04-07 |
| Papers to Read (Priority) widget | Complete | Added 2026-04-07 |
| Tasks to Start this Month widget | Complete | Added 2026-04-07 |
| Home.md widget embeds | Complete | Updated Notes/Papers sections 2026-04-07 |
