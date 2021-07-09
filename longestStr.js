//Longest Substring Without Repeating Characters
//Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
function longestRepeat(str) {
    let indxFound = 0;
    for(let i=0; i<str.length - 1; i++) {
        const strToBeChecked= str.substr(i + 1, str.length);
        const nextIdx = strToBeChecked.indexOf(str[i]);
         //console.log('nextIdx', nextIdx, str[i])
        if(nextIdx !== -1) {
            indxFound =  nextIdx + 1;
            break;
        }
    }
    return indxFound;
}

//console.log(longestRepeat("abcabcbb"))
//console.log(longestRepeat("bbbbb"))
//console.log(longestRepeat("pwwkew"))


function lr2(str) {
    let sIdx = 0;
    let trackingIndex = 0;
    let max = 0;

    const charSet = new Set();

    while(sIdx < str.length) {
        if(!charSet.has(str[sIdx])) {
            charSet.add(str[sIdx]);
            sIdx += 1;
            max = Math.max(charSet.size, max);
        } else {
            charSet.delete(str[trackingIndex]);
            trackingIndex++;
        }
    }

    return max;
}
console.log(longestRepeat("bbbbb"));


//
// Longest substring with at most K distinct character
