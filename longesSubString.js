//Given a string s, find the length of the longest substring without repeating characters.


function longestSubStr() {
    const str = "pwwkew";
    const strg = str.split('');
    console.log('strg', strg);
    let endIdx = 0;
    let longestStr = '';
    for( let i = 0; i < strg.length - 1; i++) {
        const iValue = strg[i];
        for( let j =i + 1; j < strg.length; j++) {
            const jValue = strg[j];
            if(iValue === jValue) {
                console.log('in here');
                endIdx = j;
                console.log('endIdx', endIdx);
                longestStr = strg.splice(i, j).join('');
                console.log('longestStr', longestStr);
                break;
            }
        }
        if(endIdx > 0) {
            break;
        }
    }
    return endIdx;

}

console.log(longestSubStr());
