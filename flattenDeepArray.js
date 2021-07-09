const flattenArray = (arr) =>{
    let newArray = [];
    arr.map(elem => {
        if(!Array.isArray(elem)) {
            newArray.push(elem);
        } else {
            const flatArray = flattenArray(elem);
            newArray = newArray.concat(flatArray);
        }

        //console.log(newArray)
    });
    return newArray;
};


console.log(flattenArray([1,[2,3,4],5,6,[7,8]]));
console.log(flattenArray([[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]]));

///without concat
const flatten = (arr, result = []) => {
    arr.map(elem => {
        if(!Array.isArray(elem)) {
            result.push(elem)
        } else {
            flatten(elem, result);
        }
    });
    return result;
};

console.log('........................');
console.log(flatten([1,[2,3,4],5,6,[7,8]]));
console.log(flatten([[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]]));


function findHighOccurence(str, k){
    const arr1 = str.split(' ').sort();
    const wordsArr = [];
    for( let i=0; i < arr1.length; i++) {
        console.log('arr1[i]', arr1[i])
        const lastIdx = arr1.lastIndexOf(arr1[i]);
        if( i !==  lastIdx) {
            wordsArr.push( { word: arr1[i], count: (lastIdx - i) + 1} )
            i = lastIdx;
        } else {
            wordsArr.push( { word: arr1[i], count: 1} )
        }
    }

    const highOccurence = wordsArr.sort((a,b) => b.count - a.count);
    return highOccurence.splice(0, k);
}


console.log(findHighOccurence('Abi is is a very very very good girl', 2));

// arr = [{key: 'a', ma: 'red'}, {key: 'a', value: 'yellow'}, {key: 'b', value: 'red'}, {key: 'b', value: 'blue'}]
//Grouping of arrays
function grouping(arr) {
    const groupObj = {};

    arr.forEach(elem => {
        if(!elem.key) return null;
        if(!groupObj[elem.key]) {
            groupObj[elem.key] = [elem.value];
        } else {
            groupObj[elem.key].push(elem.value)
        }
    });

    return groupObj;
}

console.log(grouping([{key: 'a', value: 50, value1: 20}, {key: 'a', value: 60, value1: 60 }, {key: 'b', value: 80, value1: 80}, {key: 'b', value: 80, value1: 80}]))


function grouping2(arr) {
    const groupArr = [];
    arr.forEach(elem => {
        const idx = groupArr.findIndex(obj => obj.key === elem.key); //Note this point your honor
        if(idx === -1) {
            groupArr.push({ key: elem.key, value: [elem.value]});
        } else {
            groupArr[idx].value.push(elem.value);
        }
    });
    return groupArr;
}

console.log(grouping2([{key: 'a', value: 'red'}, {key: 'a', value: 'yellow'}, {key: 'b', value: 'red'}, {key: 'b', value: 'blue'}]));


//Longest common prefix
//['flower', 'flow', 'flight'] fl

function longestPrefix(arr) {
    const sArr =arr.sort((a,b) => a.length - b.length);
    let fStr = sArr[0];
    for(let i = 1; i < sArr.length; i++) {
        while(sArr[i].indexOf(fStr) === -1) {
            fStr = fStr.substr(0, fStr.length - 1); //reassign the substr back
            if(fStr.length === 0) {
                console.log("empty str")
            }
        }
    }

    return fStr;

}

console.log(longestPrefix(['flower', 'flow', 'flight']))



var arr = [1, 2, 3, 4, 5];
delete arr[0];
console.log(arr)


function blah() {
    var dividend = 18;
    var numbers = [2, 3, 4, 5, 6, 7, 8, 9];
    var idx;

    for (idx = 0; idx < numbers.length; idx++) {
        var factor;
        var divisor = numbers[idx];
        if (dividend % divisor === 0) {
            factor = true;
        } else {
            factor = false;
        }

        if (factor) {
            console.log(divisor + ' is a factor of ' + dividend + '!');
        }
    }
}

