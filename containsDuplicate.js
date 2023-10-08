const containsDuplicate = (nums) => {
  let map = {};

  for(let i=0; i<nums.length; i++) {
    if(map.hasOwnProperty([nums[i]])) {
      return true
    } else {
      map[nums[i]] = i
    }
  }
  return false
}

console.log(containsDuplicate([1,2,3,4]));