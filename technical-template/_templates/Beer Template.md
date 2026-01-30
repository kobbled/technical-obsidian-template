---
<%*
  const folders = this.app.vault.getAllLoadedFiles().filter(i => i.children).map(folder => folder.path);
  const folderPath = await tp.system.suggester(folders, folders);

  let title = tp.file.title
  if (title.startsWith("Untitled") || title.startsWith("New Document")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename(`${title}`);
  }

  const brewery = await tp.system.prompt("Brewery");
  const url = await tp.system.prompt("untappd URL");

  const style = await tp.system.suggester(
    ["IPA", "Lager", "Stout", "Belgian", "Pilsner", "Sour", "Wheat"], 
    ["IPA", "Lager", "Stout", "Belgian", "Pilsner", "Sour", "Wheat"], 
    false, 
    "Beer Style"
  );
  const abv = await tp.system.prompt("ABV %");
  const ibu = await tp.system.prompt("IBU (0-100)");
  const rating = await tp.system.prompt("Rating (0-5)");
  const posterurl = await tp.system.prompt("Beer Image URL");
%>
Created: <%tp.file.creation_date("YYYY-MM-DD")%>
Modified: <%tp.file.last_modified_date("YYYY-MM-DD")%>
Category: "Food/Drinks"
Folder: "Food & Drink"
Subfolder: "Beer"
brewery: <%`${brewery}`%>
abv: <%`${abv}`%>
ibu: <%`${ibu}`%>
style: <%`${style}`%>
rating: <%`${rating}`%>
Links: [<%`${url}`%>]
Tags: [note/info, personal/food/drinks, personal/food/drinks/beer]
posterurl: <%`${posterurl}`%>
---
<% await tp.file.move("/"+ folderPath +"/" + title) %>

**notes**::

**poster**::
![](<%posterurl%>)