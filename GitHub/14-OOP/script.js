'use strict';

// const Person = function( firstName, birthYear) {
//   this.birthYear = birthYear;
//   this.firstName = firstName;
//   this.lastName = undefined;
// }

// const me = new Person( 'Alex', 1963)
// console.log(me)

// Person.prototype.calcAge = function() {
//   const curr_year = new Date().getFullYear();
//   console.log(curr_year - this.birthYear)
// }

// me.calcAge()

// // prototype and __proto__

// console.log(Person.prototype === me.__proto__)
// console.log(Person.prototype === Object.prototype)
// console.log(me.toLocaleString())


// // Challenge #1 and after it

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
//   console.log(`''${this.make}'' going at ${this.speed}km/h`);
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`''${this.make}'' going at ${this.speed}km/h`);
// };

// Car.prototype.deccelerate = function () {
//   this.speed -= 5;
//   console.log(`''${this.make}'' going at ${this.speed}km/h`);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.accelerate();
// mercedes.deccelerate();
// mercedes.deccelerate();

// Car.hello = function(a) {
//   console.log(`hello there, ${a.make}, 👍`)
// }

// Car.hello(bmw);

// // Setter -Getter

// const obj = {
//   y: 'abc',

//   set x(xx) {
//     this._x = xx;
//   },
//   get x() {
//     return this._x;
//   },
// };

// obj.x = 5;
// console.log(obj.x);


// // Class

// class ClassZ{
//   constructor(i, a) {
//     this._i = i;
//     this.a = a;
//   }

//   printa() {
//     console.log(this.a);
//   }

//   set i(n) {
//     if (n >=0) this._i = n;
//     else alert(`${n} is negative, positive value required`);
//   }

//   get i() {
//     return this._i;
//   }

//   static hello(z) {
//     console.log(`hello there, ${z.a}, 💋`)
//   }
//   }
// const clb = new ClassZ(-1,'a');

// const clz = new ClassZ(1,'Alex M.');
// console.log(clz)
// clz.i = 999;
// console.log(clz)
// clz.printa()

// ClassZ.hello(clz);
// ClassZ.hello(bmw)


// inheritance between classes
//

// const Person = function( firstName, birthYear) {
//   this.birthYear = birthYear;
//   this.firstName = firstName;
// }

// const me = new Person( 'Alex', 1963)
// console.log(me)

// Person.prototype.calcAge = function() {
//   const curr_year = new Date().getFullYear();
//   console.log(curr_year - this.birthYear)
// }

// const Student = function(firstName, birthYear, course) {
//   // this.firstName = firstName
//   // this.birthYear = birthYear
//   Person.call(this, firstName, birthYear)
//   this.course = course
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;
// Student.prototype.introduce = function() {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`)
// }

// const iam = new Student('Alex', 1963, 'Theoretical Physics')

// console.log(iam)
// iam.introduce()
// iam.calcAge()
// const mike = Object.create(iam) // the deepest copy of an object
// mike.introduce()
// mike.calcAge()

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
//   console.log(`''${this.make}'' going at ${this.speed}km/h`);
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`''${this.make}'' going at ${this.speed}km/h`);
// };

// Car.prototype.deccelerate = function () {
//   this.speed -= 5;
//   console.log(`''${this.make}'' going at ${this.speed}km/h`);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.accelerate();
// mercedes.deccelerate();
// mercedes.deccelerate();

// ES6 Classes, inheritance between them

class PersonCl {
  constructor(fullName, birthYear) {
    const fn = fullName.trim()
    if(fn.indexOf(' ') > 0)
      [this.FistrName, this.LastName] = fn.split(' ');
    else
      this.LastName = fullName; 
    this.birthYear = birthYear;
  }

  about() {
    console.log(`${this.FistrName} ${this.LastName} of ${2021 - this.birthYear} years`)
  }
}

const alex = new PersonCl('Alex Martynovich', 1963);
alex.about();

const mart = new PersonCl('Martynovich', 2003);
mart.about()

class StudentCl extends PersonCl{
  #tuition;
  static index = 0;
  constructor( fullName, birthYear, course) {
    super( fullName, birthYear);
    this.course = course;
    this.#tuition = 1000;
    StudentCl.index += 1;
  }
  about () {
    console.log(`${this.FistrName} ${this.LastName} of ${2021 - this.birthYear} years studies ${this.course}`)
  }

  #increaseTuition(val) {
    return (this.#tuition += val);
  }

  coursePrice() {
    console.log(`new proce for the course is ${this.#increaseTuition(100)}`)
  }
  static number() {
    console.log(StudentCl.index)
  }
}

const Alex = new StudentCl(' Alex  Martynovich  ', 1963, 'Theoretical Physics')
const daniel = new StudentCl('  Daniel Martynovich  ', 2003, 'Mathematics')
daniel.about()

// daniel.#increaseTuition(1000)
daniel.coursePrice()
daniel.coursePrice()
StudentCl.number()
