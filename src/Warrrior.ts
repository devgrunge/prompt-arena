import { Character } from "./Character";
import { Utils } from "./Utils";

export class Warrior extends Character {
  private _strength: number;
  private _agility: number;
  constructor(name: string) {
    super(name);
    this._armor = Utils.randomize(13);
    this._maxLife = Utils.randomize(100);
    this._life = 100;
    this._strength = Utils.randomize(14);
    this._agility = Utils.randomize(12);
  }
  public atack(): string {
    return `${this._name} attacked`;
  }

  public defend(attackedBy: Character): string {
    return `${this._name} defended the atack`;
  }
}
