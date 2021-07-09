// An arrow function expression has a shorter syntax than a function expression and does not have its own
// this, arguments, super, or new.target. These function expressions are best suited for non-method functions,
// and they cannot be used as constructors.
const myObj = {
    foo: "bar",
    boo: "blah",
    getFoo: function() {
       return this.foo;
    },
    getBoo: function() {
        return this.boo;
    },
    method: function(value) {
        if(value){
            console.log(this.getFoo());
        } else {
            console.log(this.getBoo());
        }
    }
};

setTimeout(() => {
    myObj.method(false);
},2000);



const car = {
    no: 'ABDCD',
    brand: "Toyota",
    display: function(name) {
        console.log(`This ${this.brand} with registration ${this.no} is owned by ${name}`);
    }
};

car.display('Nethra');

const car1 = car.display.bind(car, 'Abi');
car1()

const car2 = {
    no: '656AGS',
    brand: 'Lexus'
};

function display(name) {
    console.log(`${this.brand} with registration ${this.no} is owned by ${name}`);
}
display.call(car2, 'Abi');

display.apply(car2, ['Shakthi']);



let func = function() {
    console.log(this);
} //.bind(1);

func.call({ num: 12121});

//unc.call(1)
const obj  ={
    callFunc: func
};

//obj.callFunc ///not correct, func() is



function checkFun(a, b, c) {
    console.log(this);
    console.log(a);
    console.log(b);
    console.log(c);
}

//checkFun.apply(1,[1,2,3]);


function sum() {
    let total = 0;
    for(let i = 0;  i < arguments.length; i++) {
        total += arguments[i]
    }
    return total
}

let sum1 = sum.apply(null, [1,2,3,4])

console.log(sum1);


let updateZipCode = function(nz, country) {
    console.log(nz + ' ' + country);
}

let zip = { zc: 12345 };

//updateZipCode.call(zip);
updateZipCode.apply(zip, [1111, 'BZ']);


let zipCode = {
    checkZipCode: function() {
        console.log(this);
        function updateZipCode() {
            console.log(this);
        }
        updateZipCode.call(this)
    }
};

zipCode.checkZipCode.call('yup')


let person = {
    name: 'Jack',
    prop: {
        name: 'Daniel',

        getName: function() {
            return this.name;
        }
    }
};

var name = person.prop.getName.bind(person);

console.log(name());
let name1 = person.prop.getName.call(person);

console.log(name1);


function multiplication(a,b) {
    console.log( a * b);
}


let multiply2 = multiplication.bind(this, 2);


multiply2(4)


let alwaysBeSix = multiplication.bind(this, 2,3);

alwaysBeSix(10);

var magicMul = multiplication.bind(this)
magicMul(5, 6)

magicMul.call(null, 4,5)
