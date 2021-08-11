'use strict';

// Coding Challenge #1
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h
// GOOD LUCK 😀

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
  console.log(`''${this.make}'' going at ${this.speed}km/h`);
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`''${this.make}'' going at ${this.speed}km/h`);
};

Car.prototype.deccelerate = function () {
  this.speed -= 5;
  console.log(`''${this.make}'' going at ${this.speed}km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
mercedes.deccelerate();
mercedes.deccelerate();

Car.hello = function(a) {
  console.log(`hello there, ${a.make}, 👍`)
}

Car.hello(bmw);

// Setter -Getter

const obj = {
  y: 'abc',

  set x(xx) {
    this._x = xx;
  },
  get x() {
    return this._x;
  },
};

obj.x = 5;
console.log(obj.x);


// Coding Challenge #2
// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
// by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/h
// GOOD LUCK 😀

class CarCl{
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
  }
  deccelerate() {
    this.speed -= 5;
  }
  get speedUS() {
    return this.speed/1.6;
  }
  set speedUS(sp) {
    this.speed = sp * 1.6;
  }

  static hello(zz) {
    console.log(`hello there, ${zz.make}, 💋`)
  }
}

const ford = new CarCl('ford', 120)

console.log(ford)

ford.speedUS = 100;
console.log(ford.speedUS)

ford.accelerate()
ford.deccelerate()
console.log(ford.speed)
console.log(ford.speedUS)
CarCl.hello(ford)

// Coding Challenge #3
// Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'! Hint: Review the definiton of polymorphism 😉
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
// GOOD LUCK 😀

const EV = function(make, speed, charge) {
  Car.call(this, make, speed)
  this.charge = charge
}

EV.prototype = Object.create(Car.prototype)
EV.prototype.chargeBattery = function(chageTo) {
  this.change = chageTo
}

EV.prototype.accelerate = function() {
  this.speed += 20
  this.charge -= 1
   console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`);
}

const tesla = new EV('Tesla', 120, 23)
tesla.chargeBattery(99)
console.log(tesla)
tesla.accelerate()
tesla.accelerate()
tesla.deccelerate()


// Coding Challenge #4
// Your tasks:
// 1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
// child class of the 'CarCl' class
// 2. Make the 'charge' property private
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
// methods of this class, and also update the 'brake' method in the 'CarCl'
// class. Then experiment with chaining!
// Test data:
// § Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
// GOOD LUCK 😀

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo
    this.speed = 0;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 2;
    return this;
  }
  break() {
    this.speed -= 5;
    this.#charge += 1;
    return this;
  }

  status() {
    console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.#charge}%`);
    return this;
  }
}

const teslaCl = new EVCl('Tesla', 120, 23)

teslaCl.chargeBattery(80).status().accelerate().status().break(). status()
console.log(teslaCl.speedUS)
