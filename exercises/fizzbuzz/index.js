// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

fizzBuzz = n => {
  //Solution V1
  // for(let i = 1; i <= n; i++) {
  //     if(i % 15 === 0 ) {
  //         console.log('fizzbuzz');
  //     } else if (i % 3 === 0) {
  //         console.log('fizz');
  //     } else if (i % 5 === 0) {
  //         console.log('buzz');
  //     } else {
  //         console.log(i)
  //     }
  //  }

  //Solution V2
  //   for (let i = 1; i <= n; i++) {
  //       const fizz = i % 3 === 0 ? "fizz" : "";
  //       const buzz = i % 5 === 0 ? "buzz" : "";
  //       console.log(fizz + buzz || i);
  //   }

  //Solution V3
  if (n == 0) return;

  fizzBuzz(n - 1);
  let str = '';
  if (!(n % 3)) str += 'fizz';
  if (!(n % 5)) str += 'buzz';

  console.log(str || n);
};

module.exports = fizzBuzz;
