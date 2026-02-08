---
cssclasses:
  - wide-page
  - hide-properties
  - heatmap-page
---
```dataviewjs
dv.span("** Notes Added 📝**")
const today = new Date();
const calendarData = {
    year: today.year,  // (optional) defaults to current year
    colors: {    // first entry is considered default if supplied
        blue:        ["#8cb9ff", "#69a3ff", "#428bff", "#1872ff", "#0058e2"], 
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

const getYear = (date)=>{
	var dateformat = "YYYY";
	if (date === null) {
		return "";
	}
	return moment(date.toString()).format(dateformat);
}

//DataviewJS loop
let data = dv.pages("#note/knowledge").filter(p => p.created !== null);
let groups = data.groupBy(p => p.created);
let max = Math.max.apply(Math, groups.map(function(o) { return o.rows.length; })); // calculates the maximum number of notes on a single day


for (let group of groups) 
{
	if (group.key) {
	
		let str = "";
		str += "<br>";
		for (let row of group.rows) {
			str += `<br> - [[${row.file.name}]]`;
		}
	
		calendarData.entries.push({
			date: convertDate(group.key), // (required) Format YYYY-MM-DD
			intensity: (120 * group.rows.length / max),
			// the line above normalizes the amount of notes throughout the heatmap
			content: dv.span(`${group.rows.length} notes on ${convertDate(group.key)} ${str}`)
		})
	}
}

renderHeatmapCalendar(this.container, calendarData)
```
^1