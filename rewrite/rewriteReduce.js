//  const array = [45, 4, 9, 16, 25];
// const init = 0;
// const sumfn = array.reduce(
//   (a, b) => a + b,
//   init,
// );

// console.log(sumfn);

// function reducer(accumulator, currentValue, index) {
//     const returns = accumulator + currentValue;
//     console.log(
//       `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
//     );
//     return returns;
//   }
  
//   array.reduce(reducer);


const objects = [{ x: 'Tao ' }, { x: 'Xoai ' }, { x: 'Kiwi ' }];
const  init = ' ';
const sum = objects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  init,
);

console.log(sum); 
