//Given a string in roman no format (s)  your task is to convert it to an integer . Various symbols and their values are given below.
// I 1
// V 5
// X 10
// L 50
// C 100
// D 500
// M 1000
convert('V');
convert('III');
convert('IIIV');
function convert(roman) {
    let integerVal = 0;
    let invalidRomans = ['IIV', 'IIIV', 'IVI', 'IVII', 'IIVI'];
    let isValid = true;
    if(roman === 'IV') {
        integerVal = 4;
        isValid = false;
    }
    if(roman === 'IX'){
        integerVal = 9;
        isValid = false;
    }
    if(invalidRomans.includes(roman)) {
        integerVal = 'Invalid numberals';
        isValid = false;
    }

    if(isValid) {
        let romanArray = roman.split('');
        romanArray.map(num => {
            let val = 0;
            switch(num) {
                case 'I':
                    val = 1;
                    break;
                case 'V':
                    val = 5;
                    break;
                case 'X':
                    val = 10;
                    break;
                case 'L':
                    val = 50;
                    break;
                case 'C':
                    val = 100;
                    break;
                case 'D':
                    val = 500;
                    break;
                case 'M':
                    val = 1000;
                    break;
                default:
                    break;
            }
            integerVal += val;
        });
    }

    return console.log(integerVal);
}
