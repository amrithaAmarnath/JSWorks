var temps={"tvm":34,"ktm":28,"apy":29,"ekm":34,"tst":30,"pkd":35}// objects
// highest temp
//can't use map,filter etc as its not array
//cannot convert to array using Array.from() method
// to convert object to arrays
// var Object={
//     entries(obj){

//     }
// }


console.log(Object.entries(temps))
console.log(Object.entries(temps).reduce((t1,t2)=>t1[1]>t2[1]?t1:t2))