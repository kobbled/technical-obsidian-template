

const filterWeekCount = (rows, field, filterdate) =>
   rows.filter(p => dv.date(p.week)?.ts == dv.date(filterdate).ts && p[field]).length;


const filterMonthCount = (rows, field, filterdate) =>
   rows.filter(p => dv.date(p.month)?.ts == dv.date(filterdate).ts && p[field]).length;


const filternLastCount = (rows, field, nlast) =>
   rows.filter(p => p.file.day >= moment().subtract(nlast, "w") && p[field]).length;
