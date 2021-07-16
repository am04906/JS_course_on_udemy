// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]

const arr1 = [5, 2, 4, 1, 15, 8, 3];
const arr2 = [16, 6, 10, 5, 6, 1, 4];

const ageConverter = function(age) {
  if (age <= 2) return age * 2
  else return 16 + age * 4;
}
const arr1human = arr1.map(ageConverter);
const arr2human = arr2.map(ageConverter);

console.log(arr1human);
console.log(arr2human);

const adults1 = arr1human.filter( age => age >= 18);
const adults2 = arr2human.filter( age => age >= 18);

console.log(adults1)
console.log(adults2)

const getAverage = (( ave, age, _, arr) =>ave + age/arr.length);
console.log(adults1.reduce(getAverage, 0))
console.log(adults2.reduce(getAverage, 0))

// CHAINING

console.log([5, 2, 4, 1, 15, 8, 3].map(ageConverter).filter( age => age >= 18).reduce(getAverage, 0));
