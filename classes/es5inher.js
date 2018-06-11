function Car( make ) { //approximate a class/constructor
   this.make = make;
   this.currentSpeed = 25;
    
   this.printCurrentSpeed = function(){ //expose a function
          console.log(this.make + ' is going ' + this.currentSpeed + ' mph.');
    }
}

function RaceCar(make,topspeed){
    Car.call(this,make);
    this.topspeed=topspeed;
    this.goFast=function(){
        this.currentSpeed=this.topspeed;
    };
}

RaceCar.prototype = Object.create(Car.prototype);
RaceCar.prototype.constructor=RaceCar;
var r1 = new RaceCar('mustang',200);

r1.goFast();
//console.log(r1);

r1.printCurrentSpeed();