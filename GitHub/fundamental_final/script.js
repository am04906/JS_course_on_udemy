var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
var totals = [];

function calcTips(bill) {
  if (bill < 100)
    return bill * 0.20;
  else if (bill > 400)
    return bill * .10;
  else
    return bill * .15
}

bills.forEach((el) => totals.push(el + calcTips(el)));
console.log(totals.toString());

totals = [];
$.each(bills, (index, el) => totals.push(el + calcTips(el)));
console.log(totals.toString())