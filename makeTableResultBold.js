/*
 --- makeTableResultBold ---
 Converts text from crit tables to make the first sentence bold

 source:
 https://github.com/itamarcu/foundry-macros/blob/master/makeTableResultBold.js
 suggested icon:
 https://i.imgur.com/iw4sH39.png
*/

const text = args[0]
const periodIndex = text.search(/[.!?]/g)
if (periodIndex === -1)
    return "<b>(!)</b>" + text
const titleText = text.substring(0, periodIndex + 1)
const restOfText = text.substring(periodIndex + 1)
return `<b>${titleText}</b>${restOfText}`