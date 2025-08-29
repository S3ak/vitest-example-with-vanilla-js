import { expect, test, describe } from "vitest";
import { sayHello } from "./hello.js";

// This is a placeholder test. We will learn the syntax in the next lesson.
describe("sayHello", () => {
  test("should say hello to the given name", () => {
    expect(sayHello("World")).toBe("Hello, World!");
  });
});
