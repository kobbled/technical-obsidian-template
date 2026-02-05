# Bases Databases Documentation

## Overview

The vault uses Obsidian Bases plugin for database-style views of media collections. Each `.base` file defines filters, formulas, and views for querying note collections.

**Current Databases:** 1 (Movie Database)
**CSS Styling:** `bases-cards.css` (property packing technique)

---

## Database Inventory

### Movies (`media/`)

| File | Description | Filter | Sort |
|------|-------------|--------|------|
| `Movie Database.base` | All movies | `media/movies` folder | rating DESC |

---

## .base File Structure

### Basic Structure

```yaml
filters:
  and:
    - file.inFolder("path/to/folder")
    - property == value
formulas:
  formula_name: |-
    expression
views:
  - type: cards|table
    name: "View Name"
    order:
      - property.name
      - formula.formula_name
    sort:
      - property: field
        direction: DESC|ASC
    image: posterurl
```

### Filter Syntax

```yaml
# Folder-based filter
- file.inFolder("media/movies")

# Property equality
- watched == true
- played == false

# Tag filter
- file.tags.includes("#games/board-games")

# Array contains link (view-level filter)
- status == ["[[playing]]"]
- status != ["[[played]]"]

# Empty check
- "!posterurl.isEmpty()"

# Category filter
- Category == "video-games"
```

### View-Level Filters

Views can have their own filters that refine the global filter:

```yaml
views:
  - type: cards
    name: Video Games
    filters:
      and:
        - Category == "video-games"
        - "!posterurl.isEmpty()"
        - status == ["[[playing]]"]
```

---

## Card Styling (Property Packing)

The `bases-cards.css` snippet enables rich card layouts using the "property packing" technique where link hrefs prefixed with `c:` act as CSS class selectors.

### Formula Pattern

```yaml
formulas:
  packed_movie: |-
    [
    link("c: title", file.name),
    link("c: subtitle", year.toString() + "  ·  ★ " + rating.toString()),
    link("c: link-icon", [link(imdburl)]),
    link("c: image-overlay align-bottom-right",
      link("c: stack-vertical gap-smaller margin-small",
        [
          link("c: pill margin-small pill-watched", "✓ Watched"),
          link("c: pill margin-small", "IMDb " + ratingImdb.toString())
        ]
      )
    ),
    link("c: image-overlay align-top-left",
      link("c: stack-vertical gap-smaller margin-small",
        genre.map(link("c: tag font-smaller", value.toString()))
      )
    )
    ]
  spacer_1: ""
```

### Available CSS Classes

| Class | Purpose |
|-------|---------|
| `title` | Bold, 2-line clamped title |
| `subtitle` | Single line with ellipsis |
| `link-icon` | External link icon (bottom-right) |
| `image-overlay` | Positioned over poster image |
| `align-top-left`, `align-top-right`, `align-bottom-left`, `align-bottom-right` | Corner positioning |
| `stack-vertical` | Vertical flex container |
| `gap-small`, `gap-smaller` | Spacing between items |
| `margin-small` | Margin around element |
| `pill` | Rounded badge style |
| `pill-watched` | Green pill (completed status) |
| `pill-unwatched` | Amber pill (pending status) |
| `tag` | Accent-colored label |
| `font-smaller` | Smaller text size |

### Spacer Formula

The `spacer_1: ""` formula adds vertical space to cards. It's hidden via CSS but contributes to card height.

---

## Media Properties Reference

### Movies/TV

| Property | Type | Description |
|----------|------|-------------|
| `category` | text | "Movies" or "TV" |
| `genre` | links | `[["Comedy"], ["Drama"]]` |
| `directors` | links | Director links |
| `cast` | links | Actor links |
| `year` | number | Release year |
| `parental-rating` | text | "PG-13", "TV-MA", etc. |
| `length` | text | Runtime ("97 min") |
| `ratingImdb` | number | IMDb rating (0-10) |
| `rating` | number | Personal rating (0-10) |
| `watched` | checkbox | Watch status |
| `seasons` | list | Season numbers (TV only) |
| `imdburl` | text | IMDb URL |
| `posterurl` | text | Poster image URL |

### Books

