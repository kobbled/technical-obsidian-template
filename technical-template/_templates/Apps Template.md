---
<%*
  const folderPath = "Personal/Computer/apps";
  let type = await tp.system.prompt("Type of App?")
  const type_tag = type.toLowerCase().replace(/[^a-zA-Z0-9]/g, "-"); 
  
  let os = await tp.user.multiSuggester(tp, ["windows", "mac", "linux"], ["\"windows\"", "\"mac\"", "\"linux\""], false, "Operating System")
  let installed = await tp.system.suggester(["true", "false"], ["true", "false"], false, "Installed")
  // 0 = Never, 1 = infrequently, 2 = occasionally, 3 = frequently, 4 = everyday
  let usage = await tp.system.suggester(["Never", "Infrequently", "Occasionally", "Frequently", "Everyday"], ["0", "1", "2", "3", "4"], false, "Usage")
  
  let title = tp.file.title
  if (title.startsWith("Untitled") || title.startsWith("New Document")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename(`${title}`);
  }
%>
Created: <%tp.file.creation_date("YYYY-MM-DD")%>
Modified: <%tp.file.last_modified_date("YYYY-MM-DD")%>
Category: "Apps"
type: "<%`${type}`%>"
os: [<%`${os}`%>]
installed: <%`${installed}`%>
usage: <%`${usage}`%>
References:
Tags: [note/info, software/apps, software/apps/<%`${type_tag}`%>]
Links: 
---

<% await tp.file.move("/"+ `${folderPath}` +"/" + `${title}`) %>