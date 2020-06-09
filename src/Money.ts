export class Money {
  protected amount: number = 0
  constructor(
  ) {
  }
  equals(object: Object): boolean {
    const money = object as Money
    return this.amount === money.amount
  }
}
