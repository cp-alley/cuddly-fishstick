/*
https://leetcode.com/problems/valid-anagram/description/

Is Anagram
Given two strings s and t, return true if the two strings are anagrams of each
other, otherwise return false.

An anagram is a string that contains the exact same characters as another string,
but the order of the characters can be different.

Example 1:

Input: s = "racecar", t = "carrace"

Output: true
Example 2:

Input: s = "jar", t = "jam"

Output: false
Constraints:

s and t consist of lowercase English letters.
*/

class Solution {

  /** Time: O(s+t) Space: O(s+t) */
  isAnagram(s, t) {
    if (s.length !== t.length) return false;
    if (s === t) return true;

    const sFreqs = this.freqCounter(s);
    const tFreqs = this.freqCounter(t);

    for (const key in sFreqs) {
      if (sFreqs[key] !== tFreqs[key]) return false;
    }

    return true;
  }

  freqCounter(word) {
    const freqs = {};

    for (const char of word) {
      freqs[char] = (freqs[char] || 0) + 1;
    }

    return freqs;
  }
}
