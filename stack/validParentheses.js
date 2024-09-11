/*
https://leetcode.com/problems/valid-parentheses/description/

Validate Parentheses
You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

The input string s is valid if and only if:

Every open bracket is closed by the same type of close bracket.
Open brackets are closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
Return true if s is a valid string, and false otherwise.

Example 1:

Input: s = "[]"

Output: true
Example 2:

Input: s = "([{}])"

Output: true
Example 3:

Input: s = "[(])"

Output: false
Explanation: The brackets are not closed in the correct order.

Constraints:

1 <= s.length <= 1000
*/

class Solution {

  /**
   * Time: O(s) Space: O(s)
   * @param {string} s
   */
  isValid(s) {
    // Iterate through the string, if open {[( add to stack, if close ]}) check
    // top of stack. At end of string, check that stack is empty (all brackets closed)
    const stack = [];
    const pairs = {
      "]":"[",
      "}":"{",
      ")":"("
    }

    for (const bracket of s) {
      const isBracket = bracket in pairs;
      if  (!isBracket) {
        stack.push(bracket);
      } else if (isBracket) {
        const open = stack.pop();
        if (open !== pairs[bracket]) {
          return false;
        }
      }
    }

    return stack.length === 0;
  }
}