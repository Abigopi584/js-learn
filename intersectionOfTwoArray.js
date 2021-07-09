//Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
function intersection(num1, num2) {
 let match = false;
 let matchingIndex = 0;
 for(let i=0; i<num1.length - num2.length; i++){
     for(let j=0; j< num2.length; j++) {
         console.log('num1[i + j]', num1[i + j],'num2[j]', num2[j])
         if(num1[i + j] === num2[j]) {
             match = true;
         }
     }
     if(match) {
         matchingIndex = i;
     }
 }
 return matchingIndex;
}
console.log('intersection', intersection([1,2,2,1], [2,2]))
