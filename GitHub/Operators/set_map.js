// Set
const myname = 'alexandermartynovich';
const myset = new Set(myname);
console.log([...new Set('alexandermartynovich')])
console.log(new Set('alexandermartynovich').size)

myset.add('z');
myset.delete('a');
console.log(` my set has 't' : ${myset.has('t')}`);
console.log([...myset]);

// Map

const mymap = new Map();
mymap.set(1,'one');
mymap.set(true, 'TRUE');
mymap.set(document.querySelector('h1'), 'Test');
//mymap.delete(true);
console.log(mymap);
console.log(mymap.size);

// Map 2
const question = new Map([
  ['question', 'What is the best programming language ?'],
  [1, 'Python'],
  [2, 'C'],
  [3, 'JS'],
  ['answer', 'JS'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again !']
]);

console.log(question);

// Object to Map

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const gamemap = new Map(Object.entries(game));
console.log(gamemap);

//Destructuring, example

let answer = 3;
console.log(question.get('question'));
do{
for(const [key,val] of question)
 if (typeof key === 'number')
    console.log(`${key} ===>  ${val}`);

//answer = Number(prompt('Your answer is: '));

console.log(question.get(answer === question.get('correct')));
}while(answer !== question.get('correct'))

// Convert map to array

console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);