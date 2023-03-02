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
### Tasks Progress

```dataviewjs
// get all tasks for the month
let dateFilter = dv.date("{{date:gggg-MM}}");
let tasks = dv.pages().where(p => p.type == "daily" && p.month.ts === dateFilter.ts).file.tasks;

//calculate total and completed tasks this month
let totalMonth = tasks.length;
let completedMonth = tasks.where(t => t.completed).length;

//print progress bar
function progress(value, total) {
    let pct = value/total * 100;
    return `<progress value="${parseInt(pct)}" max="100"></progress> | ${parseInt(pct)} %`
}

//print progress bars in table
dv.span(`
|     | Progress  | Percentage |
| --- | --- |:---:|
| **Tasks Completed**| ${progress(completedMonth, totalMonth)}  |
`)

```