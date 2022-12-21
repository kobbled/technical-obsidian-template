**Paper Status Tags**:

#to-read #reading #read 


## To Read

```dataview 
TABLE file.name AS "File" FROM #paper
WHERE status = "#to-read"
```


## Currently Reading

```dataview 
TABLE file.name AS "File" FROM #paper
WHERE status = "#reading"
```


## Finished

```dataview 
TABLE file.name AS "File" FROM #paper
WHERE status = "#read"
```
