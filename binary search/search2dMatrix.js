/*
https://leetcode.com/problems/search-a-2d-matrix/description/

Search 2D Matrix
You are given an m x n 2-D integer array matrix and an integer target.

Each row in matrix is sorted in non-decreasing order.
The first integer of every row is greater than the last integer of the previous row.
Return true if target exists within matrix or false otherwise.

Can you write a solution that runs in O(log(m * n)) time?

Example 1:

Input: matrix = [
  [ 1, 2, 4, 8],
  [10,11,12,13],
  [14,20,30,40]
], target = 10

Output: true
Example 2:

Input: matrix = [
  [ 1, 2, 4, 8],
  [10,11,12,13],
  [14,20,30,40]
], target = 15

Output: false
Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-10000 <= matrix[i][j], target <= 10000
*/

class Solution {

  /**
   * Time: O(log m + log n) Space: O(1)
   * @param {number[][]} matrix
   * @param {number} target
   * @return {boolean}
   */
  search(matrix, target) {
    const ROWS = matrix.length, COLS = matrix[0].length;
    let low = 0, high = ROWS - 1, row;

    while (low <= high) {
      row = low + Math.floor((high - low) / 2);
      if (target < matrix[row][0]) {
        high = row - 1;
      } else if (target > matrix[row][COLS - 1]) {
        low = row + 1;
      } else {
        break;
      }
    }
    if (!(low <= high)) return false;

    let l = 0, r = COLS - 1, m;

    while (l <= r) {
      m = l + Math.floor((r - l) / 2);
      if (target < matrix[row][m]) {
        r = m - 1;
      } else if (target > matrix[row][m]) {
        l = m + 1;
      } else {
        return true;
      }
    }

    return false;
  }
}