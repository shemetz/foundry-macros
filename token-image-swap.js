/*
--- Token Image Swap ---
Changes a selected token's image to the next one in a custom sequence.
Hold Ctrl when executing the macro to set the images.
Hold Alt when executing the macro to switch to the previous image in the sequence, instead.

source:
https://github.com/itamarcu/foundry-macros/blob/master/token-image-swap.js
suggested icon:
https://i.imgur.com/X2mAfEC.png
*/

const SCOPE = 'world'
const KEY_NAME = 'token-image-swap'

main()

function main () {
  const tok = canvas.tokens.controlled[0]
  if (tok === undefined) return ui.notifications.error('No token selected for Token Image Swap!')
  const actor = tok.actor
  if (!actor) return ui.notifications.error('Cannot apply macro to tokens without an actor.')
  if (game.keyboard._downKeys.has('Control')) return setupTokenImages(tok)
  if (actor.getFlag(SCOPE, KEY_NAME) === undefined || actor.getFlag(SCOPE, KEY_NAME).length === 0)
    return ui.notifications.error('Please hold the Ctrl key while activating this macro, to set up images.')
  const imagesText = actor.data.flags[SCOPE][KEY_NAME]
  const options = imagesText.split('\n')
    .map(it => it.split(' ')[0])  // remove comments
    .filter(it => it)  // remove empty lines
  const currImg = tok.data.img
  const imgIndex = options.indexOf(currImg)
  if (imgIndex === -1) return ui.notifications.error('Token image is not one of the URLs in the script!')
  const delta = game.keyboard._downKeys.has('Alt') ? options.length - 1 : 1
  const nextImg = options[(imgIndex + delta) % options.length]
  tok.update({ 'img': nextImg })
}

function setupTokenImages (tok) {
  const actor = tok.actor
  let existingUrlsValue = actor.getFlag(SCOPE, KEY_NAME) || ''
  if (existingUrlsValue && !existingUrlsValue.endsWith('\n')) existingUrlsValue += '\n'
  if (!existingUrlsValue.includes(tok.data.img)) {
    // add current to list
    existingUrlsValue += tok.data.img + '    ' + tok.name + '\n'
  }
  new Dialog({
    title: `Token Image Swap - image list for ${actor.name}`,
    content: `
     <p>Please put image links here, each in a new line. You can add comments after URLs by adding 
     one or more spaces; for example, "https://i.imgur.com/Ja8iNNg.png &nbsp;&nbsp;&nbsp;dragon form".</p>
      <div>
       <textarea style="height: 250px" id="urls-text" name="urls" autofocus="autofocus">${existingUrlsValue}</textarea>
      </div>
     `,
    buttons: {
      one: {
        icon: '<i class="fas fa-check"></i>',
        label: 'Set images',
        callback: (html) => {
          const urlsText = html.find('#urls-text')[0].value
          actor.setFlag(SCOPE, KEY_NAME, urlsText)
          existingUrlsValue = urlsText
          console.log(`Token Image Swap | setting image list for ${actor.name}: ${urlsText}`)
        }
      },
      two: {
        icon: '<i class="fas fa-times"></i>',
        label: 'Cancel',
        callback: () => {
          console.log('Token Image Swap | canceled token image setup')
        }
      }
    },
    // NO DEFAULT - on purpose, to allow Enter key in text input
    // default: 'one',
  }).render(true)
}