/*
--- Clear Conditions ---
Clear all conditions from all selected tokens.

source:
https://github.com/itamarcu/foundry-macros/blob/master/clear-conditions.js
suggested icon:
https://game-icons.net/icons/ffffff/000000/1x1/delapouite/broom.svg
*/

main()

async function main () {
  for (const token of canvas.tokens.controlled) {
    await token.update({ 'effects': [] })
  }
}
