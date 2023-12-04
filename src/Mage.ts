import { Character } from "./Character";
import { Utils } from "./Utils";

export class Mage extends Character {
  private _inteligence: number;
  private _speed: number;
  constructor(name: string) {
    super(name);
    this._life = 100;
    this._inteligence = Utils.randomize(15);
    this._speed = Utils.randomize(10);
  }
}
