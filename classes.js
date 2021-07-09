//classes examples

class Polygon {
    constructor(height, width) {
        this.name = 'Polygon';
        this.height = height;
        this.width = width;
    }
    static printPolygon(value) {
        console.log(`type of poly is ${value}`);
    }

    sayName() {
        console.log("Name is " + this.name + " height is " + this.height + " width is "+ this.width);
    }


    sayHistory() {
        console.log('"Polygon" is derived from the Greek polus (many) and gonia (angle).')
    }
}


let p = new Polygon(100, 2000);

p.sayName();

Polygon.printPolygon('reactangle');


class Square extends Polygon {
    constructor(length) {
        super(length, length);
        this.name = 'square';
    }

    get area() {
        console.log(this.width * this.height);
    }

    set area(length) {
        this.width = length;
        this.height = length;
    }

    sayName () {
        super.sayHistory()
    }
}

let s = new Square(10);
s.area
s.area = 100;
s.area

s.printPolygon('blah')

s.sayName()
