function highOccurance(str) {
    if(str.length < 1) {
        return "Empty String";
    }
    const strArr = str.toLowerCase().split(" ");
    if(strArr.length < 2) {
        return str;
    }
    const sortedArr = strArr.sort();
    let highOccurenceStr = "";
    let highOccCount = 0;
    for(let i=0; i< sortedArr.length; i++) {
        const elem = sortedArr[i];
        const lastIndexOf = sortedArr.lastIndexOf(elem);
        if( i !== lastIndexOf) {
            if( highOccCount < (lastIndexOf - i)) {
                highOccCount = lastIndexOf - i;
                highOccurenceStr = elem;
            }
            i = lastIndexOf;
        }
    }
    if(highOccCount !== 0) {
       return highOccurenceStr
    }

    return "All string have equal occurrence";

}


console.log(highOccurance('Abi is good girl'));
