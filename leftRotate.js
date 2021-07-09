function rotLeft(a, d) {
    console.log('d', )
    console.log('d', d)
    if(d < Math.pow(10,5)) {
        for(let i=0; i< d; i++) {
            console.log('i', i)
            if(a[i] < Math.pow(10, 6)) {
                const rotateLeftNum = a.slice(0,1);
                a.shift();
                a.push(rotateLeftNum[0]);
                console.log('a', a)
            }
        }
    }

    return a;
}


console.log(rotLeft([1, 2, 3, 4, 5], 4));
