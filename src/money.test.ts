import {
  assertEquals,
} from "https://deno.land/std/testing/asserts.ts";

import { Dollor } from "./Dollar.ts"
import { Franc } from "./Franc.ts"

Deno.test("testMultiplication", () => {
  const five = new Franc(5)
  assertEquals(new Franc(10), five.times(2));
  assertEquals(new Franc(15), five.times(3));
});

Deno.test("testEquality", () => {
  const dollor = new Dollor(5)
  assertEquals(dollor.equals(new Dollor(5)), true)
  assertEquals(dollor.equals(new Dollor(6)), false)

  assertEquals(new Franc(5).equals(new Franc(5)), true)
  assertEquals(new Franc(5).equals(new Franc(6)), false)
})
