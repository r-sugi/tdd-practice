export class Dollor {
  constructor(
    public readonly amount: number,
  ) {}

  times(multiplier: number) {
    return new Dollor(this.amount * multiplier);
  }
}
