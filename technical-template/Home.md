---
banner: "![[6daef6949e925d154504824c102a7b0b84a1a2b0.jpeg]]"
banner_x: 0.49832
cssClasses:
  - wide-page
  - .no-caption
  - hide-properties
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

# <center>Habit Tracking</center>
---

> [!multi-column]
> >[!info|wide-2]+ Habits Last 7 Days
> > ![[Habits Last 7 Days#^1]]
>
> >[!info|wide-2]+ Habits Progress
> >![[Habits Last 7 Days#^2]]

# <center>Categories</center>
---

> [!blank]
> - ### **Personal Notes** #mcl/list-card
> 	- ![[desktop-wallpaper-best-star-wars-death-star-interior-background.jpg||center]]
> 	- [[Personal Projects|Personal]] — #projects
> 	- [[Journal MOC|Journal]] — #projects
> 	- [[Life Goals]] — #life 
> 
> - ### **Work Notes**
> 	- ![[00_m.jpg||center]] 
> 	- [[Research]]  — #research
> 	- [[Papers MOC|Liturature]]  — #paper 
> 
> - ### **Hobbies**
> 	- ![[image-w1280.jpg||center]]
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

## Self

![[Productivity#^1]]
![[Mood#^1]]

## Notes

![[Notes Added Heatmap#^1]]

## Papers

![[Papers Read Heatmap#^1]]

>[!note]+ Newly Added Papers
> ![[Newly Added Papers#^1]]