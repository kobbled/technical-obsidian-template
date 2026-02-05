# Templates Documentation

## Overview

- **Location:** `_templates/`
- **Markdown Templates:** 20
- **Web Clipper Configs:** 6 (in `_templates/webclipper/`)

---

## Periodic Note Templates

### Daily Template.md
**Purpose:** Daily journaling with habit tracking and time logging

**Frontmatter Properties:**
- `type: daily`, `tags: [daily]`
- `date`, `week`, `month` (linked to periodic notes)
- `banner`, `banner_y`, `cssclasses`
- **Habit booleans:** weights, cardio, guitar, piano, singing, recording, drawing, modelling, coding, moding, electronics, printing, ttrpg, book_reading, article_reading, cv, obsidian, videogames, moviestv
- **Time tracking:** weightstime, cardiotime, guitartime, etc. (minutes)
- **Metrics:** productivity, mood (0-10)

**Templater Patterns:**
```
<%tp.date.now("YYYY-MM-DD")%>
<% tp.date.now("YYYY-WW") %>
<% tp.file.title %>
<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>  // Previous day
```

**Meta-Bind Patterns:**
```
INPUT[progressBar(minValue(0), maxValue(10), stepSize(1)):productivity]
INPUT[toggle:weights]
```

**Note:** For conditional time sliders that appear only when habits are toggled on, the JS Engine plugin is required along with `metabind_button_conditional.js` integration.

---

### Weekly Template.md
**Purpose:** Weekly review aggregating daily data

**Frontmatter Properties:**
- `type: weekly`, `tags: weekly`
- `week`, `month`
- `cssClass: hide-h3, hide-properties`
- `weightLBS` (weight tracking)

**Templater:** `<% tp.date.now("YYYY-WW") %>`

**Dataview Queries:**
```dataview
TABLE choice(weights, "✅", "❌") as "💪"
FROM "Periodic/Daily"
WHERE type = "daily" AND week = this.week
```

**Periodic Notes Syntax:**
- `{{monday:gggg-MM-DD}}` through `{{sunday:gggg-MM-DD}}`
- `![[{{day:gggg-MM-DD}}#Quick Notes]]` - Embedded sections

---

### Monthly Template.md
**Purpose:** Monthly dashboard with heatmap calendars

**Frontmatter:** `type: monthly`, `tags: monthly`, `month`

**DataviewJS Heatmaps:**
```dataviewjs
renderHeatmapCalendar(this.container, {
  year: <% tp.date.now("YYYY") %>,
  entries: dv.pages('"Periodic/Daily"')
    .where(p => p.weights && p.month == dv.current().month)
    .map(p => ({ date: p.file.name, intensity: 4 }))
})
```

**Tasks Block:** Monthly task listing with filters

---

## Media Library Templates

### Book Template.md
**Purpose:** Book catalog entries (Google Books API via QuickAdd)

**Key Properties:** Authors, genre, platform, year, ISBN10, ISBN13, rating, userRating, read, status, pages, posterurl

**QuickAdd Variables:** `{{VALUE:authors}}`, `{{VALUE:genres}}`, `{{VALUE:goodreadsURL}}`, etc.

---

### Movie Template.md
**Purpose:** Movie catalog entries (OMDb API via QuickAdd)

**Key Properties:** genre, directors, year, parental-rating, length, cast, ratingImdb, watched, rating, imdburl, posterurl

**QuickAdd Variables:** `{{VALUE:genreLinks}}`, `{{VALUE:directorLink}}`, `{{VALUE:imdbRating}}`, etc.

---

### TV Template.md
**Purpose:** TV show catalog (OMDb API via QuickAdd)

**Key Properties:** Same as Movie plus `seasons` array

---

### Video Game Template.md
**Purpose:** Video game catalog (IGDB API via QuickAdd)

**Key Properties:** genre, developer, system, platform, year, modes, url, rating, played, installed, status, hours-played, posterurl, install-location, price, date

**QuickAdd Variables:** `{{VALUE:genresFormatted}}`, `{{VALUE:developerName}}`, `{{VALUE:gameModesFormatted}}`, etc.

**API Setup:** Requires Twitch Developer credentials for IGDB API. See [scripts.md](scripts.md) for setup instructions.

---

### Table Top Game Template.md
**Purpose:** Board games, TTRPGs, card games (manual entry or BGG clipper)

**Key Properties:** genre (TTRPG/Board Game/Card Game/Dice Game), developer, year, url, rating, bought, vendor, platform (pdf/vtt/role6), posterurl

**Templater Patterns:**
```javascript
<%*
let genre = await tp.system.suggester(
  ["TTRPG", "Board Game", "Card Game", "Dice Game"],
  ["TTRPG", "Board Game", "Card Game", "Dice Game"]
)
let platform = await tp.user.multiSuggester(tp,
  ["pdf", "vtt", "role6"],
  ["pdf", "vtt", "role6"]
)
%>
```

---

### Beer Template.md
**Purpose:** Beer tasting notes

**Key Properties:** brewery, abv, ibu, style (IPA/Lager/Stout/Belgian/Pilsner/Sour/Wheat), rating, posterurl

---

## Productivity Templates

### Grocery List Template.md
**Purpose:** Shopping list with categories

