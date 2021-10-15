// https://leetcode.com/problems/zigzag-conversion/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function (s, numRows) {
  if (numRows === 1 || s.length < numRows) {
    return s;
  }

  let rows = Array(numRows)
    .fill()
    .map((x) => []);
  let converted = "";
  let reverse = false;
  let count = 0;

  for (const char of s) {
    rows[count].push(char);
    reverse ? count-- : count++;
    if (count === numRows - 1 || count === 0) {
      reverse = !reverse;
    }
  }

  return rows.reduce((x, y) => x + y.join(""), "");
};
