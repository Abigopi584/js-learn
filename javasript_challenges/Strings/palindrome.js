//Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases



function palindrome(str) {
    const str1 = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
    const reversedStr = str1.split(" ").reverse().join(" ");
    return str1 === reversedStr;
}



function palindrome1(str) {
    if(str.length === 0) return 'Invalid str';
    if(str.length < 2) return true;
    const formattedStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
    const mid = formattedStr.length / 2 ;
    let isPalindrome = false;
    for(let i = 0; i < mid; i++) {
        if(formattedStr.charAt(i).toLowerCase() === formattedStr.charAt(formattedStr.length - 1 - i)) {
            isPalindrome = true
        } else {
            isPalindrome = false
        }
    }
    return isPalindrome;
}
//console.log(palindrome1('A man, a plan, a canal: Panama'))
//console.log(palindrome1("race a car"));


//Given a string s, return the longest palindromic substring in s.

function longestPalindromeSubstr(str, index = 0) {
   const palindromeArr = [];

    for(let i = 0; i < str.length; i++) {
        let elem = str[i];
        for(let j = i +1; j < str.length;  j++) {
            const nextStr = elem + str[j];
            const reverse = reverse1(nextStr);
            elem  = nextStr;
            if(nextStr === reverse) {
                palindromeArr.push(elem);
            }
        }

    }
   return palindromeArr;
}

function reverse1(str) {
    let reverse = '';
    for(let i =str.length - 1; i >= 0; i-- ) {
        reverse += str[i];
    }
    return reverse;
}

//console.log(longestPalindromeSubstr('babab'));


function expandAroundCenter(s, leftIdx, rightIdx) {
    while (leftIdx >= 0 && rightIdx < s.length){
        if(s[leftIdx] !== s[rightIdx]) break;
        leftIdx--;
        rightIdx++;
    }
    return[leftIdx + 1, rightIdx]

}
function longP(str) {
    let currentLongest = [0,1]; //bcoz a sungle first letter is palindrome

    for(let i =1; i < str.length; i++) {
        const odd = expandAroundCenter(str, i-1, i+1);
        const even = expandAroundCenter(str, i-1, i);
        const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
        console.log('longest', longest)
        currentLongest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0] ? currentLongest : longest;
        console.log('currentLongest', currentLongest)
    }
    return str.slice(currentLongest[0], currentLongest[1]);
}

console.log(longP('cbbd'));
