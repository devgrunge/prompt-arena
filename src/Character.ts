import { Utils } from "./Utils";

export class Character {
  protected _name: string;
  protected _armor: number;
  protected _maxLife: number;
  protected _life: number;
  constructor(name: string) {
    this._name = this.name;
    this._armor = Utils.randomize(1);
    this._maxLife = Utils.randomize(90);
    this._life = Utils.randomize(90);
  }

  public get name(): string {
    return this._name;
  }

  public set name(newName: string) {
    this._name = newName;
  }

  public status(): string {
    return (
      "Character  \n" +
      "Name: " +
      this.name +
      "\nArmor:  " +
      this._armor.toFixed(0) +
      "\nAtack:   "
      // this._attack.toFixed(0) +
      // "\nDefense: " +
      // this._defense.toFixed(0)
    );
  }

  public enterInCombat(): number {
    let exhaustion = this.randomizer(100);
    this._armor -= exhaustion;
    this.isDead();
    return this._armor;
  }

  // public trainAttack(): void {
  //   this._attack += this.randomizer(7);
  //   this._armor -= this.randomizer(10);
  //   this.isDead();
  // }

  // public trainDefense(): number {
  //   this._defense += this.randomizer(5);
  //   this._armor -= this.randomizer(10);
  //   this.isDead();
  //   return this._armor;
  // }

  public rest(hours: number): void {
    this._armor += hours * this.randomizer(10);
    if (this._armor > 100) {
      this._armor = 100;
    }
    console.log("Name: ", this.name);
  }

  public isDead(): boolean {
    return this._armor <= 0 ? false : true;
  }

  private randomizer(factor: number): number {
    return Math.random() * factor;
  }
}
