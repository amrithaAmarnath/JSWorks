//no need of function keyword and function name
// in python similar to lambda
// (arguments) => {stmts}

function add(num1,num2){
    return num1+num2
}

var addition=(num1,num2) => num1+num2;    // lambda x1,x2:x1+x2;

var mul = (num1,num2) => num1 * num2;
var cube = (num1) => num1**3;

console.log(addition(1,2));
console.log(mul(1,2));
console.log(cube(2));

var sub= (num1,num2) => num1 - num2;  
console.log(sub(10,5));

var divi = (num1,num2) => num1/num2;
console.log(divi(10,5));


function maxTwo(n1,n2){
    // if(n1>n2){
    //     return n1;
    // }else{
    //     return n2;
    // }

    return n1>n2?n1:n2;
}

var maxTwo=(n1,n2) => n1>n2?n1:n2;
console.log(maxTwo(25,50))

function smartSub(n1,n2){
    return n1>n2?(n1-n2):(n2-n1);
}

smartSub= (n1,n2)=> n1>n2?n1-n2:n2-n1;
console.log(smartSub(5,10))




