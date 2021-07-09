//LOngest substr for k distinct chars

function longestSubstr(str, k) {
    if(str.length < 1) return "Valid String plz";
    const strArr = str.split("");
    if(str.length === k) {
        const uniqueValues = [... new Set(strArr)];
        if(uniqueValues.length === k) return uniqueValues.join("");
        else return -1;
    }


    const longestArr = [];

    for(let i = 0; i < strArr.length ; i++) {
        let prev = strArr.slice(i , i + k);
        const uniqueValues = [... new Set(prev)];
        if(uniqueValues) {
            for(let j = i + k; j< str.length; j+=2)
                let subStrK = prev + strArr.slice(j, j + k);
                const isUniqueKVar = [... new Set(subStrK)].length === k;

        }
    }

    return longestArr;
}


const long = longestSubstr('abbcccde', 2);

console.log(long);
