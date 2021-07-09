//Quick Sort
//In place agorithm. efficient and fast as mergeSort
// Depends on how we choose the pivot

function getPivotIndex(arr, start, end) {
    let pivotValue = arr[end];
    let pivotIndex = start;
    console.log('PV:',pivotValue,'PI:', pivotIndex);

    for(let i=start; i<end; i++) {
        console.log('i value:',i,'A[i]:',arr[i], 'PV:',pivotValue, 'pivotIndex:', pivotIndex);
        if(arr[i] < pivotValue) {
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            console.log('arr', arr);
            pivotIndex++;
        }
    }
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
    console.log('pivotIndex', pivotIndex, arr);
    return pivotIndex;

}

function quickSort(arr, start = 0, end) {
    if(start >= end) {
        return;
    }

    const pivotIndex = getPivotIndex(arr, start, end);
    console.log('start:', start, 'end:', end, arr);
    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);
}


function quickSortIterative(arr) {
    let stack = [];
    stack.push(0);
    stack.push(arr.length - 1);

    while(stack[stack.length - 1] >= 0) {
        let end = stack.pop();
        let start = stack.pop();
        console.log('stack', stack, 'end', end, 'start', start)    ;
        let pivotIndex = getPivotIndex(arr, start, end);
        if(pivotIndex - 1 > start) {
            stack.push(start);
            stack.push(pivotIndex - 1);
        }

        if(pivotIndex + 1 < end) {
            stack.push(pivotIndex + 1);
            stack.push(end);
        }
        console.log('at the end:', stack)
    }

}
const array1 = [7, -2, 4, 1, 6, 5, 0, -4, 2];
quickSortIterative(array1, 0, array1.length - 1);

console.log(array1);
