export function isPalindrome(word = "") {
  if (word.length <= 1) return true;
  return word[0] === word[word.length - 1];
}
