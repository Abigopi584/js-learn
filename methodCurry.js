function abc(x) {
    return function(y) {
        return function (z) {
            return x + y + z
        }
    }
}

console.log(abc(2)(3)(4));
const def = (x) => y => z => x + y + z;


console.log(def(2)(3)(4))
