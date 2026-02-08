# Scripts Documentation

## Overview

- **Location:** `_scripts/`
- **Templater Scripts:** `_scripts/_templater/`
- **Total Scripts:** 11

---

## QuickAdd Macro Scripts

These scripts integrate with the QuickAdd plugin to fetch metadata from external APIs.

### books.js
**Purpose:** Fetch book metadata from Google Books API

**API Integration:**
- **Google Books API:** `https://www.googleapis.com/books/v1/volumes`
- Searches by title, author, or ISBN
- Generates Goodreads search URL from ISBN

**Settings:**
```javascript
settings: {
  name: "Google Books API Key",
  key: "apiKey"
}
```

**QuickAdd Variables Set:**
- `title`, `authors`, `genres`, `platform`
- `release` (publication year), `pages`
- `isbn10`, `isbn13`
- `thumbnail` (cover image)
- `rating`, `userRating`, `read`, `status`
- `goodreadsURL`

**Usage:** QuickAdd → Macro → Books

---

### movies.js
**Purpose:** Fetch movie metadata from OMDb API

**API Integration:**
- **OMDb API:** `https://www.omdbapi.com/`
- Searches by title or IMDB ID
- Returns detailed movie information

**Settings:**
```javascript
settings: {
  name: "OMDb API Key",
  key: "apiKey"
}
```

**QuickAdd Variables Set:**
- `title`, `Year`, `Rated`, `Runtime`
- `genreLinks` (wiki-linked genres)
- `directorLink` (wiki-linked)
- `actorLinks` (wiki-linked cast)
- `imdbRating`, `rating`, `watched`
- `imdbID`, `Poster`, `Plot`
- `tag` (formatted for tags)

**Usage:** QuickAdd → Macro → Movies

---

### tv.js
**Purpose:** Fetch TV show metadata from OMDb API

**API Integration:** Same as movies.js

**Differences from movies.js:**
- Prompt text: "Enter TV title or IMDB ID"
- Tags use `TV/Genre/` prefix instead of `Movies/Genre/`

**QuickAdd Variables:** Same structure as movies.js

**Usage:** QuickAdd → Macro → TV

---

### videogames.js
**Purpose:** Fetch video game metadata from IGDB API

**API Integration:**
- **IGDB API:** `https://api.igdb.com/v4/games`
- **Twitch OAuth2:** `https://id.twitch.tv/oauth2/token`
- Requires Twitch Developer credentials

**Settings:**
```javascript
settings: [
  { name: "IGDB Client ID", key: "clientId" },
  { name: "IGDB Client Secret", key: "clientSecret" }
]
```

**Token Management:**
- Stores OAuth token in `.obsidian/igdbToken.json`
- Auto-refreshes when expired

**QuickAdd Variables Set:**
- `title`, `genresFormatted`, `gameModesFormatted`
- `developerName`, `system`, `platform`
- `release` (year), `url`, `storylineFormatted`
- `thumbnail` (cover art)
- `rating`, `played`, `installed`, `status`
- `hoursPlayed`, `price`, `date`
- `tag` (formatted)

**Platform Options:**
- PC (sub-platforms: Steam, Epic, GOG, Humble, Itch.io, Other)
- PlayStation 5
- Meta Quest 3
- RetroPi

**Usage:** QuickAdd → Macro → Video Games

---

## Templater User Scripts

Located in `_scripts/_templater/`, these are called via `tp.user.<functionName>(tp)`.

### archiveGroceryList.js
**Purpose:** Archive current grocery list to dated backup

**Function:** `archiveGroceryList(tp)`

**Behavior:**
1. Reads `Personal/Cooking/Grocery List.md`
2. Creates copy at `Personal/Cooking/Groceries Archive/Grocery List-YYYY-MM-DD.md`
3. Shows notification on completion

**Dependencies:**
- `tp.date.now()` for timestamp
- `tp.file.find_tfile()` for file lookup
- `app.vault.read()` / `app.vault.create()` for file operations

**Usage in Template:**
```

```

---

### multiSuggester.js
**Purpose:** Multi-select version of Templater's suggester

