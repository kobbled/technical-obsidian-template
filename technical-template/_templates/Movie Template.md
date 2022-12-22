---
<%*
  let title = tp.file.title
  if (title.startsWith("Untitled") || title.startsWith("New Document")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename(`${title}`);
  }
%>
---
<% tp.file.move("/Dataview Tests/Cards Example/movies/" + `${title}`) %>
**category:**:
**genre**:: 
**directors**::
**year**::
**parental-rating**::
**length**::
**cast**::
**ratingImdb**::
**rating**::
**plot**::
**poster**:: [![]()]()
**posterurl**::