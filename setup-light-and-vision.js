/*
--- Setup Light/Vision ---
Will open two dialogs, for the user to set light and vision for the selected token.

depends on:
  query-from-list

source:
https://github.com/itamarcu/foundry-macros/blob/master/setup-light-and-vision.js
suggested icon:
https://i.imgur.com/VfsnMXH.png
*/

const VISION_OPTIONS = {
  // <text>: [<brightSight>, <dimSight>]
  'No change': null,
  'None (1 ft)': [0, 1],
  'Darkvision (30 ft)': [0, 30],
  'Darkvision (60 ft)': [0, 60],
  'Devil\'s Sight (bright 120 ft)': [120, 0],
}

const LIGHT_OPTIONS = {
  // <text>: [<brightLight>, <dimLight>]
  'No change': null,
  'None': [0, 0],
  'Candle': [5, 10],
  'Torch or Light cantrip': [20, 40],
  'Lantern - Hooded, dim': [0, 5],
  'Lantern - Hooded, bright': [30, 60],
}

const setVision = (visionStr) => {
  const vision = VISION_OPTIONS[visionStr]
  if (!vision)
    return
  const [bright, dim] = vision
  for (const token of canvas.tokens.controlled) {
    token.update({
      vision: true,
      dimSight: dim,
      brightSight: bright,
    })
  }
}

const setLight = (lightStr) => {
  const light = LIGHT_OPTIONS[lightStr]
  if (!light)
    return
  const [bright, dim] = light
  for (const token of canvas.tokens.controlled) {
    token.update({
      dimLight: dim,
      brightLight: bright,
    })
  }
}

const selectedTokenNames = canvas.tokens.controlled.map((it) => {return it.name}).join(', ')

game.macros.getName('query-from-list').renderContent(
  'Selected tokens: ' + selectedTokenNames,
  'Vision:',
  setVision,
  ...Object.keys(VISION_OPTIONS)
)

game.macros.getName('query-from-list').renderContent(
  'Selected tokens: ' + selectedTokenNames,
  'Light:',
  setLight,
  ...Object.keys(LIGHT_OPTIONS)
)