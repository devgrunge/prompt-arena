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

  enterInCombat(): void {
    this.energy -= Math.random() * 100;
    if (this.energy <= 0) {
      console.log("Oops, you're dead");
    }
  }
}
