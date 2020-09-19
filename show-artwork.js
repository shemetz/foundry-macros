/*
--- Show Artwork ---
Show artwork of selected token to yourself (GM can show to all players).

source:
https://github.com/itamarcu/foundry-macros/blob/master/show-artwork.js
suggested icon:
https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/openmoji/252/framed-picture_1f5bc.png
*/

main()

function main () {
  const tok = canvas.tokens.controlled[0]
  if (tok === undefined) return ui.notifications.warn('Please select token first.')
  let tActor = tok.actor
  new ImagePopout(tActor.data.img, {
    title: tActor.name,
    shareable: true,
    uuid: tActor.uuid
  }).render(true)
}
