---
banner: "https://blenderartists.org/uploads/default/original/4X/6/d/a/6daef6949e925d154504824c102a7b0b84a1a2b0.jpeg"
banner_x: 0.49832
cssClass: wide-page
banner_lock: true
---

<!-- TIME OF DAY -->
```dataviewjs
const currentHour = moment().format('HH');
console.log(currentHour)
let greeting;
if (currentHour >= 18 || currentHour < 5) {
 	greeting = '🌙 Good Evening'
} else if (currentHour >= 5 && currentHour < 12) {
	 greeting = '☀️ Good Morning'
} else {
	greeting = '☀️ Good Afternoon'
}

dv.container.className += " time-of-day"
dv.header(2, greeting)
```

<!-- ADD CLOCK -->
<!--Dayspedia.com widget--><iframe name= 'Digiclock1' width='300' height='200' class='DPDC' marginheight='0' marginwidth='0' frameborder='0' scrolling='no' allowtransparency = "true" comment='/*defined*/' src='https://dayspedia.com/if/digit/?v=1&iframe=eyJ3LTEyIjp0cnVlLCJ3LTExIjp0cnVlLCJ3LTEzIjp0cnVlLCJ3LTE0IjpmYWxzZSwidy0xNSI6ZmFsc2UsInctMTEwIjpmYWxzZSwidy13aWR0aC0wIjp0cnVlLCJ3LXdpZHRoLTEiOmZhbHNlLCJ3LXdpZHRoLTIiOmZhbHNlLCJ3LTE2IjoiMjRweCIsInctMTkiOiI0OCIsInctMTciOiIxNiIsInctMjEiOnRydWUsImJnaW1hZ2UiOi0xLCJiZ2ltYWdlU2V0IjpmYWxzZSwidy0yMWMwIjoiIzU2NjY3ZSIsInctMCI6dHJ1ZSwidy0zIjp0cnVlLCJ3LTNjMCI6IiNkMmQyZDIiLCJ3LTNiMCI6IjEiLCJ3LTYiOiIjZTJlMmUyIiwidy0yMCI6dHJ1ZSwidy00IjoiI2M0Y2VkNyIsInctMTgiOmZhbHNlLCJ3LXdpZHRoLTJjLTAiOiIzMDAiLCJ3LTExNSI6ZmFsc2V9&lang=en&cityid=3162'  ></iframe><!--Dayspedia.com widget ENDS-->

<!-- DAILY NOTE BUTTONS-->
```button
name New Daily Note
type command
action Periodic Notes: Open daily note
class button-new-daily-note
```

```button
name New Weekly Note
type command
action Periodic Notes: Open weekly note
class button-weekly-note
```

```button
name New Monthly Note
type command
action Periodic Notes: Open monthly note
class button-monthly-note
```

# <center>Categories</center> 
---

> [!blank]
> - ### **Personal Notes** #mcl/list-card
> 	- ![|center](https://e0.pxfuel.com/wallpapers/48/337/desktop-wallpaper-best-star-wars-death-star-interior-background.jpg)
> 	- [[Personal Projects|Personal]] — #projects
> 	- [[Journal MOC|Journal]] — #projects
> 	- [[Life Goals]] — #life 
> 
> - ### **Work Notes**
> 	- ![|center](http://i.gzn.jp/img/2017/12/26/death-star-construction/00_m.jpg) 
> 	- [[Research]]  — #research
> 	- [[Papers MOC|Liturature]]  — #paper 
> 
> - ### **Hobbies**
> 	- ![|center](https://images.mubicdn.net/images/film/116658/cache-96839-1445952162/image-w1280.jpg?size=800x)
> 	- [[Movie Database]]  — #movies

----
## Tasks

> [!multi-column]
> 
>>[!info|wide-2]+ Progress
>> ![[Task Progress#^1]]
>> ![[Time Progress#^1]]
>
>>[!important]+ Important Items
>>  ![[Postit Board.canvas]]

> [!multi-column]
> 
>>[!todo]+ Next Weeks Todo List
>> ![[Next Weeks Tasks#^1]]
>
>>[!todo]+ Next Months Todo List
>> ![[Next Months Tasks#^1]]

> [!multi-column]
>
>>[!warning|wide-2]+ Past Due Tasks
>> ![[Past Due Tasks]]

## Papers

![[Papers Read Heatmap#^1]]

>[!note]+ Newly Added Papers
> ![[Newly Added Papers#^1]]