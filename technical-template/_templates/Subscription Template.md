---
<%*
  const subLocation = await tp.system.suggester(["Computer", "Phone", "Internet", "Social", "Media", "Home", "Car", "Courses"], ["Computer", "Phone", "Internet", "Social", "Media", "Home", "Car", "Courses"], false, "Subscription Type")
  const folderPath = "subscriptions";

  let type = "";
  if (subLocation === "Computer") {
    type = "computer";
  } else if (subLocation === "Phone") {
    type = "phone";
  } else if (subLocation === "Media") {
    type = "media";
  } else if (subLocation === "Internet") {
    type = "internet";
  } else if (subLocation === "Social") {
    type = "social";
  } else if (subLocation === "Home") {
    type = "life";
  } else if (subLocation === "Car") {
    type = "life";
  } else if (subLocation === "Courses") {
    type = "education";
  }
  const type_tag = type.toLowerCase().replace(/[^a-zA-Z0-9]/g, "-");
  
  const subscribed = await tp.system.suggester(["true", "false"], ["true", "false"], false, "Active Subscription?");
  const subTerm = await tp.system.suggester(["Monthly", "Yearly"], ["Monthly", "Yearly"], false, "Subscription Payment Term");
  const subCost = await tp.system.prompt("Cost of Subscription");
  const chargeAccounts = await tp.system.suggester(["Visa", "Paypal", "ApplePay"], ["Visa", "Paypal", "ApplePay"], false, "Accounts Charged");
   const subRenewal = await tp.system.prompt("Renewal Date (2000-01-01)", "2000-01-01");
  // 0 = Never, 1 = infrequently, 2 = occasionally, 3 = frequently, 4 = everyday
  let usage = await tp.system.suggester(["Never", "Infrequently", "Occasionally", "Frequently", "Everyday"], ["0", "1", "2", "3", "4"], false, "Usage");
  
  let title = tp.file.title
  if (title.startsWith("Untitled") || title.startsWith("New Document")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename(`${title}`);
  }
%>
Created: <%tp.file.creation_date("YYYY-MM-DD")%>
Modified: <%tp.file.last_modified_date("YYYY-MM-DD")%>
Category: "Subscription"
type: "<%`${type}`%>"
usage: <%`${usage}`%>
References:
Tags: [personal/subscriptions, personal/<%`${type_tag}`%>]
Links: 
Subscription: true
activeSub: <%`${subscribed}`%>
subTerm: <%`${subTerm}`%>
subRenewal: <%`${subRenewal}`%>
subTermination:
Cost: <%`${subCost}`%>
accountCharged: "<%`${chargeAccounts}`%>"
---

<% await tp.file.move("/"+ `${folderPath}` +"/" + `${title}`) %>