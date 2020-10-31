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

if (critType === null)
  return `/error "You should pick a crit type from: ${CRIT_TYPES.join(', ')}"`

if (critType === 'Failure' || critType === 'Critical Fumble')
  return '/critfail'

let table = game.tables.entities.find(t => t.name === critType)
if (!table) {
  const pack = game.packs.find(p => p.title === "Critical Hits")
  table = await pack.getEntity(pack.index.find(it => it.name === critType)._id)
}
if (!table) {
  return `/error "Failed using ${input} crit - make sure you have the crit roll tables or compendium of them"`
}

const roll = table.roll()
const rollPart = roll.roll
const resultPart = Object.assign({}, roll.results[0]) // copy, otherwise we edit original table! :O
resultPart.text = game.macros.getName('make-table-result-bold').renderContent(resultPart.text)

table.draw({ roll: rollPart, results: [resultPart] })