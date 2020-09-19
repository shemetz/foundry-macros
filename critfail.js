/*
--- critfail ---
Rolls and shows a result from the Critical Fail table

source:
https://github.com/itamarcu/foundry-macros/blob/master/critfail.js
suggested icon:
https://i.imgur.com/huPpJQf.png
*/

const table = game.tables.entities.find(t => t.name === 'Critical Fail')

const roll = table.roll()

const rollPart = roll.roll
const resultPart = Object.assign({}, roll.results[0]) // copy, otherwise we edit original table! :O
resultPart.text = game.macros.getName('makeTableResultBold').renderContent(resultPart.text)

table.draw({ roll: rollPart, results: [resultPart] })