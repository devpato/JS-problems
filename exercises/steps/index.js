// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

steps = (n, row = 0, stair = '') => {
  //V1
  //   for (let r = 0; r < n; r++) {
  //     let stair = '';
  //     for (let c = 0; c < n; c++) {
  //       c <= r ? (stair += '#') : (stair += ' ');
  //     }
  //     console.log(stair);
  //   }

  //V2
  //   if (n === row) {
  //     return;
  //   }
  //   if (n === stair.length) {
  //     console.log(stair);
  //     return steps(n, row + 1);
  //   }

  //   stair.length <= row ? (stair += '#') : (stair += ' ');
  //   steps(n, row, stair);

  //   Array.from({ length: n }).forEach((_, i) => {
  //     console.log(''.padStart(i + 1, '#').padEnd(n, ' '));
  //   });

  //V3
  Array.from({ length: n }).map((_, i) => {
    console.log(''.padStart(i + 1, '#').padEnd(n, ' '));
  });

  //V4
};

module.exports = steps;
