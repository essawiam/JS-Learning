// Spread :
// This is valid for array and object.
const num = [1, 2, 3];
const numbers = [...num, 4, 5];

console.log(numbers);

// Rest :

const filterFun = (...args) => {
  return args.filter((e) => e > 3);
};

console.log(filterFun(1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 8));
