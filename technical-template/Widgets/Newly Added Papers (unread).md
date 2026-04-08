```dataview
table 
	year, 
	priority,
	importance
from #paperitem
where (status != "paper/status/read")
sort date_added desc
limit 10
```
^1
