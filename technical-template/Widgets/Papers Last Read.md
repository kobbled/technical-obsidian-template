---
cssClass: wide-page, hide-properties
---

```dataviewjs
const today = new Date();
const nMonthsBack = new Date();
nMonthsBack.setMonth(today.getMonth() - 4);

dv.table(
	["name", "year", "priority", "importance"], 
	dv.pages("#paperitem")
	.where(p => p.date_read >= nMonthsBack && p.date_read <= today)
    .sort(p => p.date_read, 'desc')
    .map(p => [p.file.link, p.year, p.priority, p.importance])
  );
```
^1
