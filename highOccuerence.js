function efficient(k) {
    const  list = [2,4,4,3,4,3,4,3,2,4,4];
    const sortedArr = list.sort();
    const repeatingArr = [];

    for(let i = 0; i < sortedArr.length; i++) {
        const elem = sortedArr[i];
        const total = (sortedArr.lastIndexOf(elem) - sortedArr.indexOf(elem)) + 1;
        repeatingArr.push({ elem, total});
        i = sortedArr.lastIndexOf(elem) + 1;
    }

    const sortByCount = repeatingArr.sort((a, b) => b.total - a.total);
    console.log(sortByCount.splice(0,k));
}
//efficient(2);


/*
const sortedNums = nums.sort((a,b) => a - b);
const repeatedArray = [];
for(let i = 0; i< sortedNums.length; i++) {
    const count = 1 + (sortedNums.lastIndexOf(sortedNums[i]) - sortedNums.indexOf(sortedNums[i]))
    repeatedArray.push({ elem: sortedNums[i], count: count});
    i = sortedNums.lastIndexOf(sortedNums[i]) + 1;
}

return repeatedArray.sort((a,b) => b.count - a.count).splice(0,k);
*/


// first non repeating


function nonRepeating(arr) {
    const sortArr = arr.sort((a,b) => a - b);
    for(let i=0; i< sortArr.length; i++) {
        const lastIdx = sortArr.lastIndexOf(sortArr[i]);
        if(i === lastIdx) {
            return `${sortArr[i]} is first non repeating`
        } else {
            i = lastIdx;
        }

    }
    return "No non repeating found"
};

console.log(nonRepeating([2,4,4,3,4,3,4,7,7,10,3,2,4,4,5,5]));
