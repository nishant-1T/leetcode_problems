// 26. Remove Duplicates from Sorted Array

var removeDuplicates = function(nums) {
    if(!nums) return 0;

    var index2 = 1
    for(let i=1; i< nums.length; i++){
        if(nums[i] != nums[index2 - 1]){
            nums[index2] = nums[i]
            index2++
        }
    }
    return index2
};

removeDuplicates([1,1,2])