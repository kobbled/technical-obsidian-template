%%Made by https://github.com/SlRvb %%

```dataviewjs

const today = DateTime.now()
const currentDate = new Date();
const daysSinceMonday = (currentDate.getDay() === 0) ? 6 : currentDate.getDay() - 1;

const endOfYear = {
    year: today.year,
    month: 12,
    day: 31
}

function progress(type) {
    let value;
    
    switch(type) {
        case "year":
            value = today.month / 12 * 100
            break;
        case "month":
            value = today.day / today.daysInMonth * 100
            break;
        case "week":
            value = (today.hour + daysSinceMonday * 24 ) / (7 * 24) * 100
            break;
    }
    return `<progress value="${parseInt(value)}" max="100"></progress> | ${parseInt(value)} %`
}

dv.span(`
|  | Progress  | Percentage |
| --- | --- |:---:|
| **Year** | ${progress("year")}
| **Month**| ${progress("month")}
| **Week**| ${progress("week")}
`)
```
^1