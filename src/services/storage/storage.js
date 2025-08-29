/**
 * Gets a value from the browsers localstorage
 * @author Monde Sineke <nsineke@gmail.com>
 * @link https://www.w3schools.com/jsref/prop_win_localstorage.asp
 * @param {string} key - The name of the key you want to retrieve
 * @returns {string} a unparsed string;
 * @example
 * ```
 * const accessToken = JSON.parse(load("access-token"));
 * ```
 */
export function load(key = "") {
  // This would normally interact with localStorage
  return localStorage.getItem(key);
}
