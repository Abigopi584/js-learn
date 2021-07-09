var ParkingSystem = function(big, medium, small) {

    this.big = big;
    this.medium = medium;
    this.small = small;


};
ParkingSystem.prototype.addCar = function(carType) {
    let canAdd = false;
    if(carType === 1 && this.big !== 0) {
        canAdd = true;
        this.big = this.big - 1;
    } else if(carType === 2 && this.medium !== 0) {
        canAdd = true;
        this.medium = this.medium - 1;
    } else if(carType === 3 && this.small !== 0) {
        canAdd = true;
        this.small = this.small - 1;
    }

    return canAdd;
};


const parkingSystem = new ParkingSystem(1, 2, 0);

console.log(parkingSystem)
console.log(parkingSystem.addCar(1));
console.log(parkingSystem.addCar(2));
console.log(parkingSystem.addCar(3));
console.log(parkingSystem.addCar(1));
console.log(parkingSystem.addCar(2));


