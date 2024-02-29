/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { expect, test } from "vitest";
import cn from "./cn";

test("should return a string", () => {
  expect(
    cn("hello", true && "world", false && "foo", null, false, undefined),
  ).toMatch(/hello world/);
});
