Inspiration:
I wanted to make a supermario type game where you had to jump over objects and get to a finish line to win. But then I decided to simplify that to the basics to just making it a jump game. Similar to the one the Dinosaur game you could play on Google Chrome. 

Directions:
- Use your mouse to click to jump over the square. 
- Everytime you jump over the square you get a point. 
- If you hit the square, you lose the game.

Code:
I created variables for the neon red block, the yellow character, and the score. Used an event listener in order for the click of the mouse to coorelate to a jump. I used a keyframes animation in my styles.css for the jump to go up 50px and back down. Then I created another function that will remove jump when the animation ends. 
The score was the hardest to figure out. I had to figure out how close the square would get to the character and found out that if it is less than 120px, as you clear the squre, to add to the score. The check dead allows for the game to end if you hit the square. This reads by if the pixels merge together, then the game ends. The game over will also show when the game ends. 

Bugs:
- The game will automatically start, when it would be better if there was a click to start the game. 
- Game Over doesn't go away after restart of the game. So game over needs to completely stop the game and add more style and flashing to the game over.

Future Iterations:
- adding more style to the characters and overall game. Making it more unique.
- add other enemies other than the one block to jump over that could be more points than another. 

