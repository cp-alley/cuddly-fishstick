/*
https://leetcode.com/problems/group-anagrams/description/

Anagram Groups
Given an array of strings strs, group all anagrams together into sublists. You
may return the output in any order.

An anagram is a string that contains the exact same characters as another string,
but the order of the characters can be different.

Example 1:

Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
Example 2:

Input: strs = ["x"]

Output: [["x"]]
Example 3:

Input: strs = [""]

Output: [[""]]
Constraints:

1 <= strs.length <= 1000.
0 <= strs[i].length <= 100
strs[i] is made up of lowercase English letters.
*/

class Solution {

  /**
   * Time: O(n * k) Space: O(n * k)
   * @param {string[]} strs
   * @returns {string[][]}
   */
  groupAnagrams(strs) {
    const res = {};

    for (const word of strs) {
      const count = Array(26).fill(0);
      for (const char of word) {
        count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
      }

      const key = count.join("#");
      if (!(key in res)) {
        res[key] = [];
      }

      res[key].push(word);
    }

    return Object.values(res);
  }
}