const arr = [{key: 'a', value: 50, value1: 20}, {key: 'a', value: 60, value1: 60 }, {key: 'b', value: 80, value1: 80}, {key: 'b', value: 80, value1: 80}];

function grouping(arr) {
    const obj = {};

    arr.map(elem => {
        if(!elem) return;
        if(!obj[elem.key]) {
            obj[elem.key] = {value: [elem.value], value1: [elem.value1]}
        } else {
            obj[elem.key].value.push(elem.value);
            obj[elem.key].value1.push(elem.value1);
        }
    });
    return obj;
}

console.log(grouping(arr));
