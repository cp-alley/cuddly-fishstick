/*
https://leetcode.com/problems/top-k-frequent-elements/description/

Top K Elements in List
Given an integer array nums and an integer k, return the k most frequent elements
within the array.

The test cases are generated such that the answer is always unique.

You may return the output in any order.

Example 1:

Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]
Example 2:

Input: nums = [7,7], k = 1

Output: [7]
Constraints:

1 <= nums.length <= 10^4.
-1000 <= nums[i] <= 1000
1 <= k <= number of distinct elements in nums.
*/

class Solution {

  /**
   * Time: O(n) Space: O(n)
   * @param {number[]} nums
   * @param {number} k
   * @returns {number[]}
   */
  topKFrequent(nums, k) {
    // Get frequency of elements in array
    const freqs = {};
    for (const num of nums) {
      freqs[num] = (freqs[num] || 0) + 1;
    }

    // Bucket sort based on counts. Index is frequency count, value is array of
    // numbers that appear that many times
    const freqMap = Array.from({ length: nums.length + 1 }, () => []);
    for (const num in freqs) {
      freqMap[freqs[num]].push(num);
    }

    // Traverse backwards to get top k frequent elements
    const res = [];
    for (let i = freqMap.length - 1; i > 0; i--) {
      for (const num of freqMap[i]) {
        res.push(num);
        if (res.length === k) {
          return res;
        }
      }
    }
  }
}