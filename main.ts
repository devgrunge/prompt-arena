import prompt from "prompt-sync";
import Character from "./src/Character";

let character: Character = new Character("Sansa stark", 100, 50, 20, 30);

let keyboard = prompt();

let options: number = 0;

while (options !== 9 || character.isDead()) {
  console.log("================= Character   =================");
  console.log("| 1.Train attack                              |");
  console.log("| 2.Train defense                             |");
  console.log("| 3.Rest                                      |");
  console.log("| 4.Enter in combat                           |");
  console.log("| 8.Print attributes                          |");
  console.log("| 9.Exit                                      |");
  console.log("===============================================");

  options = +keyboard("Choose a option:  ");

  switch (options) {
    case 1:
      character.trainAttack();
      character.status();
      break;
    case 2:
      character.trainDefense();
      character.status();
      break;
    case 3:
      character.rest();
      character.status();
      break;
    case 4:
      let damage: number = character.enterInCombat();
      console.log(`You lost ${damage.toFixed(0)} hitpoints`);
      character.status();
      break;
    case 8:
      console.log("     Character:     ");
      character.status();
      break;
    default:
      console.log("Leaving game");
  }
}
