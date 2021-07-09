//Given two arrays: arr1[0..m-1] of size m and arr2[0..n-1] of size n. Task is to check whether arr2[] is a subset of arr1[] or not.
// Both the arrays can be both unsorted or sorted. It may be assumed that elements in both array are distinct.

subSet([11, 1, 13, 21, 3, 7], [11, 3, 7]);

function subSet(arr1, arr2) {
    const sortArr1 = arr1.sort((a,b) => a - b);
    const sortArr2 = arr2.sort((a,b) => a - b);

    const firtElemInArr2 = sortArr2[0];
    const arr2FirstElemIdxInArr1 = sortArr1.indexOf(firtElemInArr2);

    if(arr2FirstElemIdxInArr1 !== -1) {
        let isSubSet = true;
        for(let i=1; i<sortArr2.length; i++) {
            isSubSet = sortArr1[arr2FirstElemIdxInArr1 + i] === sortArr2[i];
        }
        if(!isSubSet) {
            return console.log('Not a subset');
        } else {
            return console.log('Yes!')
        }
    }
}


function subSet1(arr1, arr2) {
}
