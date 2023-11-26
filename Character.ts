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
  console.log("| 1.train attack                              |");
  console.log("| 2.train defense                             |");
  console.log("| 3.Print attributes                          |");
  console.log("| 9.Exit                                      |");
  console.log("===============================================");

  options = +keyboard("Choose a option:  ");

  switch (options) {
    case 1:
      character.attack += 2;
      break;
    case 3:
      console.log("Character ==> ", character);
      break;
    default:
      console.log("Invalid option");
  }
}
