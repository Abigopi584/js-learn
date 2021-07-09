// Insertion sort

function insertionSort(arr) {
    if(!Array.isArray(arr)) return "INvalid Array";
    if(arr.length < 2) return arr;

    let j, key;
    for(let i =1; i < arr.length; i++) {
        key = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] >  key) {
            arr[j + 1] = arr[j];
            j =  j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}


console.log(insertionSort([7,12, 11, 13, 5, 6]));


// Merge sort

function merge(l, r) {
    const sortedArr = [];
    while(l.length && r.length) {
        if(l[0] > r[0]) {
            sortedArr.push(r.shift());
        } else {
            sortedArr.push(l.shift())
        }
    }

    return [...sortedArr, ...l, ...r];
}


function mergeSort(arr) {
    if(!Array.isArray(arr)) return 'Invalid Input array';
    if(arr.length < 2) return arr;

    const mid = arr.length / 2;
    const left = arr.splice(0, mid);
    const l_a = mergeSort(left);
    const r_a = mergeSort(arr);
    return merge(l_a, r_a);
}

console.log(mergeSort([7,12, 11, 13, 5, 6]));


//quick sort


