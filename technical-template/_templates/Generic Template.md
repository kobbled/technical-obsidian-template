
---
tag: [note/knowledge]
<%*
  let folder = await tp.system.prompt("Move to Folder")
  let category = await tp.system.prompt("Category for Note")
  
  let title = tp.file.title
  if (title.startsWith("Untitled") || title.startsWith("New Document")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename(`${title}`);
  }
%>
---
<% await tp.file.move("/"+ `${folder}` +"/" + `${title}`) %>
----
**Created**:: <%tp.file.creation_date("YYYY-MM-DD")%>
**Modified**:: <% tp.file.last_modified_date("YYYY-MM-DD") %>
**Category**:: #<%`${category}`%>
**Tags**:: 
**Links**:: 

----