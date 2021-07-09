//fibonanci 1,1,2,3

console.log(fibonacci(10));
function fibonacci1(n) {
    const start1 = 1;
    const start2 = 2;
    const arr = [start1, start2];
    if (n <= 1) {
        return console.log("N should be greater atleast 2");
    }

    if(n == 2) {
        return console.log(arr.toString())
    }
    for(let i=1; i < n - 1;i++) {
        arr.push(arr[i] + arr[i - 1]);
    }

    console.log('fibonacci series', arr.join(','));
}

function fibonacci(num) {
    if (num <= 1) return 1;

    return fibonacci(num - 1) + fibonacci(num -2);
}
