---
cssClass: wide-page, hide-properties
---
**Paper Status Tags**:

#paper/status/to-read #paper/status/reading #paper/status/read 

```dataviewjs
for (let group of dv.pages('#paperitem').groupBy(p => p.status)) {
  dv.header(3, group.key);
  dv.table(["Name", "Year", "Priority", "Value"],
    group.rows
      .map(k => [
        k.file.link, 
        k.year,
        k.priority,
        k.importance
      ]
    )
  );
}
```
