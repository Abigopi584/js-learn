let c = 20
function outer() {
    const a = 10;
    let b = 100;

    function inner() {
        console.log(`a=${a} b=${b} c=${c}`);
        b++;
        c++;
    }

    return inner;
}


const fnFirst = outer();
const fnSecond = outer();
console.dir(fnFirst);


fnFirst();
fnFirst();
fnFirst();
fnSecond();


function numberGenerator() {
    let num = 1;
    num++;
    function checkNum() {
        console.log(num);

    }

    return checkNum;
}

const numG = numberGenerator();

numG();
numG();
numG();


var x= 10;
function foo(a) {
    var b = 20;
    function bar(c) {
        var d = 30;
        return boop(x + a + b + c + d); //60
    }

    function boop(e) {
        return e * -1;
    }

    return bar;
}

var moar = foo(5);
console.log(moar(15));


function buildName(name) {
    var greeting = "Hello, " + name + "!";
    var sayName = function() {
        var welcome = greeting + " Welcome!";
        console.log(greeting);
    };
    return sayName;
}

let sayname = buildName('Abi')

sayname()





function buildContor(i) {
    var contor = i;
    var displayContor = function() {
        console.log(contor++);
        contor++;
    }
    return displayContor;
}

var myContor = buildContor(1);

myContor();
myContor();
myContor();


function initializeData() {
    var myVar  = 1;
    return {
        getVar: function() {
            return myVar;
        },
        setVar: function(v) {
          myVar = v;
        }
    }
}

const obj = initializeData();
console.log(obj.getVar())
obj.setVar(2)
console.log(obj.getVar())



var singleTon = (function() {
    var ctr = 0;
    return {
        get: function() {
            return ctr;
        },
        increment: function() {
           ctr++;
        }
    }
})();
console.log('------------------------')
console.log(singleTon.get());
console.log(singleTon.get());

singleTon.increment();
console.log(singleTon.get());


const abc = [[2,1]];
const def = [[3,4]];

const blah = [...abc, ...def];

console.log(blah.flat())


const obj1 = { a: 1, b: 2, c:3};
const obj2 = { a: 2, e: 3, f: 4};


console.log({...obj1, ...obj2})

const abc1 = [{key: 1, value: 10}, { key: 2, value: 30}];
const def1 = [{key: 1, value: 20}, { key: 2, value: 60}];
console.log([...abc1, ...def1])



function say667() {
    var num = 7878;
    return function() {console.log(num) }

    num++;
}
const say1 =  say667();
say1();
say1();


function setupSomeGlobals() {
    // Local variable that ends up within closure
    var num = 666;
    // Store some references to functions as global variables
    var gAlertNumber = function() { alert(num); }
    gIncreaseNumber = function() { num++; }
    gSetNumber = function(x) { num = x; }
    return gAlertNumber;
}

function buildContor(i) {
    var contor = i;
    var displayContor = function() {
        console.log(contor++);
        contor++;
    }
    return displayContor;
}

const s1 = setupSomeGlobals();
s1


function buildList(list) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
        var item = 'item' + list[i];
        result.push( function() {console.log(item + ' ' + list[i])} );
    }
    return result;
}

function testList() {
    var fnlist = buildList([1,2,3]);
    // using j only to help prevent confusion - could use i
    for (var j = 0; j < fnlist.length; j++) {
        fnlist[j]();
    }

}


testList()



function loops() {
    var func = [];
    for(var i=0; i< 3; i++) {
        let index = i;
        func[i] = function() {
            console.log("My value " + index);
        }
    }

    for(var j=0; j< 3; j++) {
        func[j]()
    }
}
loops()

