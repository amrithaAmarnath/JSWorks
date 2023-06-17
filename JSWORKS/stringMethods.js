/**
 * String
 * -------
 * 
 * name="strings"
 */

// name1="strings";
// console.log(name1);
// console.log(name1.length)
// // slice()
// let str = "namil,saliha,dona"
// console.log(str.slice(6));
// console.log(str.slice(6,12));
// console.log(str.slice(-4));
// console.log(str.slice(-11,-5));

// //substring(start,end)   => similar to slice()

// console.log(str.substring(6,12));


//substr(start index, length)

// console.log(str.substr(6,6));
// console.log(str.substr(0,5));
// console.log(str.substr(13));

// to upper case && to lower case

let str1="hellooo";
let newstr=str1.toUpperCase();
console.log(newstr);
console.log(str1.toLowerCase())

str3=str1.concat(" ","World!..")
console.log(str3)


// split()
let students="arya akshaya sneha";
console.log(students.split(" "))