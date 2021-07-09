function palindrome(s) {
    const sArr = s.split('');
    let lastLongIdx = 0;
    let firstIdx = 0;
    if(s.length === 1) {
        return s.substr(0,1);
    }

    if(s.length === 2) {
        if(s.charAt(0) === s.charAt(1)) {
            return s
        } else {
            return s.substr(0,1);
        }
    }

    for(let i=0; i< sArr.length; i++) {
        console.log('sArr', sArr)
        const lastIndex = sArr.lastIndexOf(sArr[i]);
        const str = sArr.splice(i, lastLongIdx);
        console.log('orig',  str.join('') , 'reverse',str.reverse().join(''), str.join('') === str.reverse().join(''))
        if (lastLongIdx < lastIndex && str.join('') === str.reverse().join('') ) {
            firstIdx = i;
            lastLongIdx = (lastIndex - firstIdx) + 1;
            console.log('firstIndex',firstIdx, 'lastIndex', lastLongIdx )
        }
    }

    return s.substr(firstIdx, lastLongIdx)
}


/*console.log(palindrome("babad"));
console.log(palindrome("ccc"));
console.log(palindrome("bb"));
console.log(palindrome("ac"));*/
console.log(palindrome("aacabdkaca"));
