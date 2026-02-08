
```dataviewjs
dv.span("**🏋️ Productivity 🏋️**")
const calendarData = {
colors: {
	green: ["#c6e48b", "#7bc96f", "#49af5d", "#2e8840", "#196127"]
},
intensityScaleStart: 0,    // (optional) defaults to lowest value passed to entries.intensity
intensityScaleEnd: 10,     // (optional) defaults to highest value passed to entries.intensity
entries: []
}
for(let page of dv.pages('#daily').where(p=>p.productivity)){
calendarData.entries.push({
date: page.file.name,
intensity: page.productivty,
content: await dv.span(`[](${page.file.name})`), //for hover preview
})
}
renderHeatmapCalendar(this.container, calendarData)
```
^1
