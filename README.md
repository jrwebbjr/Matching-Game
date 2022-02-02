# Project_1

EMOJI MATCHUP

About:
Emoji matchup is a one player game, where you match 8 pairs of emojis together based on your own memory.

The game is vanilla JavaScript, I made my cards using photoshop.


4 x 4 grid = 16 squares of 8 different cards or images (will design cards when i have functional...)
modal - pop up asks for name, this.name will be used in messages throughout the game.
at onload, game refreshes random order of "cards" array or images using Math.random unless i find a better way to do it. 
Player selects first card and then a timer will start after first selection. Expiriment with time maybe 10 seconds to select a second card.
If player doesn't select second card within timer than first card flips back over and player will have to start again.
If player selects 2nd card within the time allotment then a function will check the cards to see if they match if they do, those cards will need to dissapear off the grid (possibly push them to a new matched cards array)and the player in turn will get a point under matches. 
if they don't match a timer will begin on the second card picked and reset after 3 seconds. Then the next turn will begin.
once all cards are matched the game will be finished and I may try to do a percentage based scoring system that depends on the time it took to get all matches, so basically the player is playing theirself. 
2 player mode will be coded differently allowing a second player to play.
hard mode will be harder images to match and a shorter time to view the cards.
