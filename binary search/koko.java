/*
https://leetcode.com/problems/koko-eating-bananas/description/

Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas.
The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of
bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all
of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.

Example 1:

Input: piles = [1,4,3,2], h = 9

Output: 2
Explanation: With an eating rate of 2, you can eat the bananas in 6 hours. With an eating rate of 1,
you would need 10 hours to eat all the bananas (which exceeds h=9), thus the minimum eating rate is 2.

Example 2:

Input: piles = [25,10,23,4], h = 4

Output: 25
Constraints:

1 <= piles.length <= 1,000
piles.length <= h <= 1,000,000
1 <= piles[i] <= 1,000,000,000
*/

import java.util.Arrays;

class Solution {
    /*
     * Eating speed, k, is between 1 and highest number of bananas because
     * eating the largest pile in one hour guarantees all other piles can be eaten
     * (number of hours is always >= number of piles). Binary search between 1 and
     * max banana number to find the minimum speed.
     */
    public int minEatingSpeed(int[] piles, int h) {
        int l = 1;
        int r = Arrays.stream(piles).max().getAsInt();
        int res = r;

        while (l <= r) {
            int k = l + ((r - l) / 2);

            long totalTime = 0;
            for (int p : piles) {
                totalTime += Math.ceil((double) p / k); // Round up because Koko only eats one pile per hour
            }
            if (totalTime <= h) {
                res = k;
                r = k - 1; // Try smaller values to see if there is a lower min
            } else {
                l = k + 1; // Throw out smaller values because we ain't got time
            }
        }
        return res;
    }
}
