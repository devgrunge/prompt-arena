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
    console.log("Energy: ", this.attack.toFixed(0));
    console.log("Energy: ", this.defense.toFixed(0));
  }
}
