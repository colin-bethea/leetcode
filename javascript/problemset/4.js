// https://leetcode.com/problems/median-of-two-sorted-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function (nums1, nums2) {
  const merged = sort([...nums1, ...nums2]);
  if (merged.length % 2 === 0) {
    const middleIdx = Math.floor(merged.length / 2);
    return (merged[middleIdx] + merged[middleIdx - 1]) / 2;
  } else {
    return merged[Math.floor(merged.length / 2)];
  }
};

const merge = (left, right) => {
  const merged = [];
  while (left.length && right.length)
    merged.push(left[0] > right[0] ? right.shift() : left.shift());
  while (left.length) merged.push(left.shift());
  while (right.length) merged.push(right.shift());
  return merged;
};

const sort = (arr) => {
  if (arr.length < 2) return arr;
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle, arr.length);
  return merge(sort(left), sort(right));
};
