import {
  assertEquals,
} from "https://deno.land/std/testing/asserts.ts";

import { Money } from "./Money.ts";
import { Dollar } from "./Dollar.ts";
import { Franc } from "./Franc.ts";

Deno.test("testMultiplication", () => {
  const five = Dollar.create(5, "USD") as Money
  assertEquals(Dollar.create(10, "USD"), five.times(2));
  assertEquals(Dollar.create(15, "USD"), five.times(3));
});

Deno.test("testFrancMultiplication", () => {
  const five = Franc.create(5, "CHF") as Money
  assertEquals(Franc.create(10, "CHF"), five.times(2));
  assertEquals(Franc.create(15, "CHF"), five.times(3));
});

Deno.test("testEquality", () => {
  assertEquals(
    Franc.create(1,"CHF").equals(Franc.create(1, "CHF")),
    true
  )
  assertEquals(
    Franc.create(2,"CHF").equals(Franc.create(1, "CHF")),
    false
  )
  assertEquals(
    Franc.create(1,"CHF").equals(Dollar.create(1, "USD")),
    false
  )
})

Deno.test("testCurrency", () => {
  assertEquals(
    "USD" === Dollar.create(1, "USD").getCurrency(),
    true
  )
})

Deno.test("testDifferentEquality", () => {
  assertEquals(
    (new Money(10, "CHF")).equals(new Franc(10, "CHF")),
    true
  )
})
