# Sofka_test

Welcome to Question game

You can find here a question system, you will have 5 categories Nature, history, movies, mythology and art; Each one will have a multiple selection that you must choose, each round will grant a total of 1000 points if you manage to win you will have a total of 5000 thousand, if you lose in any of the rounds you will have the score that you accumulated in the previous round.

## prerequisites to be able to play:

```
Node Version 17.0.1
npm Version
8.1.0
```

After cloning the github repository on your pc, in your console type

```
npm install
npm run start-game
```

## Project Structure

```
.
├── README.md
├── package-lock.json
├── package.json
└── src
    ├── files
    │   ├── players.json
    │   └── questions.json
    ├── game
    │   └── game.js
    ├── helpers
    │   └── json.js
    ├── index.js
    └── player
        └── player.js

5 directories, 9 files
```

There will be different directories, in the files directory, you will find two Json files, in **players.json** you will find a database where you can see the game histories and your scores every time you play, in questions.json you will find all the categories and questions of this game.

In the game directory you will find **game.js** here you can see all the logic of how the game works.

In the helpers directory you will find the tool that helps us create the local database and the registry of each game.

In the player directory you will find **player.js** which is the file that will show you how each player is created.

I hope you enjoy the game
