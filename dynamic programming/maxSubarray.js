/*
https://leetcode.com/problems/maximum-subarray/description/

Maximum Subarray
Given an array of integers nums, find the subarray with the largest sum and return the sum.

A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: nums = [2,-3,4,-2,2,1,-1,4]

Output: 8
Explanation: The subarray [4,-2,2,1,-1,4] has the largest sum 8.

Example 2:

Input: nums = [-1]

Output: -1
Constraints:

1 <= nums.length <= 1000
-1000 <= nums[i] <= 1000
*/

class Solution {

  /**
   * Time: O(n) Space: O(1)
   * Kadane's algorithm
   * @param {number[]} nums
   */
  maxSubarray(nums) {
    let res = nums[0], maxEnding = nums[0];

    for (let i = 1; i < nums.length; i++) {
      // Find the max sum ending at index i
      // Either extend the max sum subarray or
      // start a new subarray at index i
      maxEnding = Math.max(maxEnding + nums[i], nums[i]);
      res = Math.max(res, maxEnding);
    }

    return res;
  }
}