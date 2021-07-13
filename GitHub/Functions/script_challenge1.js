"use:strict";

const makeClosure = function(index) {
  let counter = 0;
  if (index == 0)
    return function() {
      counter++;
      console.log(counter);
    }
  else
    return function() {
      counter*= 10;
      console.log(counter);
    }
}

const plusOne = makeClosure(0);
const timesTen = makeClosure(1);

plusOne();
timesTen();
plusOne();

console.dir(timesTen)