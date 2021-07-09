//Given a array of N strings, find the longest common prefix among all strings present in the array.
//4
// geeksforgeeks geeks geek geezer
// 3
// apple ape april
//
// Output:
// gee
// ap



function lowestCommonPrefix(arr) {
    if(!Array.isArray(arr)) return 'Invalid input';
    if(arr.length < 1) return "Empty input array";
    if(arr.length === 1) return arr[0];

    const sArr = arr.sort((a,b) =>  a.length - b.length);
    let lowestStr = arr[0];

    for(let i = 1; i < arr.length; i++) {
        while (arr[i].indexOf(lowestStr) == -1) {
            lowestStr = lowestStr.substring(0, lowestStr.length - i);
            if(lowestStr.length === 0){
                return "No valid lowest common Prefix found"
            }
        }
    }

    return lowestStr;
}




const lC = lowestCommonPrefix(['flow','flower', 'flowht']);

console.log(lC)



