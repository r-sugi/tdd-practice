export class Money {

  static create<T extends typeof Money>(
    this: T,
    amount: number,
    currency: string
  ): InstanceType<T> {
    return (new this(amount, currency)) as InstanceType<T>
  }

  constructor(
    protected amount: number,
    protected currency: string
  ) {
  }

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency)
  }

  toString() {
    return this.amount + " " + this.currency
  }

  getCurrency(): string {
    return this.currency
  }

  equals(object: Object): boolean {
    const money = object as Money
    return this.amount === money.amount
      && this.getCurrency() === money.getCurrency()
  }
}
