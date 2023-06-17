var a=50
console.log("a=",a)
var a="name"
console.log("a=",a)

let b="abc"
console.log("b=",b)
b=2
console.log("b=",b)

const pi=20;
console.log("pi =",pi)
// const pi=40; //SyntaxError: Identifier 'pi' has already been declared
// console.log("pi =",pi)

// pi=40; // TypeError: Assignment to constant variable.
// console.log("pi =",pi)
// let b=2
// console.log("b=",b)

/***
 * var- can declare multiple times
 * let- can't declare multiple times
 * const -can't declare and assign multiple times
 */


k1=Symbol("hii")
console.log(k1)
k2=Symbol("hii")
console.log(k1)
console.log(k1 == k2)  //  always false ==> use case > token generation
console.log(typeof(k1))