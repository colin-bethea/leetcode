# https://leetcode.com/problems/contains-duplicate/

class Solution(object):

    '''
    Solution #1 - Set
    ---
    Use a set to retrieve unique elements in input array. Compare the length of the set to the length of input array.
    If they are the same, there is no duplicate. If they differ, there is a duplicate.
    ---
    R: O(n), where n is # of elements in (nums)
    S: O(n), where n is # of elements in (nums)
    '''

    def containsDuplicateWithSet(self, nums):
        return len(set(nums)) != len(nums)
