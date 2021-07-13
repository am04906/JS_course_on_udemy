const airline = 'TAP Air  Portugal ';
const plane = 'A320';

console.log(plane[2])
console.log(airline.indexOf(' '));
console.log(airline.lastIndexOf(' '));

console.log(airline.slice(4,7));

console.log(airline.slice(airline.indexOf(' '), airline.lastIndexOf(' ')))

console.log(airline.slice(airline.lastIndexOf(' '), -2))

const checkMidldleSeat = function(seat) {
  // B and E are seats
  console.log(`Seat letter is ${seat.slice(-1)[0]}`);
  console.log('BE'.indexOf(seat.slice(-1)[0]) !== -1);
}

checkMidldleSeat('11B');
checkMidldleSeat('9C');
checkMidldleSeat('7E');

console.log(airline.toLocaleUpperCase());

const announcement = 'All passengers come to the boarding Door 23. Boarding door 23! 💩 🦋';
console.log(announcement);
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replace(/[Dd]oor/g, 'gate'));

console.log(airline.trim().replace(/  /g, ' ').split(' '));

// split & join

const [first, last] = 'Alexander Martynovich'.split(' ');
const newName = ['Mr.', first, last.toUpperCase()].join('---');
console.log(newName)