export default class Character {
  constructor(
    private _name: string,
    private energy: number,
    private hitPoints: number,
    private attack: number,
    private defense: number
  ) {}

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
      "\nEnergy:  " +
      this.energy.toFixed(0) +
      "\nAtack:   " +
      this.attack.toFixed(0) +
      "\nDefense: " +
      this.defense.toFixed(0)
    );
  }

  public enterInCombat(): number {
    let exhaustion = this.randomizer(100);
    this.energy -= exhaustion;
    this.isDead();
    return this.energy;
  }

  public trainAttack(): void {
    this.attack += this.randomizer(7);
    this.energy -= this.randomizer(10);
    this.isDead();
  }

  public trainDefense(): number {
    this.defense += this.randomizer(5);
    this.energy -= this.randomizer(10);
    this.isDead();
    return this.energy;
  }

  public rest(hours: number): void {
    this.energy += hours * this.randomizer(10);
    if (this.energy > 100) {
      this.energy = 100;
    }
    console.log("Name: ", this.name);
  }

  public isDead(): boolean {
    return this.energy <= 0 ? false : true;
  }

  private randomizer(factor: number): number {
    return Math.random() * factor;
  }
}
