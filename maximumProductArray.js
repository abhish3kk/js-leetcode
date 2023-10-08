const maximumProductSubarray = (nums) => {
  if(nums.length === 0) return 0;

  let maxProductSoFar = nums[0];
  let minProductSoFar = nums[0];
  let maxProduct = nums[0];

  for(let i=1; i< nums.length; i++) {
    console.log("🚀 ~ file: maximumProductArray.js:9 ~ maximumProductSubarray ~ i:", i)
    const num = nums[i];
    console.log("🚀 ~ file: maximumProductArray.js:10 ~ maximumProductSubarray ~ num:", num)

    if(num < 0) {
      // Swap maxProductSoFar and minProductSoFar because multiplying by a negative number
      // can change the sign of the products.
      
      [maxProductSoFar, minProductSoFar] = [minProductSoFar, maxProductSoFar];
      console.log("🚀 ~ fpile: maximumProductArray.js:18 ~ maximumProductSubarray ~ Swapping [maxProductSoFar, minProductSoFar]:", [maxProductSoFar, minProductSoFar])
    }

    maxProductSoFar = Math.max(num, maxProductSoFar * num);
    console.log("🚀 ~ file: maximumProductArray.js:18 ~ maximumProductSubarray ~ maxProductSoFar:", maxProductSoFar)
    minProductSoFar = Math.min(num, minProductSoFar * num);
    console.log("🚀 ~ file: maximumProductArray.js:20 ~ maximumProductSubarray ~ minProductSoFar:", minProductSoFar)

    maxProduct = Math.max(maxProduct, maxProductSoFar)
    console.log("🚀 ~ file: maximumProductArray.js:27 ~ maximumProductSubarray ~ maxProduct:", maxProduct)
  }

  return maxProduct;
}

console.log(maximumProductSubarray([2, 3, -2, 4, -1]))
