/*
OPERATORS
----------
1. Arithmnetic operators
   +, -, *, /, %, **, ++, --

   let x=4;
   x++ => x=x+1 => 5
   x-- => x=x-1 => 3

    if x=4
   ++x -> x=5 
   x++ -> x=4 and increment on next use. delay is there before assignmnent
    
2. Assignment operators (compound assignment operator)
    = , +=, -=, *=, /= ,%=
3. Comparison operators or relational operator
    == (equality operator)
    <=  , <, >=, > , !=,
     === (strict equality -> value as well as type must be same)
    !== (strict not equality -> value as well as type must be same)

4. Logical operators
    logical OR ( || ) , logical AND ( && ) ,logical NOT ( ! ) ,
  
    xor -> truth tables
5. Bitwise operators
   bitwise or (|)
   bitwise not (~)
   bitwise xor (^)


6. Typeof operators
7. Ternary operators
    
*/


//Arithmentic
var a=10 , b=5;
// console.log("a=",a,"b=",b);
// console.log("a+b= ",a+b);
// console.log("a-b= ",a-b);
// console.log("a*b= ",a*b)
// console.log("a/b= ",a/b);
// console.log("a%b= ",a%b);
// console.log("a++ ",a++);
// console.log("a=",a)
// console.log("++a",++a)
// console.log("a-- ",a--);

// var c=2;
// console.log("--c ",--c);

//Assignment 

// console.log("b= ",b=2);

// console.log("b+=2 ",b+=2);

// console.log("b-=1 ",b-=1);
// console.log("b*=2 ",b*=2);
// console.log("b**=2 ",b**=2);

// console.log("b/=2 ",b/=2);
// console.log("b%=2 ",b%=2);

//Comparison
// a=1,b=1
// c=2
// console.log("equality", a==b)
// console.log("equality", a==c)
// console.log("strict equality", a===b)
// b='1'
// console.log("equality", a==b)
// console.log("strict equality", a===b)

// console.log("inequality", a!=b)
// console.log("strict inequality", a!==b)
// console.log("a>=b", a>=b)
// console.log("a<=b", a<=b)
// console.log("a>b", a>b)
// console.log("a<b", a<b)



// //Logical

// a=5,b=10,c=15

// console.log((a<b) && (b<c))

// console.log((a>b) && (b<c))

// console.log(!(a<b))

// console.log((a<b) || (b<c))

// console.log((a>b) || (b<c))
// console.log((a>b) || (b>c))


//Bitwise operators
console.log(1&1);
console.log(1|0);
console.log(~1);  // 1 -> ~ (001 ) -> 110   here left most 1 is taken as sign remaining convert to decimal
// -28 => o/p +(28-1)
// 28 => o/p -(28+1)

console.log(~6); 
console.log(1^1);















