# Productivity System Documentation

## Overview

The productivity system is a multi-layered habit tracking, mood/productivity monitoring, and task management architecture. Data flows upward from **Daily Notes** (input) through **Weekly/Monthly** aggregations into **Home.md Widgets** (at-a-glance dashboards).

- **Location:** `Productivity/Daily Notes/`, `Widgets/`, `Home.md`
- **Key Plugins:** Meta Bind, JS Engine, Dataview, Heatmap Calendar, Tasks, Periodic Notes
- **Key CSS:** `heatmap_custom_styling.css`

---

## Architecture

```
Daily Note (input layer)
  ├── 19 boolean habit toggles (Meta Bind)
  ├── Conditional time sliders (JS Engine + Meta Bind)
  ├── Productivity score 0-10 (Meta Bind progress bar)
  └── Mood score 0-10 (Meta Bind progress bar)
        │
        ├──► Weekly Note (aggregation)
        │     ├── Dataview TABLEs per category
        │     └── DataviewJS progress bars vs weekly targets
        │
        ├──► Monthly Note (visualization)
        │     └── Heatmap calendars per category (color-coded)
        │
        └──► Home.md Widgets (dashboard)
              ├── Habits Last 7 Days (table + progress bars)
              ├── Productivity heatmap (year-long, green)
              └── Mood heatmap (year-long, yellow)
```

---

## Data Model

### Daily Note Frontmatter

Each daily note stores habit completion as booleans and time spent as integers (minutes) in YAML frontmatter. Created via `_templates/Daily Template.md`.

**Metadata fields:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | `"daily"` | Note type identifier |
| `tags` | `daily` | Used by Dataview `#daily` queries |
| `date` | `YYYY-MM-DD` | Note date |
| `week` | `YYYY-WW` | ISO week (links to weekly note) |
| `month` | `YYYY-MM` | Month (links to monthly note) |
| `productivity` | `0-10` | Daily productivity self-assessment |
| `mood` | `0-10` | Daily mood self-assessment |

**Habit booleans (19 total):**

| Category | Fields |
|----------|--------|
| Exercise | `weights`, `cardio` |
| Music | `guitar`, `piano`, `singing`, `recording` |
| Art | `drawing`, `modelling` |
| Maker | `coding`, `electronics`, `printing`, `moding` |
| Reading | `book_reading`, `article_reading` |
| Entertainment | `videogames`, `moviestv` |
| Other | `ttrpg`, `cv`, `obsidian` |

**Time tracking fields (minutes, 0-360 in 30-min steps):**

`weightstime`, `cardiotime`, `guitartime`, `pianotime`, `singingtime`, `recordingtime`, `drawingtime`, `modellingtime`, `codingtime`, `modingtime`, `makertime` (shared by electronics/printing), `readingtime` (shared by book/article), `videogametime`, `moviestvtime`, `cvtime`, `obsidiantime`, `ttrpgtime`

---

## Daily Note Input Layer

### Habit Toggles

Inline Meta Bind toggles in the Daily Template allow one-click habit tracking:

```markdown
Weights: `INPUT[toggle:weights]` Cardio: `INPUT[toggle:cardio]`
Guitar: `INPUT[toggle:guitar]` Piano: `INPUT[toggle:piano]`
```

Each toggle writes `true`/`false` to the corresponding frontmatter field.

### Productivity & Mood Sliders

Meta Bind progress bar inputs for daily self-assessment:

```markdown
> [!info]+ Productivity
> ```meta-bind
> INPUT[progressBar( minValue(0), maxValue(10)):productivity]

> [!info]+ Mood
> ```meta-bind
> INPUT[progressBar( minValue(0), maxValue(10)):mood]
```

### Conditional Time Sliders (JS Engine)

The Daily Template contains a JS Engine code block that reactively shows time-tracking sliders only for habits that are toggled on. This avoids cluttering the UI with unused inputs.

**How it works:**

1. Binds to each habit's frontmatter field via `mb.parseBindTarget()`
2. Subscribes to metadata changes via `mb.subscribeToMetadata()`
3. On change, re-renders: for each `true` habit, creates a slider input bound to the corresponding time field
4. Uses `engine.reactive()` for live updates without page reload

