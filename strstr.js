//Your task is to implement the function strstr. The function takes two strings as arguments (s,x) and  locates the occurrence
// of the string x in the string s. The function returns and integer denoting the first occurrence of the string x in s (0 based indexing).

strStr('GeeksForGeeks', 'for')
function strStr(str, str1) {
    const index =  str.toLowerCase().indexOf(str1.toLowerCase());
    return console.log(index);
}
