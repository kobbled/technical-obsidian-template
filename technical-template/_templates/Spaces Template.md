---
<%*
  const folders = this.app.vault.getAllLoadedFiles().filter(i => i.children).map(folder => folder.path);
  const folderPath = await tp.system.suggester(folders, folders);
  let category = await tp.system.prompt("Category for Note")
  let subcategory = await tp.system.prompt("Folder for Note")
  let subfolder = await tp.system.prompt("Sub Category for Note")
  let title = tp.file.title
  if (title.startsWith("Untitled") || title.startsWith("New Document")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename(`${title}`);
  }
%>
Created: <%tp.file.creation_date("YYYY-MM-DD")%>
Modified: <%tp.file.last_modified_date("YYYY-MM-DD")%>
Category: "<%`${category}`%>"
Folder: "<%`${subcategory}`%>"
<%* if (subfolder) { %>
Subfolder: "<%`${subfolder}`%>"
<%* } %>
References:
Tags: [note/info, <%`${category}`%>]
Links: 
---

<% await tp.file.move("/"+ `${folderPath}` +"/" + `${title}`) %>