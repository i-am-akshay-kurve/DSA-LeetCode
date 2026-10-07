/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const n = nums.length;
    if (n === 0) return;
    k %= n;
    const removed = nums.splice(n - k, k);
    nums.unshift(...removed);
};