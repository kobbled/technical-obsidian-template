```dataviewjs
dv.span("** Papers Read 📝**")
const calendarData = {
    year: 2023,  // (optional) defaults to current year
    colors: {    // (optional) defaults to green
        blue:        ["#8cb9ff", "#69a3ff", "#428bff", "#1872ff", "#0058e2"], // first entry is considered default if supplied
        green:       ["#c6e48b", "#7bc96f", "#49af5d", "#2e8840", "#196127"],
        red:         ["#ff9e82", "#ff7b55", "#ff4d1a", "#e73400", "#bd2a00"],
        orange:      ["#ffa244", "#fd7f00", "#dd6f00", "#bf6000", "#9b4e00"],
        pink:        ["#ff96cb", "#ff70b8", "#ff3a9d", "#ee0077", "#c30062"],
        orangeToRed: ["#ffdf04", "#ffbe04", "#ff9a03", "#ff6d02", "#ff2c01"]
    },
    showCurrentDayBorder: true, // (optional) defaults to true
    defaultEntryIntensity: 10,   // (optional) defaults to 4
    intensityScaleStart: 10,    // (optional) defaults to lowest value passed to entries.intensity
    intensityScaleEnd: 100,     // (optional) defaults to highest value passed to entries.intensity
    entries: [],                // (required) populated in the DataviewJS loop below
}

const countRead = (status)=>{
	return status ? 10 : 0;
}

const convertDate = (date)=>{
	var dateformat = "YYYY-MM-DD";
	if (date === null) {
		return "";
	}
	return moment(date.toString()).format(dateformat);
}

//DataviewJS loop
for (let page of dv.pages("#paperitem").where(p => p.status === "#paper/status/read")) {
	// dv.span("<br>" + page.file.name) // uncomment for troubleshooting
    calendarData.entries.push({
        date: convertDate(page.date_read),
        intensity: countRead(page.status),
        content: await dv.span(`[[${page.file.name}|]]`),
    })
}

renderHeatmapCalendar(this.container, calendarData)
```
^1