function mountainArray(arr) {
    const arr1 = [...arr];
    const findhighest = arr1.sort((a,b) => b - a);
    console.log(findhighest, arr);
    const highestIdx = arr.indexOf(findhighest[0]);
    console.log('highestIdx', highestIdx)
    if(highestIdx === 0) return false;
    for(let i=0; i < highestIdx; i++) {
        if(arr[i] > arr[i + 1] || arr[i] === arr[i + 1]) {
            return false
        }
    }
    for(let i=highestIdx; i < arr.length; i++) {
        if(arr[i] < arr[i + 1] || arr[i] === arr[i + 1]) {
            return false
        }
    }

    return true;
}

console.log(mountainArray([0,3,2,1]))



function blah(nums1, m, nums2, n) {
    const newArr = nums1.splice(0, n);
    console.log( newArr, [...newArr, ...nums2])
    const mergedArr = [...newArr, ...nums2];
    const sortedArr =  mergedArr.sort();
    console.log(sortedArr);
    return sortedArr;
};
console.log(blah([1,2,3,0,0,0], 3,[2,5,6], 3))
