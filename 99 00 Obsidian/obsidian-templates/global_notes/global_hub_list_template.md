- Pipeline
- Manual index
- Automated tag : #tag 
- Automated incoming links 

---
## Pipeline
### In-Progress 
- #status/in-progress 
	- 
### Todo
- #status/todo 
	- 
### Inbox and Backlog
- #status/backlog 
	- 
- #status/inbox 
	- 

---
## Notes 

## Resources

## Automated
```dataview
LIST rows.file.link
FROM #tag AND -"99_templates"
SORT file.name ASC
GROUP BY file.folder
```

---
## Additional metadata
Type:: #type/hub/list 
