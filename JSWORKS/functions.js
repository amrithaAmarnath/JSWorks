/**
 * 
 * FUNCTIONS
 * ----------
 * 
 * function functioname(arg1,arg2,....){
 *      stmts;
 * }
 * 
 * functioname(arg1,arg2)
 */

// function add(a,b){
//     return a+b;
// }
// let s=add(2,3)
// console.log(s);

// function fact(){
//     let num=5;
//     let f=1;
//     for(i=1;i<=num;i++)
//          f*=i
//     console.log(f);
// }
// fact()

// function fact1(n){
//     console.log(n);
//     if(n === 1)
//        return 1;
//     else
//         return n(n-1);

// }
// console.log(fact1(5))


// right triangle equilateral, isoscles,3 sides different
// are=


// function equiTri(side){
//     let area=((Math.sqrt(3))/4)*(side*side)
//     console.log("area =",area);
// }
// function isocs(b,h){
//     let area=(b*h)/2
//     console.log("area =",area);
// }
// function scalene(a,b,c){
//     let s= a+b+c;
//     let area=Math.sqrt(s*(s-a)*(s-b)*(s-c))
//     console.log("area =",area);
// }

// let side1=20;
// let side2=30;
// let side3=10;
// if(side1 === side2 && side2 === side3){
//     console.log("triangle is equilateral")
//     equiTri(side1);
// }
// else if(side1 === side2 || side2 === side3 || side1 === side3){
//     console.log("triangle is isoceles")
//     isocs(side1,side2)
// }else{
//     console.log("triangle is scalene")
//     scalene(side1,side2,side3);
// }


//  -Leap year

// function leapyr(yr){
//     if((yr%100 === 0 && yr%400 === 0 ) || (yr%100!==0 && yr%4 === 0)){
//         console.log("leap year")
//     }else{
//         console.log("not a leap year")
//     }
// }

// leapyr(1600)

//degree to ft and farenheit to degree

function FtoC(F){
    let C=(F-32)*(5/9);
    console.log("temperature in celcuis is",C)
}
function CtoF(C){
    let F=C*(9/5)+32;
    console.log("temperature in Fahrenheit is",F)
}

t=37
opt="ctof"
switch(opt){
    case "ftoc":FtoC(t);
                break;

    case "ctof":CtoF(t);
                break;

    default:console.log("invalid option");
}