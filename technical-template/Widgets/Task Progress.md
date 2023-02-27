```dataviewjs
// get the current Monday
const today = new Date();
const daysToMonday = 6 - today.getDay();
  //calculate 1 week from Monday
let oneWeekFromNow = new Date(today.getTime() + daysToMonday  * 24 * 60 * 60 * 1000);

//get the first of the month
  //calculate 1 month from now
const firstDayOfNextMonth = new Date(today.getFullYear(), today.getMonth()+1, 1);
let oneMonthFromNow = firstDayOfNextMonth.getTime();

//Get all tasks
let tasks = dv.pages().file.tasks;

//calculate total and completed tasks
let totalTasks = tasks.length;
let completedTasks = tasks.where(t => t.completed).length;

//calculate total and completed tasks this week
let totalWeek = tasks.filter(task => task.due && new Date(task.due) <= oneWeekFromNow).length;
let completedWeek = tasks.where(t => t.completed && t.due && new Date(t.due) <= oneWeekFromNow).length;

//calculate total and completed tasks this month
let totalMonth = tasks.filter(task => task.due && new Date(task.due) <= oneMonthFromNow).length;
let completedMonth = tasks.where(t => t.completed && t.due && new Date(t.due) <= oneMonthFromNow).length;

//print progress bar
function progress(value, total) {
    let pct = value/total * 100;
    return `<progress value="${parseInt(pct)}" max="100"></progress> | ${parseInt(pct)} %`
}

//print progress bars in table
dv.span(`
|     | Progress  | Percentage |
| --- | --- |:---:|
| **Total Tasks** | ${progress(completedTasks, totalTasks)} | 
| **Monthly Tasks**| ${progress(completedMonth, totalMonth)}  | 
| **Weekly Tasks** | ${progress(completedWeek, totalWeek)}  | 
`)


```
^1