**Function:** `multiSuggester(tp, textItems, items, throwOnCancel, placeholder, limit)`

**Parameters:**
- `tp` - Templater object
- `textItems` - Display labels
- `items` - Return values
- `throwOnCancel` - Error on cancel (default: false)
- `placeholder` - Input placeholder text
- `limit` - Max suggestions shown

**Behavior:**
- Opens suggester repeatedly
- Removes selected items from list
- Returns array of all selections when user presses Escape

**Usage in Template:**
```javascript

```

---

## Utility Scripts

### getCurrFolder.js
**Purpose:** Get absolute path to parent folder at specified level

**Function:** `getCurrFolder(filepath, level)`

**Parameters:**
- `filepath` - Current file path
- `level` - How many levels up (0 = same folder)

**Returns:** Absolute path with spaces URL-encoded as `%20`

**Usage:**
```javascript
const getCurrFolder = require('./getCurrFolder.js')
let parentPath = getCurrFolder(app.workspace.getActiveFile().path, 1)
```

---

### getRelFileLink.js
**Purpose:** Generate file:// protocol links

**Function:** `getRelFileLink(currPath, parent_level, alias, path)`

**Parameters:**
- `currPath` - Current file path
- `parent_level` - Levels up (-1 for absolute)
- `alias` - Link display text
- `path` - Relative path to target

**Returns:** Markdown link: `[alias](file://...)`

**Dependencies:** Imports `getCurrFolder.js`

---

### dateFilters.js
**Purpose:** Filter functions for Dataview queries

**Functions:**
```javascript
filterWeekCount(rows, field, filterdate)   // Count rows matching week
filterMonthCount(rows, field, filterdate)  // Count rows matching month
filternLastCount(rows, field, nlast)       // Count rows from last N weeks
```

**Dependencies:**
- Dataview `dv` object
- `moment.js` (global in Obsidian)

**Usage in DataviewJS:**
```dataviewjs
let count = filterWeekCount(dv.pages(), "week", "2024-W01")
```

---

## Meta Bind Integration

### metabind_button_conditional.js
**Purpose:** Reactive UI for activity time tracking in Daily Template

**Integration:** Meta Bind plugin + JS Engine

**How it works:**
1. Creates signals bound to frontmatter habit flags
2. Listens for metadata changes
3. Conditionally renders slider inputs (0-360 min, 30-min steps)

**Tracked Activities:**
- Exercise: weights, cardio
- Music: guitar, piano, singing, recording
- Art: drawing, modelling
- Maker: coding, moding, electronics, printing
- Reading: book_reading, article_reading
- Media: videogames, moviestv

**Usage:** Embedded in Daily Template via JS Engine code block

**Note:** Requires the JS Engine plugin to be installed.

---

## Migration Script

### convert_props.py
**Purpose:** Batch convert custom inline metadata to YAML frontmatter

**Language:** Python

**Dependencies:**
- `os`, `re` (standard library)
- `yaml` (PyYAML)

**Input Format:**
```
----
**Category**:: Personal
**Tags**:: tag1, tag2
----
```

**Output Format:**
```yaml
---
Category: Personal
Tags:
  - tag1
  - tag2
---
```

**Usage:** Run from vault root directory
```bash
python _scripts/convert_props.py
```

**Note:** External script, not run within Obsidian

---

## API Key Requirements

| Script | API | Key Location |
|--------|-----|--------------|
| books.js | Google Books | QuickAdd settings |
| movies.js | OMDb | QuickAdd settings |
| tv.js | OMDb | QuickAdd settings |
| videogames.js | IGDB/Twitch | QuickAdd settings |

### Getting API Keys

**Google Books:**
- Google Cloud Console → APIs & Services → Credentials
- Enable "Books API" in your project

**OMDb:**
- https://www.omdbapi.com/apikey.aspx
- Free tier available (1,000 daily limit)

**IGDB (Twitch):**
1. Go to https://dev.twitch.tv/console/apps
2. Register a new application
3. Get Client ID and generate Client Secret
4. Enter both in QuickAdd macro settings
