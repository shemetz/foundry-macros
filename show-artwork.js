/*
--- Show Artwork ---
Show artwork of selected/targeted token to yourself (GM can show to all players).

source:
https://github.com/itamarcu/foundry-macros/blob/master/show-artwork.js
suggested icon:
https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/openmoji/252/framed-picture_1f5bc.png
*/

main()

function main() {
  const tok = canvas.tokens.controlled[0] || Array.from(game.user.targets)[0]
  if (tok === undefined)
    return ui.notifications.warn('Please select token first.')
  let target = tok.actor || tok
  new ImagePopout(target.data.img, {
    title: target.name,
    shareable: true,
    uuid: target.uuid,
  }).render(true)
}
