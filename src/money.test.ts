import {
  assertEquals,
} from "https://deno.land/std/testing/asserts.ts";

import { Dollor } from "./Dollar.ts"

Deno.test("testMultiplication", () => {
  const five = new Dollor(5)
  let product = five.times(2)
  assertEquals(10, product.amount);

  product = five.times(3)
  assertEquals(15, product.amount);
});

Deno.test("testEquality", () => {
  const dollor = new Dollor(5)
  assertEquals(dollor.equals(new Dollor(5)), true)
  assertEquals(dollor.equals(new Dollor(6)), false)
})