**Sections:** Fruits/Vegetables, Meat, Baked Goods, Frozen, Bulk Bins, Dairy, Snacks/Cereal, Pantry, Cooking, Toiletries

**Button Integration:**
````button
name Archive Grocery List
type command
action QuickAdd: Gorcery Archiver
````

---

### Gorcery Archiver.md
**Purpose:** Utility template to archive grocery lists

**Templater:** `<%* await tp.user.archiveGroceryList(tp) %>`

---

### Subscription Template.md
**Purpose:** Track subscriptions and recurring costs

**Key Properties:** type (Computer/Phone/Internet/Social/Media/Home/Car/Courses), usage, activeSub, subTerm, subRenewal, subTermination, Cost, accountCharged

---

## Software Catalog Templates

### Apps Template.md
**Purpose:** Desktop application catalog

**Key Properties:** type (3D Modelling/drawing/music/media/gaming/vr/web/AI/coding/engineering/robotics/maker/automation/document/knowledge/finance/storage/utility/audio), os (windows/mac/linux), installed, usage (0-4)

**Templater:** Uses `tp.user.multiSuggester()` for OS selection

---

### Phone Apps Template.md
**Purpose:** Mobile app catalog

**Key Properties:** type, os (android/iOS), installed, usage (0-4)

---

## Other Templates

### Spaces Template.md / Topics Template.md
**Purpose:** Generic note creation with folder selection

**Templater Patterns:**
```javascript
<%*
let folders = app.vault.getAllLoadedFiles()
  .filter(f => f.children)
  .map(f => f.path)
let selectedFolder = await tp.system.suggester(folders, folders)
let title = await tp.system.prompt("Title")
await tp.file.rename(title)
await tp.file.move(selectedFolder + "/" + title)
%>
```

---

### Paper Template.md
**Purpose:** Academic paper/literature notes (Zotero integration)

**Uses Nunjucks/Jinja2 syntax** (Zotero template format):
```
{{title|replace(":", " -")}}
{% for t in tags %}#{{t.tag}} {% endfor %}
{{citekey}}
{% for ant in annotations %}...{% endfor %}
```

---

### Issue Tracker Templates

#### note.issue-tracker.md
**Purpose:** Main issue tracker dashboard

#### note.issue-tracker.issue.md
**Purpose:** Individual issue template

---

## Web Clipper Configurations

Located in `_templates/webclipper/`

### untappd-beer-clipper-clipper.json
- **Trigger:** `https://untappd.com/b/`
- **Path:** `Personal/Food & Drink/Beer`
- **Properties:** brewery, abv, ibu, style, rating, posterurl
- **Selectors:** `.brewery a`, `.abv`, `.ibu`, `.style`, `.caps?data-rating`, `.label img?src`

### boardGameGeek-clipper.json
- **Triggers:** `boardgamegeek.com/boardgame/*`, `boardgamegeek.com/boardgameexpansion/*`
- **Path:** `Personal/Media/libraries/games`
- **Properties:** developer, year, url, rating, posterurl, bought, vendor
- **Selectors:** `.publisher a`, `.game-year`, `.rating`

### medium-clipper.json
- **Triggers:** `medium.com/`, `*.medium.com/`
- **Path:** `Clippings/Medium`
- **Properties:** author, source, published, description, readingTime
- **Content:** Full article via `{{content}}`

### adafruit-product-clipper-clipper.json
- **Trigger:** `https://www.adafruit.com/`
- **Path:** `Spaces/kobbled/Electronics/Products`
- **Properties:** price, product_id, product_category, posterurl
- **AI Prompts:** `{{"category of product"}}`, `{{"brief description"}}`

### realtor.ca-listing-clipper.json
- **Trigger:** `https://www.realtor.ca/real-estate/`
- **Path:** `personal/Home/buying/listings`
- **Properties:** price, square_footage, year_built, bedrooms, bathrooms, property_type, MLS_Number, address
- **Note Name:** `{{selector:#listingAddressTitle}}`

### realtor.ca-listing-photo-scrape-clipper.json
- **Trigger:** Same as above
- **Purpose:** Variant for photo extraction

---

## Common Templater Patterns

### Date Formatting
```
<% tp.date.now("YYYY-MM-DD") %>
<% tp.file.creation_date("YYYY-MM-DD HH:mm") %>
<% tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>
```

### User Input
```javascript
// Single selection
let choice = await tp.system.suggester(["A", "B"], ["a", "b"])

// Text input
let title = await tp.system.prompt("Enter title")

// Multi-selection (custom user script)
let choices = await tp.user.multiSuggester(tp, labels, values)
```

### File Operations
```javascript
await tp.file.rename(newName)
await tp.file.move(path + "/" + filename)
```

---

## Folder Routing Conventions

| Template | Destination |
|----------|-------------|
| Book | (via QuickAdd macro) |
| Movie | (via QuickAdd macro) |
| TV | (via QuickAdd macro) |
| Video Game | (via QuickAdd macro) |
| Beer | `Personal/Food & Drink/Beer` |
| Apps | `Personal/Software/Apps` |
| Phone Apps | `Personal/Software/Phone Apps` |
| Subscription | Varies by type |
| Grocery List | `Personal/Cooking` |
