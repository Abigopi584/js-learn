//Given a String S, reverse the string without reversing its individual words. Words are separated by dots.

reverseStrings('i.like.this.program.very.much');
function reverseStrings(str) {
    return console.log(str.split('.').reverse().join('.'));
}
