const questions = require("../files/questions.json");
const prompt = require("prompt-sync")();
const json = require("../helpers/json");

const playerPath = "src/files/players.json";

const js = new json();

class Game {
  round() {
    var randomCategory =
      questions.allQuestions[
        Math.floor(Math.random() * questions.allQuestions.length)
      ];

    for (
      let indexCategory = 0;
      indexCategory < randomCategory.category.length;
      indexCategory++
    ) {
      console.log(randomCategory.category[indexCategory].question);

      for (
        let indexContent = 0;
        indexContent < randomCategory.category[indexCategory].content.length;
        indexContent++
      ) {
        console.log(
          randomCategory.category[indexCategory].content[indexContent]
        );
      }

      var useranswer = prompt("select the number position: ");

      if (useranswer - 1 == randomCategory.category[indexCategory].correct) {
        console.log("Great Work");

        for (let index = 0; index < 2; index++) {
          const element = index;

          const currentScore = (indexCategory + element) * 1000;
          currentPlayer.updateScore(currentScore);
        }
      } else {
        console.log("You lose, have a nice day");
        indexCategory = randomCategory.category.length;
      }
    }

    const data = JSON.parse(JSON.stringify(currentPlayer));
    js.jsonReader(playerPath, (err, players) => {
      if (err) {
        console.log(err);
        return;
      }
      players.allPlayers.push(data);
      js.jsonSaver(playerPath, JSON.stringify(players));
    });
  }
}

module.exports = Game;
