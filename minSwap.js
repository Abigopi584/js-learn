function minSwap(arr) {
    let swap = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== i + 1) {
            let t = i; /// assigning i to t to use it a index
            while(arr[t] != i + 1) {
                t++;
            }
            let temp = arr[t];
            arr[t] = arr[i];
            arr[i] = temp;
            console.log('arr', arr)
            swap++
        }
    }
    return swap;
}

console.log(minSwap([7, 1, 3, 2, 4,5,6]))
