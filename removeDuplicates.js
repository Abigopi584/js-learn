//Given a string without spaces, the task is to remove duplicates from it.

function removeDuplicates(str) {
    return [...new Set(str.split(''))].join('');
}

console.log(removeDuplicates('geeksforgeeks'));

function removeDuplicates1(nums) {
    return nums.filter((num, i, nums) => nums.indexOf(num) === i);
}

console.log(removeDuplicates1([2,1,2,4,5,3,2,3,4,4]));
function removeDuplicates2(nums, val) {
    return nums.filter((num) => num !== val )
}

console.log(removeDuplicates2([2,1,2,4,5,3,2,3,4,4], 2));
