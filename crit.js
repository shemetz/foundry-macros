/*
--- crit ---
Rolls a crit from one of the expanded critical tables (required as Rollable Tables with those names)

args:
  0 - one of the damage types, plus "Insanity", "Minor Injury", "Major Injury", "Critical Fumble"

depends on:
  critfail
  error
  make-table-result-bold

source:
https://github.com/itamarcu/foundry-macros/blob/master/crit.js
suggested icon:
https://i.imgur.com/iw4sH39.png
*/

const input0 = args[0]
let input = input0.toLowerCase().trim()

const CRIT_TYPES = ['Bludgeoning', 'Piercing', 'Slashing', 'Fire', 'Acid', 'Cold', 'Force', 'Poison', 'Lightning', 'Necrotic', 'Psychic', 'Thunder', 'Radiant', 'Insanity', 'Minor Injury', 'Major Injury', 'Critical Fumble', 'Failure']

let critType = null
for (const crit of CRIT_TYPES) {
  if (crit.toLowerCase().includes(input)) {
    critType = crit
    break
  }
}

if (critType === 'Failure' || critType === 'Critical Fumble')
  return '/critfail'

const table = game.tables.entities.find(t => t.name === critType)
if (!table) {
  return `/error "I'm trying to use /crit but I typed ${input} and got no result. I should have used one of the following strings (or substrings): ${CRIT_TYPES.join(', ')}"`
}

const roll = table.roll()
const rollPart = roll.roll
const resultPart = Object.assign({}, roll.results[0]) // copy, otherwise we edit original table! :O
resultPart.text = game.macros.getName('make-table-result-bold').renderContent(resultPart.text)

table.draw({ roll: rollPart, results: [resultPart] })