**Paper Status Tags**:

#to-read #reading #read 

```dataviewjs
for (let group of dv.pages('#paper').groupBy(p => p.status)) {
  dv.header(3, group.key);
  dv.table(["Name", "Year", "Tags"],
    group.rows
      .map(k => [
        k.file.link, 
        k.year,
        k.tags.slice(0,3).join(', ').concat('\n', k.tags.slice(3,6).join(', '))
      ]
    )
  );
}
```
