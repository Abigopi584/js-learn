//Given two strings a and b consisting of lowercase characters. The task is to check whether two given strings are an anagram of each other or not. An anagram of a string is another string that contains the same characters,
//only the order of characters can be different. For example, “act” and “tac” are an anagram of each other.
const str1 = "act";
const str2 = "tac";
(function(str1, str2) {
    const reverse = str2.split("").sort().join("");
    return console.log(str1 === reverse);
})(str1, str2);


// check if all values in an array are anagrams
//['act', 'tac', 'cat']


function areAnagrams(arr) {
    let isAnagram = null;
    if(!Array.isArray(arr)) return 'Invalid array';
    if(arr.length < 2) return "Array should have 2 elements";

    const sortedArr = arr.map(elem => elem.split("").sort().join(""));
    const firstElem = sortedArr[0];
    for(let i = 0; i< sortedArr.length; i++) {
        if(firstElem !== sortedArr[i]) {
            isAnagram =  false;
            break;
        } else {
            isAnagram =  true;
        }
    }
    return isAnagram
}


console.log(areAnagrams(['act', 'tdac', 'cat']));

//return anagram values in a array
//['acjhjt', 'tac', 'cat'] should return 'tac' and 'cat'

//assumption is elements are same length
function getAnagrams(arr) {
    const anagramArr = [];
    const sortedArr = arr.map(elem => elem.split("").sort().join(""));
    let elem = sortedArr[0];
    for(let i=1; i< arr.length; i++) {
    }

}

