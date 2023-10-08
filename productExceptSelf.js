const productExceptSelf = (nums) => {
  const leftArray = new Array(nums.length).fill(1);
  const rightArray = new Array(nums.length).fill(1);
  const final = [];

  let leftProduct = 1;
  for(let i=0; i<nums.length; i++) {
    leftArray[i] = leftArray[i] * leftProduct;
    leftProduct = leftProduct * nums[i]
  }

  let rightProduct = 1;
  for(let i = nums.length-1; i>=0; i--) {
    rightArray[i] = rightArray[i] * rightProduct;
    rightProduct = nums[i] * rightProduct;
  }
  console.log("🚀 ~ file: productExceptSelf.js:16 ~ productExceptSelf ~ rightProduct:", leftArray, rightArray)

  nums.forEach((num, i) => {
    final.push(leftArray[i] * rightArray[i])
  });

  return final
}

console.log(productExceptSelf([1,2,3,4]));