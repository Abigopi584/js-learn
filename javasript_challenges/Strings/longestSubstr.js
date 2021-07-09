//longestSubstr qwith k most distinct char


function longestSubStr(str) {
    if(str.length === 0) return "Empty Str";
    if(str.length < 2) return str;

    for(let i =0; i < str.length; i++) {
        const elem = str.charAt(i);
        const lastIdx = str.lastIndexOf(elem);

        if(i !== lastIdx) {
            continue;
        } else {
            let searchStr = elem;
            for(let j = i + 1; j < str.length; i++) {
                searchStr += str.charAt(j);
            }
        }
    }
}
