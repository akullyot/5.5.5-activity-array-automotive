//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", 5000);
console.log(v.make)


class Car extends VehicleModule.Vehicle
{
    constructor(make,model, year, color, mileage)
    {
        super(make,model,year,color, mileage);
        this.maximumPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    loadPassenger(num)
    {
        if((this.passengers + num) > this.maximumPassengers)
        {
            console.log("You dont have enough seats for that many passengers!");
        }
        else
        {
            this.passengers = this.passengers + num;
            console.log("You now have " + (this.passengers) + " of " + this.maximumPassengers + " passengers loaded.")
        }
    }
    checkService()
    {
        if(this.mileage > 3000)
        {
            this.scheduleService = true;
            console.log('It is time to schedule a service, your mileage is at ' + this.mileage);
        }
        else
        {
            this.scheduleService = false;
            console.log("You do not need to schedule a service.")
        }
    }
    start() {
        if (this.fuel > 0) 
        {
            console.log("engine started...!!!");
            return this.started = true;
        } else 
        {
            console.log("engine cannot start...");
            return this.started = false;
        }
    }
}



let A28Sedan = new Car("Mercury", 'Sedan', '2005', 'white', 8000 );


A28Sedan.start();
A28Sedan.loadPassenger(3);
A28Sedan.stop();
A28Sedan.checkService();


console.log(A28Sedan);

A28Sedan.accelerate();
A28Sedan.start();
A28Sedan.accelerate();
A28Sedan.loadPassenger(3);

console.log(A28Sedan);


let grandCherokee = new Car("Jeep", 'Grand Cherokee', '1996', 'red', 2000 );


grandCherokee.start();
grandCherokee.loadPassenger(3);
grandCherokee.stop();
grandCherokee.checkService();


console.log(grandCherokee);

grandCherokee.accelerate();
grandCherokee.start();
grandCherokee.accelerate();
grandCherokee.loadPassenger(1);

console.log(grandCherokee);



