"use strict";

// DATE
console.log('========== Dates ===============')
const today = new Date(Date.now());
console.log(today)

const options = {
year: "numeric",
month: "long",
day: "numeric",
hour: "numeric",
minute: "numeric",
second: "numeric",
weekday: "long"
}
const locale = navigator.locale;
const todayFormatted = Intl.DateTimeFormat('it-IT', options).format(today)
console.log(todayFormatted)

console.log(Intl.DateTimeFormat(locale, options).formatToParts(today))

// NUMBER
console.log('========== Numbers ===============')

console.log(Intl.NumberFormat('us-US',{style: 'currency', currency: 'USD'}).format(3141592.65))
console.log(Intl.NumberFormat('uk-UA',{style: 'currency', currency: 'UAH', currencyDisplay: "narrowSymbol"}).format(3141592.65))
console.log(Intl.NumberFormat('uk-UA',{style: 'currency', currency: 'UAH', currencyDisplay: "symbol"}).format(3141592.65))
console.log(Intl.NumberFormat('uk-UA',{style: 'currency', currency: 'UAH', currencyDisplay: "name"}).format(3141592.65))

// TimeOut
console.log('========== Set Timeout ===============')

const func = function(arg1, arg2, ...arg3) {
  console.log(`arg1 = ${arg1}, arg2 = ${arg2}`)
  console.log(`arg3 is array: ${Array.isArray(arg3)}`)
  console.log(`arg3 has length ${arg3.length} and values ${arg3}`)
}

//const timeout = setTimeout(func, 3000, 1,2,3,4,5,6,7)
console.log('Wait for 3 seconds ...')

// setInterval
console.log('========== Set Interval ===============')

console.log('Clock :')
const clock = function(start_time) {
  const options = { hour: 'numeric', minute:'numeric', second:'numeric'}
  const time = Date.now()
  console.log(Intl.DateTimeFormat('us-US', options).format(time));
  if((time - start_time) > 1000 * 15)  {
    clearInterval(interv);
    console.log(' ============  completed ====================')
  }
}

const interv = setInterval(clock, 1000, Date.now());