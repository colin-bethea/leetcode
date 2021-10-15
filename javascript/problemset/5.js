// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function (s) {
  if (!s) return 0;

  let longestPalindrome = "";

  function isPalindrome(s, low, high) {
    while (low >= 0 && high <= s.length && s[low] === s[high]) {
      const substring = s.substring(low, high + 1);
      if (substring.length > longestPalindrome.length) {
        longestPalindrome = substring;
      }
      low--, high++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    isPalindrome(s, i, i); // odd
    isPalindrome(s, i, i + 1); // even
  }

  return longestPalindrome;
};
