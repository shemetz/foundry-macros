# Shem's Foundry Macros
A collection of my Foundry VTT macros.

Some of these macros have arguments; these macros are meant to be used with the Furnace module, that allows macros to be
 called from other macros. They are marked here with names that start with a slash (/), and their image doesn't matter, 
 since they are not meant to be in the macro bar. Many macros here can also be used by typing `/macroname` in the
  chat - for example, `/critfail` and `/crit bludgeoning`.

Some others have dependencies, which means that they require these other macros to be
 created and added to your macro directory, named the same way as they are here.
 
## List + Summaries

### <img src=https://static.thenounproject.com/png/232484-200.png height="24"> [Swap Positions](swap-positions.js) 
Swap two selected tokens' places.

### <img src=https://cdn.discordapp.com/attachments/695387569650663535/720012953172181022/Untitled.png height="24"> [Alter Ego](alter-ego.js) 
Changes a selected token's image to the next one in a circular sequence.

## <img src=https://game-icons.net/icons/ffffff/000000/1x1/delapouite/broom.svg height="24"> [Clear Conditions](clear-conditions.js) 
Clear all conditions from all selected tokens.

### <img src=https://game-icons.net/icons/ffffff/000000/1x1/delapouite/broom.svg height="24"> [Delete Measurement](delete-measurements.js) 
Deletes all template measurements on the map (e.g. if you want to remove all visual spell areas).

### <img src=https://game-icons.net/icons/ffffff/000000/1x1/delapouite/funnel.svg height="24"> [Filter Macros](filter-macros.js) 
Filters macro directory to only show macros from a certain author (edit this macro with author name).
Activate this with macro directory open.

### <img src=https://emojiguide.org/images/emoji/1/w8iuxo1l9in91.png height="24"> [Flip](flip.js) 
Flips the selected token image along the X axis.

### <img src=https://i.imgur.com/VfsnMXH.png height="24"> [Setup Light/Vision](setup-light-and-vision.js) 
Will open two dialogs, for the user to set light and vision for the selected token.

### <img src=https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/openmoji/252/framed-picture_1f5bc.png height="24"> [Show Artwork](show-artwork.js) 
Show artwork of selected token to yourself (GM can show to all players).

### <img src=https://reprog.files.wordpress.com/2011/01/1d8.png height="24"> [Spend Hit Die](spend-hit-die.js) (5e) 
This will spend your highest remaining hit die, rolling it and showing the result in the chat (not adding Constitution).

### <img src=https://i.imgur.com/ec2xL28.png height="24"> [What's Messing with my AC?](whats-messing-with-my-ac.js) (5e) 
Shows a message that details all items that affect AC on the character (including dynamic effects)

### <img src=https://game-icons.net/icons/ffffff/000000/1x1/delapouite/look-at.svg height="24"> [Turn Selected Towards Cursor](turn-selected-towards-cursor.js) 
Causes all selected tokens to rotate towards the cursor.

### <img src=https://i.imgur.com/HWWHd2W.png height="24"> [Turn to Face](turn-to-face.js) 
Select one or more tokens to be the turners. Target one token to be the target.
Whenever the turner or the target move, the turner will rotate to face the target.

(does not persist if you reload)

![](https://user-images.githubusercontent.com/6516621/93661817-95ca7080-fa63-11ea-87cd-133eb5d576fc.gif)

### <img src=https://i.imgur.com/huPpJQf.png height="24"> [Crit Fail Table](critfail.js) (5e homebrew) 
Rolls and shows a result from the Critical Fail table (required as a rollable table)

### <img src=https://i.imgur.com/Pr6tXUH.png height="24"> [Crit Table](crit-dialog.js) (5e homebrew)
Rolls a crit from one of the expanded critical tables (required as Rollable Tables with those names)

### <img src=https://i.imgur.com/iw4sH39.png height="24"> [/query-from-list](query-from-list.js) 
Will open a dialog for the user to select an option, and call a callback when it's complete.

### <img src=https://i.imgur.com/iw4sH39.png height="24"> [/error](error.js) 
Display an error message in the chat and console log. This is just a convenience method.

### <img src=https://i.imgur.com/iw4sH39.png height="24"> [/me](me.js) 
Allows using /me to type italics text.

### <img src=https://i.imgur.com/iw4sH39.png height="24"> [/make-table-result-bold](make-table-result-bold.js) (5e homebrew) 
Converts text from crit tables to make the first sentence bold.

### <img src=https://i.imgur.com/iw4sH39.png height="24"> [/crit](crit.js) (5e homebrew)
Rolls a crit from one of the expanded critical tables (required as Rollable Tables with those names).and call a callback when it's complete.

### <img src=https://i.imgur.com/iw4sH39.png height="24"> [/reckless-cast](reckless-cast.js) (5e homebrew)
A macro created for my character, Shent, who casts random spells as a modified UA invention/chaos wizard.