// Reference - https://forum.obsidian.md/t/templater-script-create-a-new-template-open-in-split-view-paste-link-to-the-new-note/64493

async function main() {
  const tp = app.plugins.plugins['templater-obsidian'].templater.current_functions_object

  const templates = [
    {
      label: 'Default note',
      template: '99_templates/notes/general_note_template'
    },
    {
      label: 'Person',
      template: '99_templates/notes/special_notes/database/person_template',
      destination: '02 02 Global Notes/09 Database/people/',
    }
  ]

  // Present the list of templates to choose from
  const chosen = await this.tp.system.suggester(templates.map(x => x.label), templates)
  if (!chosen) return ''
  const name = (await this.tp.system.prompt('Name for the new file:', chosen.title || '')) || moment().format('YYYY-MM-DD HH.mm.ss')
  const addLink = await this.tp.system.prompt('Insert link in the current file?', 'Enter for yes or Escape for no')
  const destination = chosen.destination || this.tp.file.folder(true)
  const res = await this.createFromTemplate(chosen.template, name, destination, !addLink)
  if (addLink) {
    // Open the new file in a pane to the right
    const file = app.vault.getAbstractFileByPath(`${destination}/${name}.md`)
    // Create the new leaf
    const newLeaf = this.app.workspace.getLeaf('split')
    await newLeaf.openFile(file)
    // Set the view to edit mode
    const view = newLeaf.getViewState()
    view.state.mode = 'source'
    newLeaf.setViewState(view)
    // Give focus to the new leaf
    this.app.workspace.setActiveLeaf(newLeaf, { focus: true })
    // Move the cursor to the end of the new note
    this.app.workspace.activeLeaf.view.editor.setCursor({ line: 999, ch: 0 })
  }

  return res
}
module.exports = main