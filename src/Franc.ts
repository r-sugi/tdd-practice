import { Money } from "./Money.ts";
export class Franc extends Money{
  constructor(
    public amount: number
  ) {
    super()
  }

  times(multiplier: number) {
    return new Franc(this.amount * multiplier);
  }
}