**Slider configuration:** `INPUT[slider(addLabels, title(...), minValue(0), maxValue(360), stepSize(30), showcase):timefield]`

This renders a labeled slider from 0 to 360 minutes in 30-minute increments, with a numeric display.

---

## Weekly Aggregation

**Template:** `_templates/Weekly Template.md`

Weekly notes aggregate daily habit data into per-category sections, each containing:

1. **Dataview TABLE** — Shows each day of the week with emoji completion status per habit
2. **DataviewJS progress bars** — Counts completed days against weekly targets

**Example (Exercise section):**

```markdown
```dataview
TABLE without id
   file.link AS "Day",
   choice(weights,"...","...") AS "...",
   weightstime AS "...",
   choice(cardio,"...","...") AS "...",
   cardiotime AS "..."
FROM "Productivity/Daily Notes"
WHERE type = "daily" AND week = "2026-06"
SORT file.name ASC
```

The progress bars use a `filterWeekCount()` function that counts days where any field in a group is true:

```javascript
const filterWeekCount = (rows, filterdate, ...fields) =>
   rows.filter(p => p.week == filterdate && fields.some(field => p[field])).length;
```

**Weekly targets:**

| Category | Target Days/Week |
|----------|-----------------|
| Weights | 3 |
| Cardio | 2 |
| Recording | 1 |
| Instruments | 3 |
| Singing | 2 |
| Coding | 2 |
| Maker | 2 |
| Moding | 2 |
| Art | 2 |
| Books | 2 |
| Articles | 2 |
| Obsidian | 2 |

---

## Monthly Visualization

**Template:** `_templates/Monthly Template.md`

Monthly notes display heatmap calendars (via Heatmap Calendar plugin) for each habit category. Each heatmap is scoped to the current month using Templater date expressions.

**Categories with separate heatmaps:**
- Exercise (red = weights, blue = cardio)
- Music (blue = recording, purple = singing, pink = guitar, orange = piano)
- Art (yellow = modelling, orange = drawing)
- Reading (blue = books, green = articles)
- Maker (yellow = coding, green = electronics/printing)

**Heatmap pattern:**

```javascript
dv.span("**Title**")
const calendarData = {
    year: 2026,
    month: 2,
    colors: { colorName: ["#shade1", ..., "#shade5"] },
    entries: []
}
for (let page of dv.pages("#daily").where(p => p.habitField && p.file.day.month == currentMonth)) {
    calendarData.entries.push({
        date: page.file.name,
        intensity: page.timeField,
        content: "emoji " + page.timeField,
        color: "colorName",
    });
}
renderHeatmapCalendar(this.container, calendarData)
```

The `intensity` value maps to the 5-shade color gradient. Higher time values produce darker colors.

---

## Home.md Dashboard Widgets

Home.md surfaces habit data through widget transclusions using Obsidian's block reference syntax (`![[Widget#^blockid]]`).

### Habits Last 7 Days Widget

**File:** `Widgets/Habits Last 7 Days.md`

Contains two transclusion-anchored blocks:

**Block ^1 — Status Table**

A Dataview TABLE showing the last 7 days with per-category emoji status. Uses `choice()` with OR logic to show a single checkmark if any habit in the category was completed:

```
choice(weights | cardio, "check", "cross") AS "Exercise"
```

Queries `FROM "Productivity/Daily Notes"` filtered by `file.ctime > (date(now) - dur(7 days))`.

**Block ^2 — Rolling Progress Bars**

DataviewJS that calculates rolling 7-day completion counts against weekly targets:

```javascript
const filternLastCount = (rows, nlast, ...fields) =>
   rows.filter(p => p.file.day >= moment().subtract(nlast, "d")
     && fields.some(field => p[field])).length;
```

Renders HTML `<progress>` bars with `value/total` labels for each category.

**Widget targets (rolling 7 days):**

| Category | Fields | Target |
|----------|--------|--------|
| Exercise | weights, cardio | 4 |
| Music | guitar, piano, singing, recording | 3 |
| Reading | book_reading, article_reading | 3 |
| Art | modelling, drawing | 2 |
| Coding | coding | 3 |
| Maker | electronics, printing | 2 |
| Entertain | moviestv, videogames | 4 |

**Home.md integration:**

```markdown
# <center>Habit Tracking</center>

> [!multi-column]
> >[!info|wide-2]+ Habits Last 7 Days
> > ![[Habits Last 7 Days#^1]]
>
> >[!info|wide-2]+ Habits Progress
> >![[Habits Last 7 Days#^2]]
```

Uses MCL Multi Column callout syntax with `wide-2` class for equal-width columns. The `+` suffix makes the callouts collapsible (open by default).

---

### Productivity Widget

**File:** `Widgets/Productivity.md`

Year-long heatmap calendar showing daily productivity scores.

```javascript
dv.span("**Productivity**")
const calendarData = {
    colors: {
        green: ["#c6e48b", "#7bc96f", "#49af5d", "#2e8840", "#196127"]
    },
    intensityScaleStart: 0,
    intensityScaleEnd: 10,
    entries: []
}
for (let page of dv.pages('#daily').where(p => p.productivity)) {
    calendarData.entries.push({
        date: page.file.name,
        intensity: page.productivty,
        content: await dv.span(`[](${page.file.name})`), // hover preview
    })
}
renderHeatmapCalendar(this.container, calendarData)
```

- Filters all `#daily` pages where `productivity` is set
- Green 5-shade gradient, scale 0-10
- Empty link content enables Obsidian hover preview on each cell
- Renders a full year of data by default (no year/month filter)

---

### Mood Widget

**File:** `Widgets/Mood.md`

Same architecture as Productivity but with yellow gradient and `mood` field:

```javascript
colors: {
    yellow: ["#fffb8f", "#fff75c", "#fff32a", "#ffea00", "#d4b600"]
}
// ...
intensity: page.mood,
```

**Home.md integration (Self section):**

```markdown
## Self

![[Productivity#^1]]
![[Mood#^1]]
```

Both heatmaps render inline, stacked vertically below the Tasks section.

---

## Supporting Infrastructure

### Heatmap Calendar CSS

**File:** `.obsidian/snippets/heatmap_custom_styling.css`

- Enables `overflow-x: visible` on DataviewJS containers so heatmaps aren't clipped
- Styles hover popups: absolute positioning, background color, z-index layering
- `.hasData:hover .heatmap-calendar-content` — shows content on hover
- `.heatmap-page` class — sets fixed height (500px) for full-page heatmap views

### Date Filter Utilities

**File:** `_scripts/dateFilters.js`

Reusable filter functions for Dataview queries:

```javascript
filterWeekCount(rows, field, filterdate)   // Count rows matching ISO week
filterMonthCount(rows, field, filterdate)  // Count rows matching month
filternLastCount(rows, field, nlast)       // Count rows from last N weeks
```

These are available in DataviewJS blocks via `require()` or inlined directly in templates.

---

## Plugin Dependencies

| Plugin | Role in System |
|--------|---------------|
| **Periodic Notes** | Creates daily/weekly/monthly notes from templates |
| **Templater** | Template variables (`tp.date.now()`, etc.) |
| **Meta Bind** | Toggle inputs, progress bars, sliders in notes |
| **JS Engine** | Reactive conditional rendering of time sliders |
| **Dataview** | TABLE queries and DataviewJS for aggregations |
| **Heatmap Calendar** | `renderHeatmapCalendar()` function for visualizations |
| **Calendar** | Sidebar calendar for daily note navigation |
| **Tasks** | Task queries in weekly/monthly notes |
| **Buttons** | Daily/Weekly/Monthly note creation buttons on Home.md |

---

## Home.md Section Layout

The productivity-related sections appear in this order on Home.md:

1. **Time of Day greeting** — DataviewJS greeting based on hour
2. **Clock** — Embedded iframe digital clock
3. **Periodic Note Buttons** — Daily, Weekly, Monthly creation buttons
4. **Habit Tracking** — Last 7 Days table + Progress bars (multi-column callouts)
5. **Categories** — Card links to vault areas
6. **Tasks** — Task Progress, Time Progress, Post-it Board, upcoming/past-due tasks
7. **Self** — Productivity and Mood year-long heatmaps
8. **Papers** — Papers Read heatmap + newly added papers
