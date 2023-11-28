export default class Character {
  constructor(
    public name: string,
    public energy: number,
    public hitPoints: number,
    public attack: number,
    public defense: number
  ) {}

  status(): void {
    console.log("Name: ", this.name);
    console.log("Energy: ", this.energy.toFixed(0));
    console.log("Attack: ", this.attack.toFixed(0));
    console.log("defense: ", this.defense.toFixed(0));
  }

  enterInCombat(): number {
    this.energy -= Math.random() * 100;
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

  rest(): void {
    this.energy += Math.random() * 10;
    if (this.energy > 100) {
      this.energy = 100;
    }
    console.log("Name: ", this.name);
  }

  isDead(): boolean {
    if (this.energy <= 0) {
      console.log("Oops, you're dead");
      return true;
    } else {
      return false;
    }
  }
}
