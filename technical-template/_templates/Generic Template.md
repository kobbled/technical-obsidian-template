
---
<%*
  let folder = await tp.system.prompt("Move to Folder")
  
  let title = tp.file.title
  if (title.startsWith("Untitled") || title.startsWith("New Document")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename(`${title}`);
  }
  
  let author = await tp.system.prompt("Author")
%>
---

<% await tp.file.move("/"+ `${folder}` +"/" + `${title}`) %>
**Author**::  <% `${author}` %>
**Created**:: <%tp.file.creation_date("YYYY-MM-DD")%>
**Modified**:: <% tp.file.last_modified_date("YYYY-MM-DD") %>
**Links**:: 
**Tags**:: 