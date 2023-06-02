Const :
const myName = "Wiam";
console.log(myName);

// You can't change the value because it is const.
myName = "Essa";
console.log(myName);

//var vs let :

if (true) {
  var myLast = "Naama";
}
console.log(myLast);

if (true) {
  let myLastName = "Naama";
}
console.log(myLastName);

/*
First Example:
In the first example, myLast is declared with var inside the if block.
It has function scope, so it can be accessed outside the block and logged to the console.

Second Example:
In the second example, myLastName is declared with let inside the if block.
It has block scope, so it is only accessible within the block and cannot
 be accessed or logged outside of it.
*/
