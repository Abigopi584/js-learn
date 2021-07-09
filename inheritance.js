function Employee(name, dept) {
    this.name = name || '';
    this.dept = dept || 'Engineering';
}

function Worker(projects) {
    this.projects = projects || [];
}

Worker.prototype = new Employee();

function Engineer(machine) {
    this.machine = machine || '';
}

Engineer.prototype = new Worker();

const Abi = new Engineer('12345');
console.log(Abi.dept)

Abi.dept = "Sales";
Abi.name = 'Abirami Gopinath'
Abi.projects = ['abc', 'def'];
console.log(Abi.dept + ' ' + Abi.name + ' ' + Abi.projects + ' ' + Abi.machine);

const gopi = new Worker();
gopi.name = 'Gopinath';
console.log(gopi.name);



function Person(fname, lname) {
    this.fname = fname || 'abi';
    this.lname = lname || 'gopi';

    this.getFullName = () => {
        return this.fname + ' ' + this.lname;
    };
    Person.prototype.checkFirstName = (fName) => {
        return this.fname === fName;
    };

    Person.prototype.getFirstName = () => {
        return this.fname;
    };

    Person.prototype.setFullName = (fname, lname) => {
        this.fname = fname;
        this.lname = lname;
    };

    Person.prototype.updateFullName = (fName) =>  {
        Person.prototype.getFirstName = () => {
            return fName;
        }
    };
}



const person1 = new Person('Shakthi', 'Balu');
//console.log(person1.checkFirstName('Shakthi'));
//console.log(person1.checkFirstName('Balu'));
//console.log(person1.setFullName('Nethra', 'Abi'));
//console.log(person1.getFullName());
//console.log(Person.prototype);
const person2 = new Person('Nethra', 'Abi');
console.log(person2.setFullName('Abirami', 'Gopinath'));
console.log(person2.getFullName());
console.log(person1.getFullName());

console.log(person1.updateFullName('Renuka Devi'));
console.log(person2.getFullName());
console.log(person1.getFullName());


const Bank = function (name, location) {
    this.name = name;
    this.location = location;

    Bank.prototype.getBankDetails = () => {
        return this.name + ' ' + this.location;
    };

};


const dcu = new Bank('DCU', 'Nashua');
//console.log(dcu.getBankDetails());



// ES6 class Inheritance
class Shape {
    constructor(name, side, sideLength) {
        this.name = name;
        this.side = side;
        this.sideLength = sideLength
    }

    calcPerimeter = () => {
        return this.sideLength;
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super();
        this.name = "square";
        this.side = 4;
        this.sideLength = sideLength;
    }

    calcArea = () => {
        return this.side * this.side;
    }
}

const s1 = new Square(5);
//console.log(s1.calcArea());
//console.log(s1.calcPerimeter(10));

//es5 class inheriting a class - not working

const Shape1 = function(name, side, sideLength) {
    this.name = name;
    this.side = side;
    this.sideLength = sideLength;

    Shape1.prototype.calcPerimeter1 = () => {
        return this.sideLength;
    }
};

const Square1 = function(sideLength) {
    this.sideLength = sideLength;
    this.name = "Abi";
    this.side = 4;

    Square1.prototype.calcArea1 = () => {
        return this.side * this.side
    }
};



Square1.prototype = new Shape1;

const s2 = new Square1(5);
console.log(s2.calcArea1());
console.log(s2.calcPerimeter1());


// using object.create





