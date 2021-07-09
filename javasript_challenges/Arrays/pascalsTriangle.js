function pascalsTriangle(rows) {
    if(rows < 1) return [];
    if(rows < 2) return [[1]];
    let result = [];
    for(let i = 1; i< rows; i++) {
        let arr = [];
        for(let j = 0; j < i; j++ ) {
            if(j === 0 || j === i - 1) {
                arr.push(1);
            } else {
                arr.push(result[i-2][j-1] + result[i-2][j]);
            }
        }
        console.log('arr', arr);
        result.push(arr);
    }
    return result.join('\n');
}

console.log('pascalsTriangle', pascalsTriangle(8))
