// Spread operator en arrays
const numbers = [1, 2, 3, 4, 5];
const moreNumbers = [6, 7, 8, 9, 10];
const allNumbers = [...numbers, ...moreNumbers];
const allNumbers2 = [...allNumbers, 11, 12, 13, 14, 15];

console.log(allNumbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(allNumbers2); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
