const game = require("./game/game");
const player = require("./player/player");
const prompt = require("prompt-sync")();

/*
Game Start
*/
const answer = prompt("What is your name? ");
currentPlayer = new player(answer);

//Logic Game
var newGame = new game();
newGame.round();
