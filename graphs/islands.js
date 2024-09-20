/*
https://leetcode.com/problems/number-of-islands/

Count Number of Islands
Given a 2D grid grid where '1' represents land and '0' represents water, count and
return the number of islands.

An island is formed by connecting adjacent lands horizontally or vertically and
is surrounded by water. You may assume water is surrounding the grid (i.e., all
the edges are water).

Example 1:

Input: grid = [
    ["0","1","1","1","0"],
    ["0","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]
Output: 1
Example 2:

Input: grid = [
    ["1","1","0","0","1"],
    ["1","1","0","0","1"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]
Output: 4
Constraints:

1 <= grid.length, grid[i].length <= 100
grid[i][j] is '0' or '1'.
*/

class Solution {

  /**
   * Time: O(m*n) Space: O(m*n)
   * Could make this more space efficient by marking cells as WATER after visiting
   * instead of the visited matrix.
   * @param {string[][]} grid
   * @returns {number}
   */
  numberOfIslands(grid) {
    const LAND = "1";
    const ROWS = grid.length, COLS = grid[0].length;
    const visited = Array.from({ length: ROWS }, () => Array(COLS).fill(false));

    let count = 0;

    const checkNeighbors = (i, j) => {
      const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
      ];

      const queue = [[i, j]];
      visited[i][j] = true;

      while (queue.length > 0) {
        const [r, c] = queue.shift();

        for (const [dR, dC] of directions) {
          const newRow = r + dR;
          const newCol = c + dC;

          if (newRow >= 0 && newRow < ROWS
            && newCol >= 0 && newCol < COLS
            && grid[newRow][newCol] === LAND
            && !visited[newRow][newCol]) {
            visited[newRow][newCol] = true;
            queue.push([newRow, newCol]);
          }
        }
      }
    };

    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        if (grid[i][j] === LAND && !(visited[i][j])) {
          checkNeighbors(i, j);
          count++;
        }
      }
    }

    return count;
  }
}