/*
--- print-id ---
Creates a private chat message with the ID of the currently selected token or tile.


source:
https://github.com/itamarcu/foundry-macros/blob/master/print-id.js
suggested icon:
https://i.imgur.com/iw4sH39.png
*/

const controlled = canvas.tokens.controlled[0] ||
  canvas.tiles.controlled[0]
const id = controlled ? controlled.id : 'no tile selected'
ChatMessage.create({ content: id, whisper: [game.user._id] })