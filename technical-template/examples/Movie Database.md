---
cssClasses: [cards, cards-cover, cards-2-3, table-100, wide-page]
---
#dataview
searchterm:: #Movies

Recreated from [Cards - Minimal Documentation](https://minimal.guide/Block+types/Cards)

```dataviewjs
let searchterm = dv.current().searchterm;  
let pages = dv.pages(searchterm).where(p => p.posterurl != undefined && p.file.name !== "Movie Template").sort(p => p.ratingImdb, 'desc');  
// console.log(dv.current());
// Create table  
dv.table(["Poster", "File", "Year", "Director", "Rating"],  
  pages   
    .map(p => [    
		 	   `<img class="myTableImg" src="${p.posterurl}">`,
				p.file.link,
				p.year,
				p.directors,
				p.ratingImdb
			  ])  
);
```




