// https://leetcode.com/problems/longest-substring-without-repeating-characters

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  // Input validation
  if (!s) return 0;

  // Define initial variables
  let longestSubstr = 1;
  let start = 0,
    end = 0;

  // Define character hashmap
  let chars = new Map();

  // Use modified sliding window to get longest substring (without repeating chars)
  while (end < s.length) {
    // Update start pointer
    if (chars.has(s[end])) {
      start = Math.max(start, chars.get(s[end]) + 1);
    }

    // Get maximum string length
    longestSubstr = Math.max(longestSubstr, end - start + 1);

    // Set new end char in hashmap (char: index)
    chars.set(s[end], end);

    // Increment pointer
    end++;
  }

  return longestSubstr;
};
