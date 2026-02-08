```dataviewjs
dv.span("** 😀 Mood 😀**")
const calendarData = {
colors: {
	yellow: ["#fffb8f", "#fff75c", "#fff32a", "#ffea00", "#d4b600"]
},
intensityScaleStart: 0,    // (optional) defaults to lowest value passed to entries.intensity
intensityScaleEnd: 10,     // (optional) defaults to highest value passed to entries.intensity
entries: []
}
for(let page of dv.pages('#daily').where(p=>p.mood)){
calendarData.entries.push({
date: page.file.name,
intensity: page.mood,
content: await dv.span(`[](${page.file.name})`), //for hover preview
})
}
renderHeatmapCalendar(this.container, calendarData)
```
^1
