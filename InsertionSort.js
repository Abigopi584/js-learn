//insertion sort
// Complexity is o(n ^ 2)
// can be used for small array
// space complexity o(1) as this is a in place algorithm
// Cannot bve used for large arrays

function insertionSort(arr, n){

    let key, j;

    for(let i=1; i< arr.length; i++) {
        key = arr[i];
        j = i - 1;
        while(j >=0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            console.log('arr',arr);
            j = j - 1;
        }
        arr[j + 1] = key;
        console.log('arr2', arr)
    }

    return arr;
}

console.log(insertionSort([7,12, 11, 13, 5, 6]))
