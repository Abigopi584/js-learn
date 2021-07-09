//Find the first duplicate occurence in an array

//not a right solution
function dup1(arr) {
    if(!arr) return "Invalid arguments";
    if(arr && arr.length < 2) return "No duplicates found";

    const sortedArr = arr.sort((a,b) => a - b);

    for(let i=0; i< sortedArr.length; i++) {
        let elem = sortedArr[i];
        let lastIndex = sortedArr.lastIndexOf(elem);
        if(i != lastIndex) {
            return elem;
        }
    }
    return "No duplicates found";
}


function dup2(arr) {
    let found = false;
    if(arr.length < 2) {
        return "No repeating element found";
    }
    const lastIndex = arr.lastIndexOf(arr[0]);

    if(lastIndex !== 0) {
        found = true;
    }
    if(!found) {
        return  dup2(arr.slice(1, arr.length));
    }
   return arr[0];
}

const first = dup2([3,2,0,5,4,6,7]);
console.log('first:', first);


function allNonRepeating(arr, nonR = [], rArr= []) {
    const lastIndex = arr.lastIndexOf(arr[0]);
    const rInded = rArr.indexOf(arr[0]);
    if(arr.length === 0) {
        return "Valid Array please"
    }
    if(arr.length < 2) {
        console.log(new Set(rArr));
        return [...nonR, ...arr];
    }
    if(lastIndex === 0 && rInded === -1) {
        nonR.push(arr[0])
    } else {
        rArr.push(arr[0]);
    }
    return allNonRepeating(arr.slice(1, arr.length), nonR, rArr);
}


//console.log(allNonRepeating([3,2,3,0,5,4,6,7, 7]));


function nonRepeating(arr, rArr = []) {
    const lastIndex = arr.lastIndexOf(arr[0]);
    if(arr.length < 2) {
        console.log('rAee',rArr);
        return arr[0];
    }

    if(arr.length === 0) {
        return "Valid Array please"
    }

    if(lastIndex === 0 && rArr.indexOf(arr[0]) === -1) {
        return arr[0];
    } else {
        rArr.push(arr[0])
    }
    return nonRepeating(arr.slice(1, arr.length), rArr);
}


console.log(nonRepeating([3,2,2,3,0,5,4,6,7, 7]));


function firstDup(arr) {
    return arr.findIndex((elem, index) => arr.lastIndexOf(elem) !== index);
}

console.log(firstDup([5, 2, 3, 4, 4, 6, 7, 1, 2, 3]))

