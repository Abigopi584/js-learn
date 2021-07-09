/**
 * Replace each number with the next bigger number from right side of current index.
 * If no bigger number found, print the no itself.
 * E.g.
 * input;  2,5,9,6,3,4,8,15,12
 * output: 3,6,12,8,4,8,12,15,12
 */


function merge(l,r) {
    let mergedArr = [];
   while(l.length > 0 && r.length > 0) {
       if(l[0] > r[0]) {
           mergedArr.push(r[0])
       } else {
           mergedArr.push(l[0]);
       }
   }
   return [...mergedArr, ...l, ...r];
}
function mergeSort(arr) {
    if(arr.length  < 2) {
        return arr;
    }
    const midPoint = arr.length / 2;

    const left = arr.splice(0, midPoint);
    const l = mergeSort(left);
    const r = mergeSort(arr);
    return merge(l,r);
}

function replace(arr, index) {
    console.log('arr', arr, 'index', index)
    if(index === arr.length - 1) {
        return;
    }
    const firstElem = arr[index];
    let remainingElements = arr.slice(index + 1, arr.length - 1).sort((a, b) => a - b);
    let isFound = false;
    let incIndex = 0;
    console.log('remainingElements', remainingElements, index, index + 1);
    while(!isFound) {
        if(firstElem < remainingElements[incIndex]) {
            const swapIdx = arr.indexOf(remainingElements[incIndex]);
            [arr[index], arr[swapIdx]] = [arr[swapIdx], arr[index]];
            console.log('arr1', arr)
            isFound = true;
        } else if(firstElem > remainingElements[incIndex]){
            incIndex++;
        }
    }



    replace(arr, index + 1);
}

replace([2,5,9,6,3,4,8,15,12], 0);
