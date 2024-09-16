//LeetCode problem - 136: Single Number
var singleNumber = function(nums) {
    if (nums.length == 0) return "Array is empty";
    let i=0;
    var unique = 0;
    while(i != nums.length) {
        unique = unique ^ nums[i];
        i++;
    }
    return unique;
};