import { Character } from "./Character";
import { Utils } from "./Utils";

export class Priest extends Character {
  private _spirit: number;
  private _versatility: number;
  constructor(name: string) {
    super(name);
    this._spirit = Utils.randomize(20);
    this._versatility = Utils.randomize(12);
  }

  public atack(): string {
    return `${this._name} attacked`;
  }

  public defend(attack: Character): string {
    return `${this._name} defended the atack`;
  }
}
