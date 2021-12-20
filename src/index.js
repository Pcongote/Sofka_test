const gameDB = require("./db/gameDB");
const player = require("./player/player");
const json = require("./helpers/json");
const prompt = require("prompt-sync")();

const questions = require("../src/files/questions.json");
const players = require("../src/files/players.json");

const questionsDB = new gameDB("questions");
const playersDB = new gameDB("players");
const js = new json();
const playerPath = "src/files/players.json";

/*
Game Setup
*/
questionsDB.addDocuments(questions.allQuestions);
playersDB.addDocuments(players.allPlayers);

/*
Game Start
*/
const answer = prompt("What is your name? ");
currentPlayer = new player(answer);

//TODA LA LOGICA DEL JUEGO

/*
Game Save
*/
currentPlayer.updateScore(currentScore);

const data = JSON.parse(JSON.stringify(currentPlayer));

js.jsonReader(playerPath, (err, players) => {
  if (err) {
    console.log(err);
    return;
  }
  players.allPlayers.push(data);
  console.log(players);
  js.jsonSaver(playerPath, JSON.stringify(players));
});
