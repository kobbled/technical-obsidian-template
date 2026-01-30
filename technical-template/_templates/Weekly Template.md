---
type: weekly
tags: weekly
week: <% tp.date.now("YYYY-WW") %>
month: <% tp.date.now("YYYY-MM") %>
banner: "![[daily-note-banner.gif]]"
banner_y: 0.38
cssClass: hide-h3, hide-properties
weightLBS:  
---

## Week: **{{monday:gggg-MM-DD}} ** - **{{sunday:gggg-MM-DD}}**

### Weight

> [!info]+ Weight
> ```meta-bind
> INPUT[progressBar( minValue(120), maxValue(180)):weightLBS]

### Habit Tracking Overview

#### Exercise
```dataview
TABLE without id
   file.link AS "Day",
   choice(weights,"✅","⛔") AS "💪",
   weightstime AS "🕐",
   choice(cardio,"✅","⛔") AS "🏃",
   cardiotime AS "🕑"
FROM "Productivity/Daily Notes"
WHERE type = "daily" AND week = "<% tp.date.now("YYYY-WW") %>"
SORT file.name ASC
```

```dataviewjs
const filterWeekCount = (rows, filterdate, ...fields) =>
      rows.filter(p => p.week == filterdate && fields.some(field => p[field])).length;
   
//print progress bar
function progress(value, total) {
    let pct = value/total * 100;
    return `<progress value="${parseInt(pct)}" max="100"></progress> | ${value}/${total}`
}

dv.span(`${progress(filterWeekCount(dv.pages('#daily'), '<% tp.date.now("YYYY-WW") %>', 'weights'), 3)} **weights**
${progress(filterWeekCount(dv.pages('#daily'), '<% tp.date.now("YYYY-WW") %>', 'cardio'), 2)} **cardio**`);
```

#### Music
```dataview
TABLE without id
   file.link AS "Day",
   choice(recording,"✅","⛔") AS "💽",
   choice(guitar,"✅","⛔") AS "🎸",
   choice(singing,"✅","⛔") AS "🎤",
   choice(piano,"✅","⛔") AS "🎹"
FROM "Productivity/Daily Notes"
WHERE type = "daily" AND week = "<% tp.date.now("YYYY-WW") %>"
SORT file.name ASC
```

```dataviewjs
const filterWeekCount = (rows, filterdate, ...fields) =>
      rows.filter(p => p.week == filterdate && fields.some(field => p[field])).length;
   
//print progress bar
function progress(value, total) {
    let pct = value/total * 100;
    return `<progress value="${parseInt(pct)}" max="100"></progress> | ${value}/${total}`
}

dv.span(`${progress(filterWeekCount(dv.pages('#daily'), '<% tp.date.now("YYYY-WW") %>', 'recording'), 1)} **recording**
${progress(filterWeekCount(dv.pages('#daily'), 'guitar', '<% tp.date.now("YYYY-WW") %>', 'piano'), 3)} **instruments**
${progress(filterWeekCount(dv.pages('#daily'), '<% tp.date.now("YYYY-WW") %>', 'singing'), 2)} **singing**`);
```

#### Maker
```dataview
TABLE without id
   file.link AS "Day",
   choice(coding,"✅","⛔") AS "💻",
   choice(electronics,"✅","⛔") AS "🔌",
   choice(printing,"✅","⛔") AS "🏗️",
   choice(moding,"✅","⛔") AS "🤖"
FROM "Productivity/Daily Notes"
WHERE type = "daily" AND week = "<% tp.date.now("YYYY-WW") %>"
SORT file.name ASC
```

```dataviewjs
const filterWeekCount = (rows, filterdate, ...fields) =>
      rows.filter(p => p.week == filterdate && fields.some(field => p[field])).length;
   
//print progress bar
function progress(value, total) {
    let pct = value/total * 100;
    return `<progress value="${parseInt(pct)}" max="100"></progress> | ${value}/${total}`
}

dv.span(`${progress(filterWeekCount(dv.pages('#daily'), '<% tp.date.now("YYYY-WW") %>', 'coding'), 2)} **coding**
${progress(filterWeekCount(dv.pages('#daily'), '<% tp.date.now("YYYY-WW") %>', 'electronics', 'printing'), 2)} **maker**
${progress(filterWeekCount(dv.pages('#daily'), '<% tp.date.now("YYYY-WW") %>', 'moding'), 2)} **moding**`);
```
#### Art
```dataview
TABLE without id
   file.link AS "Day",
   choice(modelling,"✅","⛔") AS "🗽",
   modellingtime AS "🕐",
   choice(drawing,"✅","⛔") AS "🏗️",
   drawingtime AS "🕑"
FROM "Productivity/Daily Notes"
WHERE type = "daily" AND week = "<% tp.date.now("YYYY-WW") %>"
SORT file.name ASC
```

```dataviewjs
const filterWeekCount = (rows, filterdate, ...fields) =>
      rows.filter(p => p.week == filterdate && fields.some(field => p[field])).length;
   
//print progress bar
function progress(value, total) {
    let pct = value/total * 100;
    return `<progress value="${parseInt(pct)}" max="100"></progress> | ${value}/${total}`
}

dv.span(`${progress(filterWeekCount(dv.pages('#daily'), '<% tp.date.now("YYYY-WW") %>', 'modelling', 'drawing'), 2)} **Art**`);
```

#### Reading
```dataview
TABLE without id
   file.link AS "Day",
   choice(book_reading,"✅","⛔") AS "📖",
   choice(article_reading,"✅","⛔") AS "📰",
   readingtime AS "🕑"
FROM "Productivity/Daily Notes"
WHERE type = "daily" AND week = "<% tp.date.now("YYYY-WW") %>"
SORT file.name ASC
```

```dataviewjs
const filterWeekCount = (rows, filterdate, ...fields) =>
      rows.filter(p => p.week == filterdate && fields.some(field => p[field])).length;
   
//print progress bar
function progress(value, total) {
    let pct = value/total * 100;
    return `<progress value="${parseInt(pct)}" max="100"></progress> | ${value}/${total}`
}

dv.span(`${progress(filterWeekCount(dv.pages('#daily'), '<% tp.date.now("YYYY-WW") %>', 'book_reading'), 2)} **Books**
${progress(filterWeekCount(dv.pages('#daily'), '<% tp.date.now("YYYY-WW") %>', 'article_reading'), 2)} **Articles**
${progress(filterWeekCount(dv.pages('#daily'), '<% tp.date.now("YYYY-WW") %>', 'obsidian'), 2)} **Obsidian**`);
```


### Tasks
```tasks
created in {{date:gggg-[W]ww}}
sort by priority
```

### Notes
![[{{monday:gggg-MM-DD}}#Quick Notes]]
![[{{tuesday:gggg-MM-DD}}#Quick Notes]]
![[{{wednesday:gggg-MM-DD}}#Quick Notes]]
![[{{thursday:gggg-MM-DD}}#Quick Notes]]
![[{{friday:gggg-MM-DD}}#Quick Notes]]
![[{{saturday:gggg-MM-DD}}#Quick Notes]]
![[{{sunday:gggg-MM-DD}}#Quick Notes]]

### Links to sort
![[{{monday:gggg-MM-DD}}#Links]]
![[{{tuesday:gggg-MM-DD}}#Links]]
![[{{wednesday:gggg-MM-DD}}#Links]]
![[{{thursday:gggg-MM-DD}}#Links]]
![[{{friday:gggg-MM-DD}}#Links]]
![[{{saturday:gggg-MM-DD}}#Links]]
![[{{sunday:gggg-MM-DD}}#Links]]
