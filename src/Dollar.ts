import { Money } from "./Money.ts";

export class Dollor extends Money {
  constructor(
    public amount: number
  ) {
    super()
  }

  times(multiplier: number) {
    return new Dollor(this.amount * multiplier);
  }
}
