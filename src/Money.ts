export class Money {
  protected amount: number = 0
  constructor(
  ) {
  }

  equals(object: Object): boolean {
    const money = object as Money
    console.log(this.constructor.name, money.constructor.name)
    return this.amount === money.amount
      && this.constructor.name === money.constructor.name
  }
}
