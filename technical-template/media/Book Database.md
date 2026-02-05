---
Created: 2024-08-17
Modified: 2024-09-22
Category: Books
Folder: Books
References: 
tags:
  - note/info
  - Books
Links: 
cssclasses:
  - cards
  - cards-cover
  - cards-2-3
  - table-100
  - wide-page
searchterm: 
---

categoryterm:: #books

```dataviewjs
let searchterm = dv.current().categoryterm;
let moviesearch = dv.current().searchterm;
let pages = dv.pages(searchterm)
	.where(p => p.posterurl != undefined && p.file.name !== "Book Template")
	.filter(p => !moviesearch || p.file.name.toLowerCase().includes(moviesearch.toLowerCase()))
	.sort(p => p.userRating, 'desc');

// console.log(dv.current());
// Create table  
dv.table(["Poster", "File", "Author", "Year", "Pages", "Rating"],  
  pages   
    .map(p => [    
		 	   `<img class="myTableImg" src="${p.posterurl}">`,
				p.file.link,
				p.authors,
				p.year,
				p.pages,
				p.userrating
			  ])  
);
```