blah();


function greet(person) {
    if(person.name === 'amy') return "Hey Shak";
    else return "Hey Neth";
}

console.log(greet({name: 'amy'}));


function isBig (thing) {
    if (thing === 0 || thing === 1 || thing === 2) {
        return false
    }
    return true
}
console.log(isBig(1))    // false
console.log(isBig([2]))  // false
console.log(isBig([3]))

const heroes = [
    { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
    { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
    { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
    { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
    { name: 'Batman',         family: 'DC Comics', isEvil: false },
    { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
    { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
    { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
    { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
];
const copyHeroes = Array.from(heroes);

const newHeroes = heroes.map(h => {
   return {
       ...h,
       name: h.name.toUpperCase()
   }
});

console.log(newHeroes);
console.log(heroes);


const arr1 = [1,2,3];
const arr2 = [...arr1];
arr2.push(4);
console.log(arr1)



//Validate parenthesis strings

//'(()){[}'

function validateParenthesis(str) {
    const newStr = str.replace(/[A-Za-z]/g,"");
    console.log(newStr)
    const pArr = newStr.split('');
    let count = 0;
    const fP = ['{', '(', '['];
    const cP = ['}', ')', ']'];
    console.log(pArr)
    pArr.forEach(p => {
        if(fP.includes(p)) {
            count++;
        }

        if(cP.includes(p)) {
            count--
        }
    })

    return count === 0;
}

console.log(validateParenthesis('(({andghm}jkhjhjhj))'))




// const myData = [
//     {team: "GSW", pts: 120, ast: 18, reb: 11},
//     {team: "GSW", pts: 125, ast: 28, reb: 18},
//     {team: "GSW", pts: 110, ast: 35, reb: 47},
//     {team: "HOU", pts: 100, ast: 17, reb: 43},
//     {team: "HOU", pts: 102, ast: 14, reb: 32},
//     {team: "SAS", pts: 127, ast: 21, reb: 25},
//     {team: "SAS", pts: 135, ast: 25, reb: 37},
//     {team: "SAS", pts: 142, ast: 18, reb: 27}
//  ]

//o/p
//const groupedData = [
//     {team: "GSW", pts: 118.3, ast: 27.0, reb: 25.3},
//     {team: "HOU", pts: 101, ast: 15.5, reb: 37.5},
//     {team: "SAS", pts: 134.7, ast: 21.3, reb: 29.7}
// ]


function grouping(myData) {
    const obj = {};
    myData.forEach((data , idx) => {
        if(!data.team) return null;
        if(!obj[data.team]) {
            obj[data.team] = { pts: data.pts , ast: data.ast, reb:data.reb, count: 1}
        } else {
            obj[data.team].pts = obj[data.team].pts + data.pts;
            obj[data.team].reb = obj[data.team].reb + data.reb;
            obj[data.team].ast = obj[data.team].ast + data.ast;
            obj[data.team].count = obj[data.team].count + 1;
        }
    });

    Object.keys(obj).map(key => {
        const item = obj[key];
        obj[key].pts = Math.round((obj[key].pts / obj[key].count) * 10) / 10;
        obj[key].reb =  Math.round((obj[key].reb / obj[key].count) * 10) / 10;
        obj[key].ast =  Math.round((obj[key].ast / obj[key].count) * 10) / 10;
        delete obj[key].count;
    });
    return obj;
}


console.log(grouping([ {team: "GSW", pts: 120, ast: 18, reb: 11},
    {team: "GSW", pts: 125, ast: 28, reb: 18},
    {team: "GSW", pts: 110, ast: 35, reb: 47},
    {team: "HOU", pts: 100, ast: 17, reb: 43},
    {team: "HOU", pts: 102, ast: 14, reb: 32},
    {team: "SAS", pts: 127, ast: 21, reb: 25},
    {team: "SAS", pts: 135, ast: 25, reb: 37},
    {team: "SAS", pts: 142, ast: 18, reb: 27}]))



