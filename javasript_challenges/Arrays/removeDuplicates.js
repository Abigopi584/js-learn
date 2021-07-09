function removeDup(arr) {
    return  [...new Set(arr)];
}


console.log(removeDup([3,2,1,2,1]))

function dup1(arr) {
    return arr.filter((elem, index) => arr.indexOf(elem) !== index )
}

console.log(dup1([3,2,1,2,1]))

//remove all duplicate chars from string
///you can use new Set() of well

function removeDupInstr(str) {
    for(let i =0; i< str.length; i++) {
        const char1 = str.charAt(i);
        const lastIndex = str.lastIndexOf(char1);
        console.log('i !== lastIndex', lastIndex, i)
        if(i !== lastIndex) {
           str = str.substring(0, lastIndex -1) + str.substring(lastIndex + 1, str.length);
        }
    }

    return str;
}


console.log(removeDupInstr('abbacd'))
