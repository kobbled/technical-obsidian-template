
```dataview
TABLE without id
   file.link AS "Day",
   choice(weights | cardio,"✅","⛔") AS "🤾‍♀️",
   choice(guitar | piano | singing | recording,"✅","⛔") AS "🎷",
   choice(book_reading | article_reading,"✅","⛔") AS "📖",
   choice(coding | electronics | printing,"✅","⛔") AS "💻",
   choice(modelling | drawing,"✅","⛔") AS "🎨",
   choice(videogames | moviestv,"✅","⛔") AS "🎥"
FROM "Productivity/Daily Notes"
WHERE type = "daily" AND file.ctime > (date(now) - dur(7 days))
SORT file.name ASC
```
^1


```dataviewjs
const lastdays = 7;

const filternLastCount = (rows, nlast, ...fields) =>
   rows.filter(p => p.file.day >= moment().subtract(nlast, "d") && fields.some(field => p[field])).length;

//print progress bar
function progress(value, total) {
    let pct = value/total * 100;
    return `<progress value="${parseInt(pct)}" max="100"></progress> | ${value}/${total}`
}

dv.span(`${progress(filternLastCount(dv.pages('#daily'), lastdays, 'weights', 'cardio'), 4)} **Exercise**
${progress(filternLastCount(dv.pages('#daily'), lastdays, 'guitar', 'piano', 'singing', 'recording'), 3)} **Music**
${progress(filternLastCount(dv.pages('#daily'), lastdays, 'book_reading', 'article_reading'), 3)} **Reading**
${progress(filternLastCount(dv.pages('#daily'), lastdays, 'modelling', 'drawing'), 2)} **Art**
${progress(filternLastCount(dv.pages('#daily'), lastdays, 'coding'), 3)} **Coding**
${progress(filternLastCount(dv.pages('#daily'), lastdays, 'electronics', 'printing'), 2)} **Maker**
${progress(filternLastCount(dv.pages('#daily'), lastdays, 'moviestv', 'videogames'), 4)} **Entertain**`);

```
^2

