'''
https://leetcode.com/problems/contains-duplicate/
'''

class Solution(object):
    def containsDuplicate(self, nums):
      return len(set(nums)) != len(nums)
