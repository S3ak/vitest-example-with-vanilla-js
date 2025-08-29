import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import * as apiClient from "../apiClient.js";
import { displayUserProfile, createNewPost } from "./profile.js";

describe("displayUserProfile", () => {
  const mockGet = vi.spyOn(apiClient, "get");

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("calls apiClient.get with the correct URL", async () => {
    mockGet.mockResolvedValueOnce({ id: 1, name: "Alice" });
    await displayUserProfile(1);
    expect(mockGet).toHaveBeenCalledWith("/social/profiles/1");
  });

  it("handles errors and logs the error message", async () => {
    const error = new Error("Profile not found");
    mockGet.mockRejectedValueOnce(error);
    const consoleErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});
    await displayUserProfile(123);
    expect(consoleErrorSpy).toHaveBeenCalledWith("Profile not found");
    consoleErrorSpy.mockRestore();
  });

  describe("createNewPost", () => {
    const mockPost = vi.spyOn(apiClient, "post");

    beforeEach(() => {
      vi.clearAllMocks();
    });

    it("calls apiClient.post with the correct URL and data", async () => {
      const postData = { content: "Hello world" };
      mockPost.mockResolvedValueOnce({ id: 1, ...postData });
      await createNewPost(postData);
      expect(mockPost).toHaveBeenCalledWith("/social/posts", postData);
    });

    it("handles errors and logs the error message", async () => {
      const error = new Error("Failed to create post");
      mockPost.mockRejectedValueOnce(error);
      const consoleErrorSpy = vi
        .spyOn(console, "error")
        .mockImplementation(() => {});
      await createNewPost({ content: "Test" });
      expect(consoleErrorSpy).toHaveBeenCalledWith("Failed to create post");
      consoleErrorSpy.mockRestore();
    });
  });
});
