/**
 * Capitalises the first letter of a string.
 * @param {string} str The string to capitalise.
 * @returns {string} The capitalised string.
 */
export function capitalise(str) {
  if (typeof str !== "string" || str.length === 0) {
    return "";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}
