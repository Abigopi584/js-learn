function addNumbers(a: string, b: number) {
return a + b;
}

const sum: string = addNumbers('a',2);


console.log(sum);;


interface KeyValue {
    fname: string,
    lName: string,
}

const keyObj: KeyValue = { fname: 'abi', lName: 'balu'}
const keyObj1: KeyValue = { fname: 10, lName: 'balu'}
