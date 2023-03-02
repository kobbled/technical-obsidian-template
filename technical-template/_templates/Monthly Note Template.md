---
type: monthly
month: <% tp.date.now("YYYY-MM") %>
banner: "https://static.wikia.nocookie.net/starwars/images/a/ae/SenateDistrict-POP.png/revision/latest?cb=20130519183729"
banner_y: 0.3
cssClass: wide-page, table-100
---

## Month: **{{date:gggg-MM}}**

---
### Tags Used
```dataview
LIST WITHOUT ID utags
FLATTEN tags AS utags
WHERE type = "daily" AND month = date({{date:gggg-MM}}) 
GROUP BY utags
```

---
### New Links
```dataview
LIST bullet.text
FLATTEN file.lists as bullet
WHERE type = "daily" AND month = date({{date:gggg-MM}}) AND meta(bullet.section).subpath = "Discovered Links"
```

---
### New Notes
```dataview
LIST bullet.text
FLATTEN file.lists as bullet
WHERE type = "daily" AND month = date({{date:gggg-MM}}) AND meta(bullet.section).subpath = "New Notes"
```

---
### Tasks
```dataview
TASK
WHERE type = "daily" AND month = date({{date:gggg-MM}})
```

---