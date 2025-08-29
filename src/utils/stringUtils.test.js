import { describe, it, expect } from "vitest";
import { capitalise } from "./stringUtils";

describe("UNIT | Capitalise", () => {
  it("should return Capitalised word when given a lowercase word", () => {
    expect(capitalise("hello")).toEqual("Hello");
  });

  it("should not change a string that is already capitalised", () => {
    expect(capitalise("World")).toEqual("World");
  });

  it("should return an empty string when given an empty string", () => {
    expect(capitalise("")).toBe("");
  });
});
