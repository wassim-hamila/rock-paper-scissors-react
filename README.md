# Rock Paper Scissors

A small Rock-Paper-Scissors game made with React to practice states and props.

## Features

- Play against the computer (random choice)
- Result of each round: win, lose or draw
- Score and history of the last 5 rounds
- New round / reset game buttons
- Animations and hover effects on the buttons

## Run the project

```
npm install
npm start
```

Then open http://localhost:3000

## Structure

- `src/App.js` : states and main logic of the game
- `src/components/` : ChoiceButton, ResultBoard, ScoreBoard, History
- `src/utils/game.js` : rules of the game
