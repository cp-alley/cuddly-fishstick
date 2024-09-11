/*
https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

Longest Substring Without Duplicates
Given a string s, find the length of the longest substring without duplicate characters.

A substring is a contiguous sequence of characters within a string.

Example 1:

Input: s = "zxyzxyz"

Output: 3
Explanation: The string "xyz" is the longest without duplicate characters.

Example 2:

Input: s = "xxxx"

Output: 1
Constraints:

0 <= s.length <= 1000
s may consist of printable ASCII characters.
*/

class Solution {

  /**
   * Time: O(s) Space: O(s)
   * @param {string} s
   */
  lengthOfLongestSubstring(s) {
    let left = 0, right = 0, longest = 0;
    const substrChars = new Set();

    while (right < s.length) {
      while (substrChars.has(s[right])) {
        substrChars.delete(s[left]);
        left++;
      }

      substrChars.add(s[right]);
      longest = Math.max(longest, right - left + 1);
      right++;
    }

    return longest;
  }
}