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

import java.util.HashMap;

class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;
        if (s.equals(t)) return true;

        HashMap<Character, Integer> sFreqs = freqCounter(s);
        HashMap<Character, Integer> tFreqs = freqCounter(t);

        return sFreqs.equals(tFreqs);

        // int[] count = new int[26];
        // for (int i = 0; i < s.length(); i++) {
        //     count[s.charAt(i) - 'a']++;
        //     count[t.charAt(i) - 'a']--;
        // }
        //
        // for (int val : count) {
        //     if (val != 0) return false;
        // }
        // return true;
    }

    public HashMap<Character, Integer> freqCounter(String str) {
        HashMap<Character, Integer> strFreqs = new HashMap<>();

        for (char c : str.toCharArray()) {
            strFreqs.put(c, strFreqs.getOrDefault(c, 0) + 1);
        }

        return strFreqs;
    }
}
