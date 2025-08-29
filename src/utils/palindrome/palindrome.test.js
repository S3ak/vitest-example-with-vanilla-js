import { describe, it, expect } from "vitest";
import { isPalindrome } from "./isPalindrom";

describe("isPalindrome", () => {
  it("returns true when given an one letter string", () => {
    expect(isPalindrome("a")).toBe(true);
  });

  it("returns false boolean when given a non palindrome string", () => {
    expect(isPalindrome("ab")).toBe(false);
  });

  it("returns true boolean when given 'racecar'", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });
});
