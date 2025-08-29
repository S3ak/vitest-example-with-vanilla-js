import { get, post } from "../apiClient.js";

/**
 * Fetches and displays a user profile by ID.
 *
 * @async
 * @param {string|number} id - The unique identifier of the user profile to display.
 * @returns {Promise<void>} Resolves when the profile has been fetched and rendered.
 */
export async function displayUserProfile(id) {
  try {
    const profile = await get(`/social/profiles/${id}`);
    // ... render profile
  } catch (error) {
    // The error from the apiClient is already descriptive
    console.error(error?.message);
  }
}

export async function createNewPost(postData) {
  try {
    const newPost = await post("/social/posts", postData);
    // ... do something with new post
  } catch (error) {
    console.error(error?.message);
  }
}
