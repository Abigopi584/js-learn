function alternatingCharacters(s) {
    let deletes = 0;
    if(s.length < Math.pow(10, 5)) {
        const sArr = s.split('');

        for(let i=0; i<sArr.length - 1; i++) {
            while(sArr[i] === sArr[i + 1]) {
                sArr.splice(i+1, 1);
                deletes += 1;
            }
        }
    }

    return deletes;
}

console.log(alternatingCharacters('AAAA'))
console.log(alternatingCharacters('ABABABAB'))
console.log(alternatingCharacters('AAABBB'))
