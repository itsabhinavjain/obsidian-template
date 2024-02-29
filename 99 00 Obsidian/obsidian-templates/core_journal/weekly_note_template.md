---
week: <% tp.date.now("gggg-[W]ww", 0, tp.file.title, "gggg-[W]ww") %>
year: <% tp.date.now("YYYY", 0, tp.file.title, "gggg-[W]ww") %>
---
[[01 00 Core Journal/weekly/<%tp.date.now("gggg-[W]ww", "P-1W", tp.file.title, "gggg-[W]ww")%>|Last Week]] : [[01 00 Core Journal/weekly/<%tp.date.now("gggg-[W]ww", "P+1W", tp.file.title, "gggg-[W]ww")%>|Next Week]]
<%* tp.user.hideYaml() %>
## Areas
- Self - Physical, Mental and Spiritual 
- Relationships 
- Work

## Current focus areas in life (OKR) and initiatives to make it happen 
- 

---
## This week's planning 
*Remember to block time as per the main goals, projects and weekly deliverables* 
### Weekly focus 
- 

### Weekly bucket list 
- [ ] 
### Day-wise tasks 
#### Monday 
- [ ] 
#### Tuesday 
- [ ] 
#### Wednesday 
- [ ] 
#### Thursday 
- [ ] 
#### Friday 
- [ ] 
#### Saturday
- [ ] 
#### Sunday 
- [ ] 

### Habits, Routines and Systems
- [ ] Physical - Exercises for - Toning, Strength training, Cardio, Mobility 
- [ ] Mental - Mindfulness and meditation (Developing focus)
- [ ] Nutrition - Supplements, Diet, Hydration 
- [ ] Grooming - Skincare, Looking sharp, Smelling nice etc. 

---
## Weekly Reflection
- *Review the questions below* 
- *Review things to remember daily* 
- *Review the notes to make permanent notes*
- *Plan for the next week keeping in mind the overall goals that you have*

### Plus, Minus and Next 
- Plus 
	- Achievements and memories 
	- What worked
- Minus 
	- What could I do better 
- Next
- Others
	- Memories
	- Decisions
	- Other lessons 

### Progress towards the goals 
- *What is the progress and what needs to be changed?* 

### What did I accomplish 
- *(Add notes)*

### Weekly Notes
- *(Add notes)*

---
## Daily notes
<%*
Array.from(Array(7).keys()).map((i) => {
  date = tp.date.weekday("YYYY-MM-DD", i, tp.file.title, "gggg-[W]ww");
  tR += `>#### ${date}\n`;
  tR += `>![[01 00 Core Journal/daily/${date}#Notes]]\n\n`;
});
%>

---
## Resources

- Journal tag: 

