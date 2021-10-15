// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  // Define a hashmap to store values, indices
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    // Define current number, current diff
    const num = nums[i];
    const diff = target - num;

    // If hashmap contains difference, return stored index and current index
    if (map.has(diff)) return [map.get(diff), i];

    // Store (key: value => number: index) in hashmap
    map.set(num, i);
  }
};
