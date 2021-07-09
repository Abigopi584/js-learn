// Merge Sort
// Merge sort uses divide and conquer logic
// The worst case complexity nlogn as it takes less than n iterations to sort an array
/// one of the fastest sorting algorithm
// but it takes extra space as we are using helper arrays to store sub array so space complexity is o(n)

//Implementation Steps
// Start by divinding an array into roughly two halves
// Continue diving it until we have single element array
// start merging the single elemenyt sub arrays so that each merged sub array is sorted
// keep on repeating above step until we get single sorted array

function merge(left, right) {
    let mergedArr = [];
    while(left.length && right.length) {
        if(left[0] > right[0]) {
            mergedArr.push(right.shift());
        } else {
            mergedArr.push(left.shift());
        }
    }

    return [...mergedArr, ...left, ...right];
}
function mergeSort(arr) {
    const midPoint = arr.length / 2;

    if(arr.length < 2) {
        return arr;
    }

    const left = arr.splice(0, midPoint);

    const l_a = mergeSort(left);

    const r_a = mergeSort(arr);

    return merge(l_a,  r_a);
}

console.log(mergeSort([4, 8, 7, 2, 11, 1, 3, 12]));
