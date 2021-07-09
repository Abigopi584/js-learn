//flatten an array
// Array native method flatten an array  - arr.flat()


function flatten(arr) {
    let flatArray = [];
    if(arr.length < 1) {
        return "Array empty"
    }
    arr.map(elem => {
        if(Array.isArray(elem)) {
            const arr = flatten(elem);
            flatArray = [...flatArray, ...arr];

        } else {
            flatArray.push(elem);
        }
    });

    return flatArray;
}


console.log(flatten([1,[2,3,4],5,6,[7,8]]));
console.log(flatten([[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]]));
