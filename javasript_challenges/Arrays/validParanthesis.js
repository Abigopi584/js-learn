function validParenthesis(str) {
    if(str.length < 1) return 'empty String';
    const removeCharsStr = str.replace(/[A-Za-z]/g,"");
    if(removeCharsStr.length < 1) return "no parenthesis found";

    let count = 0;



    const strArr = removeCharsStr.split("");
    const openP = ['{', '(', '['];
    const closeP= ['}', ')', ']'];

    strArr.map(str => {
        if(openP.indexOf(str) !== -1) count++;
        if(closeP.indexOf(str) !== -1) count --;
    });

    return count === 0;

}



console.log(validParenthesis('(({andghmjkhjhjhj))'))
