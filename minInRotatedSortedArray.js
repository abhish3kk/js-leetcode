const minInRotatedSortedArray = (nums) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      // The minimum element must be in the right half.
      left = mid + 1;
    } else {
      // The minimum element is in the left half or at mid.
      right = mid;
    }
  }
  
  return nums[left]
}

console.log(minInRotatedSortedArray([3, 4, 5, 1, 2]));