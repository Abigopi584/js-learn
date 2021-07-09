//Given a array of N strings, find the longest common prefix among all strings present in the array.
//4
// geeksforgeeks geeks geek geezer
// 3
// apple ape april
//
// Output:
// gee
// ap

lowestCommonPrefix(['geeksforgeeks', 'geeks', 'geek', 'geezer'], 4)
lowestCommonPrefix(['apple', 'ape' ,'april'], 3)
lowestCommonPrefix(['flower', 'flow', 'flight'], 3)
lowestCommonPrefix(['dog', 'car', 'flight'], 3)

function lowestCommonPrefix(arr, n) {
    const sortedArr = arr.sort((a, b) => a.length - b.length);
    console.log(sortedArr)
    const firstStr = sortedArr[0];
    let str;
    let isCommon = false;

    for(let i=0; i <firstStr.length  ; i++) {
        str = firstStr.substr(0, (firstStr.length - i));
        for(let j=0; j< n; j++) {
            const strInArr = sortedArr[j].substr(0, firstStr.length - i);
            isCommon = str === strInArr;
            if(!isCommon) {
                break;
            }
        }
        if(isCommon) {
            break;
        }
    }
    if(isCommon) {
        return console.log(str);
    } else {
        return console.log("v");
    }
}


function lowestCommonPrefix1(arr) {
    if(arr.length === 0) {
        return -1
    }
    const strArr = arr.sort((a, b) => a.length - b.length);
    let str = strArr[0];
    for(let i=0; i < strArr.length; i++){
        while(strArr[i].indexOf(str) === -1){
            str=str.substring(0, str.length - 1);
            if(str.length === 0) {
                console.log("empty str")
            }

        }
    }
    console.log(str);


}

lowestCommonPrefix1(['flower', 'flow', 'flight'])
lowestCommonPrefix1(['dog', 'car', 'racecar'])


myway(['flower', 'flow', 'flight'])
myway(['dog', 'car', 'racecar'])


function myway(arr) {
    const sortedArr = arr.sort((a,b) => a.length - b.length);
    const firstStrAfterSort = sortedArr[0];
    let isCommon;
    let smallestPrefix;
    for(let i=0; i< firstStrAfterSort.length; i++) {
        smallestPrefix = firstStrAfterSort.substring(0, firstStrAfterSort.length - i);
        for(let j = 0; j < sortedArr.length; j++) {
            const strInArr = sortedArr[j].substr(0, firstStrAfterSort.length - i);
            isCommon = strInArr === smallestPrefix;
            if(!isCommon) {
                break;
            }
        }
        if(isCommon) {
            break
        }
    }
    if(isCommon) console.log(smallestPrefix);
    else console.log(-1);

}
