---
<%*
  let title = tp.file.title
  if (title.startsWith("Untitled") || title.startsWith("New Document")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename(`${title}`);
  }
%>
Created: <%tp.file.creation_date("YYYY-MM-DD")%>
Modified: <%tp.file.last_modified_date("YYYY-MM-DD")%>
Category: personal
Folder: cooking
References: ""
tags:
  - note/info
  - personal
  - personal/food/cooking
Links:
type:
posterurl: <%- title %>.jpeg
---

<% await tp.file.move("/Personal/Cooking/recipes/" + `${title}`) %>

**poster**::

## Recipe


## Ingredients

