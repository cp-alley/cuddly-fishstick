/*
https://leetcode.com/problems/valid-palindrome/description/

Is Palindrome
Given a string s, return true if it is a palindrome, otherwise return false.

A palindrome is a string that reads the same forward and backward. It is also
case-insensitive and ignores all non-alphanumeric characters.

Example 1:

Input: s = "Was it a car or a cat I saw?"

Output: true
Explanation: After considering only alphanumerical characters we have
"wasitacaroracatisaw", which is a palindrome.

Example 2:

Input: s = "tab a cat"

Output: false
Explanation: "tabacat" is not a palindrome.

Constraints:

1 <= s.length <= 1000
s is made up of only printable ASCII characters.

*/

class Solution {

  /** Time: O(s) Space: O(1) */
  isPalindrome(s) {
    let left = 0, right = s.length - 1;

    while (left < right) {
      while (left < right && !this.isAlphanumeric(s[left])) left++;
      while (left < right && !this.isAlphanumeric(s[right])) right--;

      if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

      left++;
      right--;
    }

    return true;
  }

  /**
   *
   * @param {string} char
   * @returns boolean indicating whether char is alphanumeric character or not
   */
  isAlphanumeric(char) {
    return /^[a-zA-Z0-9]$/.test(char)
  }
}