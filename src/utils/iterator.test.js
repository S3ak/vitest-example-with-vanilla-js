import { forEach } from "./iterator.js";
import { describe, it, expect, vitest } from "vitest";

describe("forEach", () => {
  it("should call the callback for each item in the array", () => {
    // Arrange: Create a mock function for our callback
    const mockCallback = vitest.fn();
    const items = [1, 2];

    // Act: Call the function with our mock
    forEach(items, mockCallback);

    // Assert: Check how our mock was used
    expect(mockCallback).toHaveBeenCalledTimes(2);
    expect(mockCallback).toHaveBeenCalledWith(1);
    expect(mockCallback).toHaveBeenCalledWith(2);

    mockCallback.mockReturnValue({ name: "bru" });
  });
});
