

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// MAP
const converted = movements.map((el, i) => ` ${i + 1} : ${el}` );
console.log(movements)
console.log(converted.join('\n'))

const newArr = [];
for ([key,el] of movements.entries()) newArr.push(el *1.1)
console.log(newArr)

//FILTER
const filtered = movements.filter((el, i) => el > 0)

console.log(filtered)

// REDUCE

const balance = movements.reduce((result, el, i, arr) => result + el, 0);
console.log(' balance = ' + balance)
const balanceStr = movements.reduce((result, el, i, arr) => result + ' ' + el, '0');
console.log(balanceStr)

// example of MAP use
const myname = "aAlexander Yuriy MArtynovich";

const id = myname.toLowerCase().split(' ').map(el => el[0]).join('');
console.log(id)

// new array, fill
const x = new Array(9)
x.fill( 1,0,x.length/2)
x.fill(2,x.length/2)
console.log(x)

//Array.from

const y = Array.from({length:9}, (_,i) => i + 1)
console.log(y)

const z = Array.from({length:29}, () => Math.trunc(Math.random()*20 -10))
console.log(z)

console.log(Array.from(movements.entries()).map(el => el.pop()))