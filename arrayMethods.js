// var array= {
//     length,
//     push(object),
//     pop(),
//     includes(object)  -> if a particular object is present in array -> always return a boolean value
//     map() , -> creates a new array from calling a function for every array element.
              //  -> does not execute the function for empty elements.
              //  -> does not change the original array.
//    filter(), -> returns a new array depending on condition
// }

// var arr=[10,20,30];
// arr.push(100);   // to add an item into array
// console.log(arr);
// arr.pop()   // to remove last item from array
// console.log(arr);
// console.log(arr.includes(50));
// console.log(arr.includes(100));
// console.log(arr.includes(20));




// for(i in arr)
//     console.log(i);  // print index

/// instad of in in python we can use of in javascript

// console.log(3 in arr);  // if index 3 has object in it

var txt="heLlo";
//number of consonants , vowels
var vowels=["a","e","i","o","u"]
var vow_count=0,cons_count=0;
for(let c of txt){
  vowels.includes(c.toLowerCase())?vow_count++:cons_count++;
}
console.log("consonants: ",cons_count);
console.log("vowels: ",vow_count);
/*map() Method
--------------
*/

//squares
var nums=[2,3,4,5,6];
// function square(num){
//   return num**2
// }

// var squares=nums.map(square)

var squares=nums.map((num) => num**2)
console.log(squares)

var cubes=nums.map((num)=> num**3)
console.log(cubes)

Array.from(txt).map(ch => vowels.includes(ch)?vow_count++:cons_count++)

/**filter() Method */
var even=nums.filter(n => n%2 == 0)
console.log(even)
// filter num >5
var gt5=nums.filter(n => n>5)
console.log(gt5)


var names=['albin',"alvin","bibin"]
//print all names in upper case
var uppr=names.map(w=> w.toUpperCase());
console.log(uppr)

//print all names starting with 'a'
var uppr=names.filter(w=> w[0] == 'a');
var uppr=names.filter(w=> w.startsWith('a'));
console.log(uppr)

//sort() Method

var nums=[2,3,4,11,10,200,2000]
var srt=nums.sort()  // string sorting -> print numbers starts with 1 then 2 then 3
console.log(srt)
// function compare(obj1,obj2){  
//   // if(obj1<obj2){
//   //   return -1 //obj1  -1 return first value
//   // }else{
//   //   return 1//obj2  1 return second value
//   // }
//   return obj<obj2?-1:1;
// }
//ascending
//var srt=nums.sort((obj1,obj2) => obj1<obj2?-1:1) 
var srt=nums.sort((obj1,obj2) => obj1-obj2)  // also correct return obj1
console.log(srt);
//descending//
//var srt=nums.sort((obj1,obj2) => obj1<obj2?1:-1)
var srt=nums.sort((obj1,obj2) => obj2-obj1)
console.log(srt);

//reduce() method:

//2,3=>2+3=5 , 5,4=>5+4=9
var sum = nums.reduce((n1,n2)=> n1+n2)
console.log(sum);
var sum = nums.reduceRight((n1,n2)=> n1+n2)
console.log(sum);
var max = nums.reduce((n1,n2)=> n1>n2?n1:n2)
console.log(max)



