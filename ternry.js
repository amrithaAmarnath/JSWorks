"use strict"  // alll rules should follow ..here n2 is not defined idn2 is   datatype not specified 
function maxTwo(n1,n2){
    // if(n1>n2){
    //     return n1;
    // }else{
    //     return n2;
    // }

    return n1>n2?n1:n2;
}

var n=200;
console.log((n%2 == 0)?"even":"odd")
console.log((n < 0)?"negative":"positive")

var n1=100;
console.log(n > n1 ? n: n1>n ? n1:"equal");

n2 =300;
console.log((n>n1)&&(n>n2)?n:(n1>n2)?n1:n2);