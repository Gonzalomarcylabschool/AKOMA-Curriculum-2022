function twoSum (nums, target){

    // for (let i = 0; i <= nums.length; i++){
    //     for(let j = i+1; j <= nums.length; j++){
    //         if (nums[i] + nums[j] === target ){
    //             arr.push(i, j)      
    //         }
    //     }
    // }   
  let hash = {};

  for(let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if(hash[target - n] !== undefined) {
      return [hash[target - n], i];
    }
    hash[n] = i;
  }
  return [];
};
