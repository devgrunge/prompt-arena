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
let keyboard = prompt();



let sansa: Character = new Character("Sansa stark", 100, 50, 20, 30);
sansa.name = "Sansa stark";
console.log("====>", sansa);
