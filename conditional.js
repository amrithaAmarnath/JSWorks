/*
python                       javascript
------                       ----------
if                           if
if(condition):              if(condition){
    statements                  statements
                            }
    
elif                        else if
elif(condition):            else if(condition){
    statements                  statements
                            }

else:                        else{
   statements                   statements
                             }                                   

*/

// wap to print the given number is +ve, -ve or zero using if only

// var a=-2;

// if(a<0){
//     console.log("negative number");
// }

// if(a==0)
//     console.log("zero");

// if(a>0)
//     console.log("positive number");
//*************************************************** */
// //wap to check whether a student passed or failed in exam using if.
// // passed if marks 45 and above, if below 45 failed .

// var m=45;

// if(m>=45)
//    console.log("passed");
// if(m<45)
//    console.log("failed");  

/***************************************** */

// //check a person is eligible for voting or not
// var age= 17
// var elg="eligible for vote"
// if(age<18)
//     elg="not eligible for vote"
// console.log(elg);  

// //check the given number is odd or even
// var num=99
// if(num %2 ==0)
//     console.log("even number");
// if(num %2 !=0)
//     console.log("odd number"); 

// //check the given number is divisible by 7 or not
// var num=64
// var res="divisible by 7";
// if(num %7 !=0)
//     res="not divisible by 7";
// console.log(res); 

// var num1=10; var num2=20;
// if(num1 > num2){
//     console.log("hai")
//     console.log("num1 is greater");
// }else{
//     console.log("hellooo")
// }

// //var res= (num1>num2)?console.log("hai!!"):console.log("hellooo!!");

// //check the given number is odd or even
// var num=100
// if(num %2 === 0)
//     console.log("even number");
// else
//     console.log("odd number"); 


// //max of 3 numbers
// var a=100,b=19,c=20;
// if(a>b && a>c){
//     console.log("a is greater");
// }else{
//     if(b>a && b>c)
//     console.log("b is greater");
//     else
//     console.log("c is greater");
// }



//max of 3 numbers
// var a=10,b=25,c=20;
// if(a>b && a>c){
//     console.log("a is greater");
// }else if(b>a && b>c){
//     console.log("b is greater");   
// }else{
// console.log("c is greater");
// }


// a=20
// if(a === 10)
// console.log("a is ",a);
// else if(a === 15)
// console.log("a is ",a);
// else if(a === 30)
// console.log("a is ",a);
// else
// console.log("a is not 10,15,30"); 



//check whether given angles of a triangle is valid or not
//check if isoscles

// ang1=parseInt(prompt("enter first angle of a triangle"));
// ang2=parseInt(prompt("enter second angle of a triangle"));
// ang3=parseInt(prompt("enter third angle of a triangle"));
// s1=parseInt(prompt("enter length of one side of a triangle"));
// s2=parseInt(prompt("enter length of second side of a triangle"));



// if(ang1+ang2+ang3 === 180){
//     if((ang1 === ang2 || ang1===ang3 || ang2 === ang3) && (s1 === s2))
//         console.log("triangle is valid and isosceles")
//     else
//         console.log("triangle is valid but not isosceles")
   
// }else{
//         console.log("triangle is not valid") 
// }


// ang1=30
// ang2=60
// ang3=90



// if(ang1+ang2+ang3 === 180){
//     if(ang1 === ang2 || ang1===ang3 || ang2 === ang3)
//         console.log("triangle is valid and isosceles")
//     else
//         console.log("triangle is valid but not isosceles")
   
// }else{
//         console.log("triangle is not valid") 
// }



/*
  SWITCH
  ------

   switch(expression){
    case value1:
        statements
        break
    case value2:
        statements
        break

    default:
        statement
        break
 } */

//  let n=15;
//  switch(n){
//     case 15:
//         console.log('n = ',15);
//         break;
//     case 10:
//         console.log('n = ',10);
//         break;
//     case 20:
//         console.log('n = ',20);
//         break;
//     default:
//         console.log('not 10,15,20');
//  }

// let day=5;
//  switch(day){
//     case 1:
//         console.log('Sunday');
//         break;
//     case 2:
//         console.log('Monday');
//         break;
//     case 3:
//         console.log('Tuesday');
//         break;
//     case 4:
//         console.log('Wednesday');
//         break;
//     case 5:
//         console.log('Thursday');
//         break;
//     case 6:
//         console.log('Friday');
//         break;
//     case 7:
//         console.log('Saturday');
//         break;       
//     default:
//         console.log('invalid day');
//  }


 let operation='*';
 let a=10,b=2
 switch(operation){
    case '+':
        console.log('add ',a+b);
        break;
    case '-':
        console.log('subraction ',a-b);
        break;
    case '*':
        console.log('multiply ', a*b);
        break;
    case '/':
        console.log('divide ', a/b);
        break;
         
    default:
        console.log('invalid operation');
 }



















