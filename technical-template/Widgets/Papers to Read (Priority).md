```dataview
table 
	dateformat(date_added, "yyyy-MM-dd") AS "Date Added",
	year AS "Year Published", 
	priority,
	importance
from #paperitem
where (status != "paper/status/read")
sort priority, date_added desc
limit 10
```
^1