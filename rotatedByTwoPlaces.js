//Given two strings a and b. The task is to find if the string 'b' can be obtained by rotating another string 'a' by exactly 2 places.


rotateByTwoPlaces('amazon', 'azonam')
rotateByTwoPlaces('geeksforgeeks', 'geeksgeeksfor')

function rotateByTwoPlaces(str, matchStr) {
    const clockWiseSwap= str.substr(2, str.length ) + str.substr(0, 2);
    const antiClockWiseSwap = str.substr(-2) + str.substr(0,  str.length -2);
    console.log('clockWiseSwap-', clockWiseSwap, 'anti-', antiClockWiseSwap);
    if(clockWiseSwap === matchStr || antiClockWiseSwap === matchStr) {
        return console.log('yes');
    }
    return console.log('No');
}
