var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    if(nums.includes(target-nums[i]) && nums.indexOf((target-nums[i]),i+1) >=0){
      return [i,nums.indexOf((target-nums[i]),i+1)]
    }
  }
};