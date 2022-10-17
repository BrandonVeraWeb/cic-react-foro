// Destructuring de objetos
const persona = {
  name: 'Fulanito',
  age: 30,
};

const { name, age } = persona;

console.log(name); // Fulanito
console.log(age); // 30

// Destructuring de arrays
const numbers = [1, 2, 3, 4, 5];

const [one, two, three, four, five] = numbers;

console.log(one); // 1
console.log(two); // 2
console.log(three); // 3
console.log(four); // 4
console.log(five); // 5
