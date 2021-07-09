//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// You can return the answer in any order.
const integerArr = [3,2,4];
const target = 6;
let resultArr = [];
function twoSum () {
    for(let i = 0; i < integerArr.length - 1; i++) {
        const iValue =  integerArr[i];
        for(let j= i+1; j < integerArr.length - 1; j++) {
            const jValue = integerArr[j];
            if(jValue + iValue === target) {
                return [integerArr[i],integerArr[j]];
            }
        }
    }
}

console.log(twoSum());

function sum2() {

}
