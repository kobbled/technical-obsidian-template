---
Created: 2025-04-26
Modified: 2025-04-26
Category: personal
Folder: video-games
References: 
tags:
  - note/info
  - video-games
Links: 
cssclasses:
  - cards
  - cards-cover
  - cards-2-3
  - table-100
  - wide-page
gamesearch: 
---

categoryterm:: #video-games

```dataviewjs
let searchTerm = dv.current().categoryterm; // Search for files with the video-games tag
let gameSearchInput = dv.current().gamesearch;
let pages = dv.pages(searchTerm)
    .where(p => p.posterurl != undefined && p.file.name !== "Video Game Template")
    .filter(p => !gameSearchInput || p.file.name.toLowerCase().includes(gameSearchInput.toLowerCase()))
    .sort(p => p.rating || 0, 'desc');

// Create table
dv.table(["Poster", "File", "Rating"],
  pages
    .map(p => [
      `<img class="myTableImg" src="${p.posterurl}">`,
				p.file.link,
				p.rating
    ])
);
```

