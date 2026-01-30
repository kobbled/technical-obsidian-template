---
type: monthly
tags: monthly
month: <% tp.date.now("YYYY-MM") %>
banner: "![[ezgif-3-0d2e0926ac.gif]]"
banner_y: 0.5
cssClasses: hide-properties

---

## Month: **{{date:gggg-MM}}**

### Habit Tracking

```dataviewjs
dv.span("**🏋️ Exercise 🏋️**")
const calendarData = {
    year: <% tp.date.now("YYYY") %>,
    month: <% tp.date.now("M") %>,
    colors: {
		blue: ["#8cb9ff", "#69a3ff", "#428bff", "#1872ff", "#0058e2"], 
        red: ["#ff9e82","#ff7b55","#ff4d1a","#e73400","#bd2a00"],
    },
    entries: []
}
for(let page of dv.pages("#daily").where(p=> (p.weights || p.cardio) && p.file.day.month == <% tp.date.now("M") %>)){
    if (page.weights) {
	    calendarData.entries.push({
	        date: page.file.name,
	        intensity: page.weightstime,
	        content: dv.span("💪 " + page.weightstime + "min " + page.file.name),
			color: "red",
	    });
	};
	if (page.cardio) {
		calendarData.entries.push({
	        date: page.file.name,
	        intensity: page.cardiotime,
	        content: dv.span("🏃‍♂️" + page.cardiotime + "min " + page.file.name),
			color: "blue",
	    });
	};
}
renderHeatmapCalendar(this.container, calendarData)
```

```dataviewjs
dv.span("**🎵 Music 🎵**")
const calendarData = {
    year: <% tp.date.now("YYYY") %>,
    month: <% tp.date.now("M") %>,
    colors: {
		blue: ["#8cb9ff", "#69a3ff", "#428bff", "#1872ff", "#0058e2"], 
        pink: ["#ff96cb", "#ff70b8", "#ff3a9d", "#ee0077", "#c30062"],
        purple: ["#b392f0", "#8b69e5", "#5f3dc4", "#3a1d89", "#1d1053"],
        orange: ["#ffa244", "#fd7f00", "#dd6f00", "#bf6000", "#9b4e00"]
    },
    entries: []
}
for(let page of dv.pages("#daily").where(p=> (p.recording || p.singing || p.guitar || p.piano) && p.file.day.month == <% tp.date.now("M") %>)){	
    if (page.recording) {
	    calendarData.entries.push({
	        date: page.file.name,
	        intensity: 5,
	        content: "💽" + row.file.name,
			color: "blue",
	    });
	};
	if (page.singing) {
		calendarData.entries.push({
	        date: page.file.name,
	        intensity: 5,
	        content: "🎤" + page.file.name,
			color: "purple",
	    });
	};
	if (page.guitar) {
		calendarData.entries.push({
	        date: page.file.name,
	        intensity: 5,
	        content: "🎸" + page.file.name,
			color: "pink",
	    });
	};
	if (page.piano) {
		calendarData.entries.push({
	        date: page.file.name,
	        intensity: 5,
	        content: "🎹" + page.file.name,
			color: "orange",
	    });
	};
}
renderHeatmapCalendar(this.container, calendarData)
```

```dataviewjs
dv.span("**🎨 Art 🎨**")
const calendarData = {
    year: <% tp.date.now("YYYY") %>,
    month: <% tp.date.now("M") %>,
    colors: {
		yellow: 	 ["#fffb8f", "#fff75c", "#fff32a", "#ffea00", "#d4b600"],
        orange:      ["#ffa244", "#fd7f00", "#dd6f00", "#bf6000", "#9b4e00"]
    },
    entries: []
}
for(let page of dv.pages("#daily").where(p=> (p.modelling || p.drawing) && p.file.day.month == <% tp.date.now("M") %>)){
    if (page.modelling) {
	    calendarData.entries.push({
	        date: page.file.name,
	        intensity: page.modellingtime,
	        content: "🗽 " + page.modellingtime,
			color: "yellow",
	    });
	};
	if (page.drawing) {
		calendarData.entries.push({
	        date: page.file.name,
	        intensity: page.drawingtime,
	        content: "✏️ " + page.drawingtime,
			color: "orange",
	    });
	};
}
renderHeatmapCalendar(this.container, calendarData)
```

```dataviewjs
dv.span("**📖 Reading **")
const calendarData = {
    year: <% tp.date.now("YYYY") %>,
    month: <% tp.date.now("MM") %>,
    colors: {
		blue:        ["#8cb9ff", "#69a3ff", "#428bff", "#1872ff", "#0058e2"],
        green:       ["#c6e48b", "#7bc96f", "#49af5d", "#2e8840", "#196127"]
    },
    entries: []
}
for(let page of dv.pages("#daily").where(p=> (p.book_reading || p.article_reading) && p.file.day.month == 2)){
    if (page.book_reading) {
	    calendarData.entries.push({
	        date: page.file.name,
	        intensity: page.readingtime,
	        content: "📘 " + page.readingtime,
			color: "blue",
	    });
	};
	if (page.article_reading) {
		calendarData.entries.push({
	        date: page.file.name,
	        intensity: page.readingtime,
	        content: "📰 " + page.readingtime,
			color: "green",
	    });
	};
}
renderHeatmapCalendar(this.container, calendarData)
```

```dataviewjs
dv.span("**⌨️ Maker ⌨️**")
const calendarData = {
	year: <% tp.date.now("YYYY") %>,
	month: <% tp.date.now("M") %>,
	colors: {
		yellow: ["#fffb8f", "#fff75c", "#fff32a", "#ffea00", "#d4b600"],
		green: ["#c6e48b", "#7bc96f", "#49af5d", "#2e8840", "#196127"]
	},
	entries: []
}
for(let page of dv.pages("#daily").where(p=> (p.coding || p.electronics || p.printing) && p.file.day.month == <% tp.date.now("M") %>)){
	if (page.coding) {
		calendarData.entries.push({
			date: page.file.name,
			intensity: page.codingtime,
			content: "💻 " + page.codingtime,
			color: "yellow",
		});
	};
	if (page.electronics || page.printing) {
		calendarData.entries.push({
			date: page.file.name,
			intensity: page.makertime,
			content: "🤖 " + page.makertime,
			color: "green",
		});
	};
}
renderHeatmapCalendar(this.container, calendarData)
```


---
### Tasks
```tasks
created in {{date:YYYY-MM}}
sort by priority
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

---
### Links to Sort
```dataview
LIST bullet.text
FLATTEN file.lists as bullet
WHERE type = "daily" AND month = date({{date:gggg-MM}}) AND meta(bullet.section).subpath = "Links"
```