# Solitare CS

## Description

I tried recreated the beloved card game Solitare using a combination of Html, CSS, JS, and jQuery. Since this is our second assignment I thought it would best to build on what I learned from the last one. So I wanted to include state functionality, which is also a common feature of Solitare being able to undo and redo moves. I learned i could use multpile js files and export classes/functions. I also misunderstood this current assignment a bit, in hindsight I could have used the canvas to create the patterns for my playing cards. Creating the function that lets the user see the trail of their mouse was difficult enough but rewarding. Now in regards to the Solitare section, the game functionality includes:

- **Creating the Playing Field**: The `createBoard()` function creates the initial playing field by generating and positioning the cards on the game board.

- **Creating Cards**: The `createCard()` function is responsible for creating individual card elements with specific attributes such as the card's suit, rank, and appearance.

- **Creating Stacks**: The `createStack()` function populates the stacks on the game board by appending cards from the deck to each stack and adjusting their visual positioning.

- **Drawing Cards**: The `drawCard()` function allows the player to draw a card from the draw pile and adds it to the top stack on the game board.

- **Game State Management**: The `gameState` class provides methods to save and restore the state of the game, allowing the player to undo and redo moves.

- **Game Controls**: The code includes event listeners for buttons such as "Undo," "Redo," and "Reset" to provide game control functionality.


### What I Learned

Throughout the development of my 2D Graphic Demo, several valuable lessons were learned:

1. **Working with multiple JavaScript files:** The project employed a modular approach by using separate JavaScript files for different components, allowing for better organization and maintainability of the codebase.

2. **Exporting classes and functions:** The use of module exports facilitated the sharing and reuse of code across different files, enhancing code encapsulation and reusability.

3. **Incorporating user interactions:** Implementing drag and drop functionality and handling user inputs provided insights into managing user interactions effectively and ensuring a smooth and intuitive gameplay experience.

4. **Enhancing user experience:** Integrating visual cues and animations helped improve the overall user experience, making the game feel more authentic.

5. **Canvas Element:** Through HTML's `<canvas>` element, I learned to create a dynamic drawing surface on which JavaScript can render graphics and interactive elements. It provides a powerful tool for creating visually rich content on the web. There was a bit of math involved butfrom what I have seen online, and my peer's work the implications are almost boundless.

6. **Mouse Animation Function:** Implementing mouse animations on the canvas was a new experience for me. By listening for mouse events on the canvas, I learned to track the mouse position and draw visual effects accordingly. I achieved a simple mouse trail effect by drawing lines between the previous and current mouse positions using the canvas's 2D rendering context.

7. **FlatMaps:** I utilized flatMap when populating the `deck` array with card elements. By using flatMap, I could efficiently transform each element of the source deck into card elements and flatten them into a single array. This approach simplified the process of generating and managing the deck of cards. This approach allowed me to write concise and readable code while improving the performance of array population.

## Compiling

To play Solitaire CS, simply visit the [website](https://pages.github.iu.edu/mfalana/CSCI43700_summer23_A2/) and start exploring the game.
**Note:** Please be aware that the Solitaire game is not yet finished. However, you can move your mouse around on the canvas, draw cards, and flip some of them.

## Future Improvements

While the current version of Solitaire CS offers a limited set of features, there are several potential enhancements and improvements that could be made:

1. **Completing the game logic:** Implement the full Solitaire game rules, including moving cards, building foundations, and managing the playing field.

2. **Improve user experience:** Enhance the user interface with visual cues, animations, and sound effects to provide a more engaging and immersive gaming experience.

3. **Refininng the undo/redo functionality:** Implement the ability to undo and redo moves, allowing players to revert their actions and explore different strategies.

4. **Implement drag and drop:** Enable users to move cards by dragging and dropping them to desired positions, providing a more intuitive and interactive gameplay.

5. **Create a responsive design:** Make the game responsive to different screen sizes and devices, allowing players to enjoy Solitaire CS on desktop and mobile platforms.

6. **Include scoring and timer:** Introduce scoring mechanics to track and display the player's performance, as well as a timer to measure the duration of each game.

By implementing these enhancements and addressing the unfinished aspects, Solitaire CS can evolve into a fully functional and enjoyable Solitaire game for players to immerse themselves in the classic card game experience.




