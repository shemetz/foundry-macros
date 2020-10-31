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

const CRIT_TYPES = [
  'Bludgeoning',
  'Piercing',
  'Slashing',
  'Fire',
  'Acid',
  'Cold',
  'Force',
  'Poison',
  'Lightning',
  'Necrotic',
  'Psychic',
  'Thunder',
  'Radiant',
  'Insanity',
  'Minor Injury',
  'Major Injury',
  'Critical Fumble',
  'Failure',
]

const getDependency = async (entityMap, packName, entityName) => {
  const existingEntity = entityMap.entities.find(t => t.name === entityName)
  if (existingEntity) return existingEntity
  const pack = game.packs.find(p => p.title === packName)
  const id = pack.index.find(it => it.name === entityName)._id
  return pack.getEntity(id)
}

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

const table = await getDependency(game.tables, 'Critical Hits', critType)
if (!table) {
  return `/error "Failed using ${input} crit - make sure you have the Critical Hits compendium"`
}

const roll = table.roll()
const rollPart = roll.roll
const resultPart = Object.assign({}, roll.results[0]) // copy, otherwise we edit original table! :O
const macro = await getDependency(
  game.macros, 'itamacros', 'make-table-result-bold'
)
resultPart.text = macro.renderContent(resultPart.text)

table.draw({ roll: rollPart, results: [resultPart] })