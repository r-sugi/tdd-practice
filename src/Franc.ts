export class Franc {
  constructor(
    private readonly amount: number,
  ) {}

  times(multiplier: number) {
    return new Franc(this.amount * multiplier);
  }
  equals(object: Object): boolean {
    const dollor = object as Franc
    return this.amount === dollor.amount
  }
}
