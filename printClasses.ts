import { Character } from "./src/Character";
import { Mage } from "./src/Mage";
import { Priest } from "./src/Priest";
import { Warrior } from "./src/Warrrior";

let mage: Mage = new Mage("Ventania");
let priest: Priest = new Priest("Cigana Sarita");
let warrior: Warrior = new Warrior("Bronnar, o flagelo");
// let character : Character = new Character()

const characters: Character[] = [];

characters.push(mage);
characters.push(priest);

characters.forEach((p) => console.log(p.defend(p)));
