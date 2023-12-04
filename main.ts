import prompt from "prompt-sync";
import { Character } from "./src/Character";

let character: Character = new Character("Sansa stark");

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
      // character.trainAttack();
      console.log(character.status());
      break;
    case 2:
      // character.trainDefense();
      console.log(character.status());
      break;
    case 3:
      let hours = +keyboard("How many hours will you rest?");
      character.rest(hours);
      console.log(character.status());
      break;
    case 4:
      let damage: number = character.enterInCombat();
      console.log(`You lost ${damage.toFixed(0)} hitpoints`);
      console.log(character.status());
      break;
    case 8:
      console.log("     Character:     ");
      console.log(character.status());
      break;
    default:
      console.log("Leaving game");
  }
}
console.log("Oops, you're dead");
