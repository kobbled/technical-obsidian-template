---
<%*
  const folders = this.app.vault.getAllLoadedFiles().filter(i => i.children).map(folder => folder.path);
  const folderPath = await tp.system.suggester(folders, folders);
  let category = await tp.system.prompt("Category for Note")
  let subcategory = await tp.system.prompt("Sub Category for Note")
  
  let title = tp.file.title
  if (title.startsWith("Untitled") || title.startsWith("New Document")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename(`${title}`);
  }
%>
Created: <%tp.file.creation_date("YYYY-MM-DD")%>
Modified: <% tp.file.last_modified_date("YYYY-MM-DD") %>
Category: "<%`${category}`%>"
Sub-category: "<%`${subcategory}`%>"
Links: 
tags: [note/knowledge]
---

<% await tp.file.move("/"+ `${folderPath}` +"/" + `${title}`) %>
