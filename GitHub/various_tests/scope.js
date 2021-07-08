'use strict';

// 1. the TDZ
// function diff(denom) {
//   let res = 2312 -denom;
//   console.log(myName);
//   return res;
// }

// //diff(0);
// const myName = 'Martynovich';
// diff(1);

// 2 this in regular function and in arrow function
  // console.log(this);
  // var a = 3.14159265;
  // var b = 'Alexander Martynovich';
  // const obj = {
  //   a: 1,
  //   b: 'z',
  //   fd: function() {
  //     console.log(`${this.a}`);
  //   },
  //   fa: () => {
  //     console.log(this);
  //     console.log(`${this.b}`);
  //   },
  // };
  // obj.fd();
  // console.log(`${obj.fa}`);
  // obj.fa();



 // 3 inside MAIN function : this in regular function and in arrow function
 const main = function() {
//   console.log(this);
//   var a = 3.14159265;
//   var b = 'Alexander Martynovich';
//   const obj = {
//     a: 1,
//     b: 'z',
//     fd: function() {
//       console.log(`${this.a}`);
//     },
//     fa: () => {
//       console.log(this);
//       console.log(`${this.b}`);
//     },
//   };
//   obj.fd();
//   console.log(`${obj.fa}`);
//   obj.fa();
 }

 // 4 reference primitive type

 const a = 1;
 let b = 2;
 b = 3;
 //a = 4;
 console.log(a, b);