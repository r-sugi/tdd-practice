export class Dollor {
  constructor(
    public readonly amount: number,
  ) {}

  times(multiplier: number) {
    return new Dollor(this.amount * multiplier);
  }
  equals(object: Object): boolean {
    const dollor = object as Dollor
    return this.amount === dollor.amount
  }
}
