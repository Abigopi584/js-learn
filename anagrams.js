function makingAnagrams(a,b) {
    let strA = a.split('');
    let strB = b.split('');
    let str_A =[...strA]
    for(let i =0; i< strA.length; i++) {
        const bIdx = strB.indexOf(strA[i]);
        if(bIdx !== -1) {
            str_A.splice(str_A.indexOf(strA[i]), 1);
            strB.splice(strB.indexOf(strA[i]), 1)
            console.log(str_A, strB)
        }
    }

    return str_A.length + strB.length;

}
console.log(makingAnagrams('showman', 'woman'));
