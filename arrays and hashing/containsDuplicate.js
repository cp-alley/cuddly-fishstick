/* https://leetcode.com/problems/contains-duplicate/description/

Duplicate Integer
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:

Input: nums = [1, 2, 3, 3]

Output: true
Example 2:

Input: nums = [1, 2, 3, 4]

Output: false

*/

class Solution {

  /** Time: O(n) Space: O(n) */
  hasDuplicate(nums) {
    const uniqueNums = new Set();

    for (const num of nums) {
      if (uniqueNums.has(num)) return true;

      uniqueNums.add(num);
    }

    return false;
  }
}
