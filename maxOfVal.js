function maxOfVal(arr) {
    let above500 = 0;
    let count = 0;
    if(arr.length === 0) {
        return 0
    }
    if(arr.length === 1 ) {
        return arr[0];
    }

    arr.map(r => {
        if(r  > 500) {
            above500 += r;
            count += 1;
        }
    });
    return above500 / count;
}

console.log(maxOfVal([500, 300, 501 ]));
