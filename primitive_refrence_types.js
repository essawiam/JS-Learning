// Primitive type :
let num1 = 22;
let num2 = num1;
num1 = 33;
console.log(num2);

// Refrence type :
const person1 = { name: "Wiam" };
const person2 = person1;
person1.name = "Essa";
console.log(person2);

// To slove that use spread operators.
const person3 = { name: "Wiam" };
const person4 = { ...person3 };
person3.name = "Essa";
console.log(person4);
