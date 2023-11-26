import prompt from "prompt-sync";
class Character {
  constructor(
    public name: string,
    public energy: number,
    public hitPoints: number,
    public attack: number,
    public defense: number
  ) {
    this.energy = 50;
    this.attack = 50;
    this.name = name;
  }
}
let character: Character = new Character("Sansa stark", 100, 50, 20, 30);

let keyboard = prompt();

let options: number = 0;

while (options !== 9) {
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
      character.attack += Math.random() * 7;
      character.energy -= Math.random() * 10;
      break;
    case 2:
      character.defense += Math.random() * 5;
      character.energy -= Math.random() * 10;
      break;
    case 3:
      character.energy += Math.random() * 10;
      break;
    case 4:
      character.energy -= Math.random() * 100;
      if (character.energy <= 0) {
        console.log("Oops, you're dead");
      }
    case 8:
      console.log("Character ==> ", character);
      break;
    default:
      console.log("Invalid option");
  }
}
