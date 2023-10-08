const maxSubArray = nums => {
  // Initialize variables to keep track of the maximum sum ending at the current index
  // and the maximum sum encountered so far.
  let maxEndingHere = nums[0];
  let maxSoFar = nums[0];

  // Loop through the array starting from the second element.
  for (let i = 1; i < nums.length; i++) {
      // Calculate the maximum sum ending at the current index by choosing either the current element
      // or adding it to the sum ending at the previous index (if it's positive).
      maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);

      // Update maxSoFar with the maximum value between the previous maxSoFar and the new maxEndingHere.
      maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  // Return the maximum sum subarray encountered.
  return maxSoFar;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))