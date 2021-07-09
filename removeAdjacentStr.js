//Given a string s, recursively remove adjacent duplicate characters from the string s. The output string should not have any adjacent duplicates.

removeDuplicates('geeksforgeek');
removeDuplicates('acaaabbbacdddd');
function removeDuplicates(str) {
    const strArr = str.split('');

    for(let i=0; i< str.length - 1; i++) {
        let count =1;
        for(let j=i + 1; j<str.length - 1; j++) {
            //console.log('strArr[i]', strArr[i], 'strArr[j]', strArr[j]);
            if(strArr[i] === strArr[j]) {
                count+=1;
            } else {
                break;
            }
        }
        if(count > 1) {
            console.log('char', strArr[i], 'count', count);
            strArr.splice(i, count);
            //strArr[i] = "";
           // console.log('strArr', strArr);
        }

    }

    return console.log(strArr.join(''));
}



/*
function removeDuplicates1(str) {

    function checkDuplicate(arr, ch, i= 0) {
        let idx = i;
        if(arr[i] === arr[i + 1]) {
            arr.splice(i, 2);
        } else {
            idx = i + 2;
        }
        checkDuplicate(arr, )
    }
}
*/
