export default class Character {
  constructor(
    public name: string,
    public energy: number,
    public hitPoints: number,
    public attack: number,
    public defense: number
  ) {}

  status(): string {
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

  enterInCombat(): number {
    let exhaustion = Math.random() * 100;
    this.energy -= exhaustion;
    this.isDead();
    return this.energy;
  }

  trainAttack(): void {
    this.attack += Math.random() * 7;
    this.energy -= Math.random() * 10;
    this.isDead();
  }

  trainDefense(): void {
    this.defense += Math.random() * 5;
    this.energy -= Math.random() * 10;
    this.isDead();
  }

  rest(hours: number): void {
    this.energy += hours * (Math.random() * 10);
    if (this.energy > 100) {
      this.energy = 100;
    }
    console.log("Name: ", this.name);
  }

  isDead(): boolean {
    return this.energy <= 0 ? false : true;
  }
}
