import {
  assertEquals,
} from "https://deno.land/std/testing/asserts.ts";

import { Dollor } from "./Dollar.ts"

Deno.test("testMultiplication", () => {
  const five = new Dollor(5)
  assertEquals(new Dollor(10), five.times(2));
  assertEquals(new Dollor(15), five.times(3));
});

Deno.test("testEquality", () => {
  const dollor = new Dollor(5)
  assertEquals(dollor.equals(new Dollor(5)), true)
  assertEquals(dollor.equals(new Dollor(6)), false)
})
