/*
 --- crit-dialog ---
 Rolls a crit from one of the expanded critical tables (required as Rollable Tables with those names)

 depends on:
   queryFromList
   makeTableResultBold

 source:
 https://github.com/itamarcu/foundry-macros/blob/master/crit-dialog.js
 suggested icon:
 https://i.imgur.com/Pr6tXUH.png
*/

const CRIT_TYPES = ["Bludgeoning", "Piercing", "Slashing", "Fire", "Acid", "Cold", "Force", "Poison", "Lightning", "Necrotic", "Psychic", "Thunder", "Radiant", "Insanity", "Minor Injury", "Major Injury"]

const callback = (tableName) => {
    console.log("selected crit type", tableName);
    const table = game.tables.entities.find(t => t.name === tableName)
    const roll = table.roll()
    const rollPart = roll.roll
    const resultPart = Object.assign({}, roll.results[0]) // copy, otherwise we edit original table! :O
    resultPart.text = game.macros.getName("makeTableResultBold").renderContent(resultPart.text)
    table.draw({roll: rollPart , results: [resultPart]})
}

game.macros.getName("queryFromList").renderContent(
    "Critical Hit",
    "Choose critical type:",
    callback,
    ...CRIT_TYPES
)