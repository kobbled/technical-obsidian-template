---
<%*
  const folders = this.app.vault.getAllLoadedFiles().filter(i => i.children).map(folder => folder.path);
  const folderPath = await tp.system.suggester(folders, folders);

  let title = tp.file.title
  if (title.startsWith("Untitled") || title.startsWith("New Document")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename(`${title}`);
  }

  const genre = await tp.system.suggester(
    ["TTRPG", "Board Game", "Card Game", "Dice Game"], 
    ["TTRPG", "Board Game", "Card Game", "Dice Game"], 
    false, 
    "Game Genre"
  );

  const genre_tag = genre.toLowerCase().replace(/[^a-zA-Z0-9]/g, "-");

  const developer = await tp.system.prompt("Developer/Publisher");
  const year = await tp.system.prompt("Release Year");
  const url = await tp.system.prompt("RPGGeek/BoardGameGeek URL");
  const rating = await tp.system.prompt("Rating (0-10)");
  const bought = await tp.system.suggester(["true", "false"], ["true", "false"], false, "Own the game?");

  let platform = await tp.user.multiSuggester(["pdf", "vtt", "role6"], ["\"pdf\"", "\"vtt\"", "\"role6\""], false, "Platform");

  const posterurl = await tp.system.prompt("Poster/Box Image URL");
%>
category: games
genre:
  - "[[<%`${genre}`%>]]"
developer: <%`${developer}`%>
year: <%`${year}`%>
url: <%`${url}`%>
rating: <%`${rating}`%>
tags:
  - games/table-top
cssclasses:
  - no-caption
bought: <%`${bought}`%>
vendor: 
Links: 
platform: [<%`${platform}`%>]
type: "[[`${genre_tag}`]]"
posterurl: <%`${posterurl}`%>
---
<% await tp.file.move("/"+ `${folderPath}` +"/" + `${title}`) %>

## Info

**plot**:: 

**poster**::
![](<%`${posterurl}`%>)