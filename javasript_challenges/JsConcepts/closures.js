let c = 20;

function outer() {
    const a = 10;
    let b = 20;

    function inner() {
        console.log('a', a, 'b', b,'c', c);
        b++;
        c++; //Note this point ur honor, this will happen bco
    }

    return inner;
}

const fnFirst = outer();
const fnSecond = outer();
/*//fnFirst();
//fnFirst();
fnFirst();
fnSecond();
fnSecond();*/


function numGenerator() {
    let num = 1;

    function checkNum() {
        console.log(num);
    }

    return checkNum;
}

const num = numGenerator();
const num1 = numGenerator();

num();
num();
num();
num1();


let x=10;
function foo(a) {
    console.log('x',x)
    var b =20;
    function bar(c) {
        let d = 30;
        console.log(x + a + c+ b + d);
        x++;
        b++;
        d++;
    }
    return bar;
}

const set1 = foo(3);
set1(3);
set1(4);

const set2 = foo(3);
set2(3)


var funcs = [];
for(var i =0; i < 3; i++) {
    funcs[i] = function() {
        console.log("MY valkue: "+ i);
        
    }
}
