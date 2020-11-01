/*
--- critfail ---
Rolls and shows a result from the Critical Fail table (required as a rollable table)

depends on:
  make-table-result-bold

source:
https://github.com/itamarcu/foundry-macros/blob/master/critfail.js
suggested icon:
https://i.imgur.com/huPpJQf.png
*/

const getDependency = async (entityMap, packName, entityName) => {
  const existingEntity = entityMap.entities.find(t => t.name === entityName)
  if (existingEntity) return existingEntity
  const pack = game.packs.find(p => p.title === packName)
  const index = await pack.getIndex()
  const inIndex = index.find(it => it.name === entityName)
  return inIndex ? pack.getEntity(inIndex._id) : null
}

const runMacro = async (macroName, ...args) => {
  const macro = (await getDependency(game.macros, 'itamacros', macroName))
  if (macro === null) return ui.notifications.error(`can't find macro: "${macroName}"`)
  return macro.renderContent(...args)
}

const table = await getDependency(game.tables, 'Critical Hits', 'Critical Fail')
const roll = table.roll()
const rollPart = roll.roll
const resultPart = Object.assign({}, roll.results[0]) // copy, otherwise we edit original table! :O
resultPart.text = await runMacro('make-table-result-bold', resultPart.text)

table.draw({ roll: rollPart, results: [resultPart] })