| Property | Type | Description |
|----------|------|-------------|
| `category` | text | "books" |
| `Authors` | list | Author names |
| `genre` | list | Genre tags |
| `platform` | links | Reading platform |
| `year` | number | Publication year |
| `url` | text | Goodreads/source URL |
| `ISBN10`, `ISBN13` | text | ISBN numbers |
| `pages` | number | Page count |
| `read` | checkbox | Read status |
| `status` | links | `[["bought"]]`, `[["reading"]]` |
| `userRating` | number | Personal rating |
| `posterurl` | text | Cover image URL |

### Video Games

| Property | Type | Description |
|----------|------|-------------|
| `category` | text | "video-games" |
| `genre` | links | Genre links |
| `developer` | text | Developer name |
| `system` | links | `[["PC (Games)"]]`, `[["Playstation 5"]]` |
| `platform` | links | `[["Steam"]]`, `[["GOG"]]` |
| `year` | number | Release year |
| `modes` | list | Game modes |
| `url` | list | IGDB URLs |
| `rating` | number | Personal rating (0-10) |
| `played` | checkbox | Has been played |
| `installed` | checkbox | Currently installed |
| `status` | links | `[["playing"]]`, `[["on-hold"]]`, `[["bought"]]`, `[["played"]]` |
| `hours-played` | number | Total hours played |
| `price` | number | Purchase price |
| `date` | date | Purchase date |
| `install-location` | text | Drive/folder location |
| `posterurl` | text | Cover image URL |

### Board/TTRPG Games

| Property | Type | Description |
|----------|------|-------------|
| `category` | text | "games" |
| `developer` | text | Publisher/designer |
| `year` | number | Release year |
| `url` | text | BoardGameGeek URL |
| `rating` | number | BGG rating |
| `bought` | checkbox | Owned status |
| `vendor` | links | Purchase source |
| `type` | links | Game type (TTRPG only) |
| `posterurl` | text | Box art URL |
| `tags` | tags | `#games/board-games` or `#games/table-top` |

---

## Example: Movie Database

The included `Movie Database.base` demonstrates the card styling pattern:

```yaml
filters:
  and:
    - file.inFolder("media/movies")
formulas:
  packed_movie: |-
    [
    link("c: title", file.name),
    link("c: subtitle",
      if(year, year.toString() + if(rating, "  ·  ★ " + rating.toString() + "/10", ""), "")
    ),
    link("c: link-icon", [link(imdburl)]),
    link("c: image-overlay align-bottom-right",
      link("c: stack-vertical gap-smaller margin-small",
        [
          link("c: pill margin-small " + if(watched, "pill-watched", "pill-unwatched"),
            if(watched, "✓ Watched", "Unwatched")
          ),
          link("c: pill margin-small",
            if(ratingImdb, "IMDb " + ratingImdb.toString(), "")
          )
        ]
      )
    ),
    link("c: image-overlay align-top-left",
      link("c: stack-vertical gap-smaller margin-small",
        if(genre,
          genre.map(link("c: tag font-smaller", value.toString())),
          ""
        )
      )
    )
    ]
  spacer_1: ""
views:
  - type: cards
    name: Movies
    order:
      - formula.packed_movie
      - formula.spacer_1
    sort:
      - property: rating
        direction: DESC
      - property: ratingImdb
        direction: DESC
    image: posterurl
```

---

## Recommended Additional Databases

Based on the production vault patterns, consider adding:

| Database | Filter | Purpose |
|----------|--------|---------|
| `Movies Watchlist.base` | `watched == false` | Unwatched movies |
| `Video Games Database.base` | folder filter | All games |
| `Video Games Playing.base` | `status == ["[[playing]]"]` | Currently playing |
| `Board Games Database.base` | `#games/board-games` | Board game collection |

---

## Limitations

### Not Supported in Bases

- **Date aggregation**: Monthly spending reports require Dataview (groupBy month + sum)
- **Complex JavaScript**: Regex extraction, custom functions
- **Dynamic search**: Frontmatter-based search terms

### Keep Using Dataview For

- Complex aggregations and date math
- Regex-based content extraction
- Integration with custom JavaScript functions
