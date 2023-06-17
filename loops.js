/** Loops 
 * Multiple execution of codes / Iteration
 * 
 * 
 * for(entry control), while(entry control), do..while(exit control)
 * 
 * for
 * -----
 * 
 * for(initialization;condition;increment/decrement)
 *      stmst to be executed
 * 
 */

// for(let i=1;i<=5;i++){
//     console.log(i);
// }
// for(let i=5;i>0;i--){
//     console.log(i);
// }


// let i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// let j=1;
// do{
//     console.log(j);
//     j++;
// }while(j<=10)


/*
Assignment
*/
// let mark=22
// if(mark >= 80)
//   console.log("grade = A+")
// else if(mark >=60 && mark < 80 )
//     console.log("grade = A")
// else if(mark >=50 && mark < 60 )
//     console.log("grade = B+")
// else if(mark >=45 && mark < 50 )
//     console.log("grade = B")
// else if(mark >=25 && mark < 45 )
//     console.log("grade = C")
// else
//     console.log("grade = D")    


// let sal = 10000
// let exp=3
// switch(exp){
//     case 1: console.log('sal ',sal+sal*10/100);
//             break;
//     case 2: console.log('sal ',sal+sal*8/100);
//             break;
//     case 3:console.log('sal ',sal+sal*5/100);
//             break;
//     default: console.log('not eligible for increment');
    
    
// }

// print odd numbers within range
// first method
// for(let i=0;i<=10;i++){
//     if(i%2 !== 0)
//       console.log(i)
// }

// second method
// for(let i=1;i<=10;i+=2){
//       console.log(i)
// }

//print sum of digits of given number

// let sum=0, num=513;

// for(i=0;num>0;i++){
//   r=num%10;
//   sum=sum+r;
//   //num=parseInt(num/10);
//   num=Math.floor(num/10);
//  // num=((num/10) | 0)
// }
// console.log(sum);

/**
 * Nested For
 * ----------
 * for(initialization;condition;increment/decrement){
 *      for(initialization;condition;increment/decrement){
 *          stmts to be executed
 *      }
 *  } 
 */

//PATTERN
// let string;
// for(let i=1;i<=3;i++){
//     string="";
//     for(let j=0;j<i;j++){
//       string+="* "
//     }
//     console.log(string)
// }



/** 
 * WHILE:
 * ------
 * 
 * initialization
 * while(condition){
 *    stmts
 *    increment/decrement;
 * }
 */
let n=1
while(n<=10){
  console.log(n);
  n++;
}

// let sum=0, num=513;

// while(num>0){
//   r=num%10;
//   sum=sum+r;
//   //num=parseInt(num/10);
//   num=Math.floor(num/10);
//  // num=((num/10) | 0)
// }
// console.log(sum);




