//Given two arrays X and Y of positive integers, find the number of pairs such that xy > yx (raised to power of) where x is an element from X and y is an element from Y.

(function squares(arr1, arr2) {
 for(let i=0; i < arr1.length; i++) {
   for(let j=0; j < arr2.length; j++) {
     if(Math.pow(arr1[i], arr2[j])  > Math.pow(arr2[j], arr1[i])) {
       console.log (`${arr1[i]} ^ ${arr2[j]} > ${arr2[j]} ^ ${arr1[i]} `);
     }
   }
 }
})([2, 3, 4, 5], [1, 2, 3]);
console.log('--------------------------')
//var intersection = array1.filter(function(e) {
//   return array2.indexOf(e) > -1;
// });
function squares1(arr1, arr2) {
    const newArray = arr1.map((v1, idx1) => {
        if(idx1 < arr1.length) {
            return arr2.map((v2, idx2) => {
                if(idx2 < arr1.length && Math.pow(v1, v2)  > Math.pow(v2, v1)) {
                    return `${v1} ^ ${v2} > ${v2} ^ ${v1} `
                }
            })
        }

    })
    console.log(newArray);
}


squares1([2, 3, 4, 5], [1, 2, 3]);
