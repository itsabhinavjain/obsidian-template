---
date: <% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>
week: <% tp.date.now("gggg-[W]ww", 0, tp.file.title, "YYYY-MM-DD") %>
month: <% tp.date.now("YYYY-MM", 0, tp.file.title, "YYYY-MM-DD") %>
quarter: <% tp.date.now("YYYY-[Q]Q", 0, tp.file.title, "YYYY-MM-DD") %>
year: <% tp.date.now("YYYY", 0, tp.file.title, "YYYY-MM-DD") %>
---
[[01 00 Core Journal/daily/<%tp.date.now("YYYY-MM-DD",-1,tp.file.title,"YYYY-MM-DD")%>| << ]] : [[01 00 Core Journal/daily/<%tp.date.now("YYYY-MM-DD",+1,tp.file.title,"YYYY-MM-DD")%>| >> ]]  || `$= dv.pages('"01 00 Core Journal/daily"').where(p => p.file.day && p.file.day < dv.current().file.day).sort(p => p.file.day, "desc").file.link.limit(1)` : `$= dv.pages('"01 00 Core Journal/daily"').where(p => p.file.day && p.file.day > dv.current().file.day).sort(p => p.file.day, "asc").file.link.limit(1)` || [[01 00 Core Journal/weekly/<%tp.date.now("gggg-[W]ww", 0, tp.file.title, "YYYY-MM-DD")%>|Week]] : [[01 00 Core Journal/monthly/<%tp.date.now("YYYY-MM", 0, tp.file.title, "YYYY-MM-DD")%>|Month]] : [[01 00 Core Journal/quarterly/<%tp.date.now("YYYY-[Q]Q", 0, tp.file.title, "YYYY-MM-DD")%>|Quarter]] : [[01 00 Core Journal/yearly/<%tp.date.now("YYYY", 0, tp.file.title, "YYYY-MM-DD")%>|Year]]<%* tp.user.hideYaml() %>
## Notes
-  <% tp.file.cursor() %>

---- 
![[List of Things to Remember#Things to remember - Overall]]
