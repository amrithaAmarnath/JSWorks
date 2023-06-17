/**
 * Arrays
 * ----
 * store same tyrpe of data
 */

// let arr= [ 'arya', 'akshaya', 'sneha' ];
// console.log(arr);
// console.log(arr[0],"\n",arr[1],"\n",arr[2]);
// console.log(arr.length)

// for(let i in arr){ // will display index
//     console.log(i)
// }

// for(let i=0;i<arr.length;i++)
//     console.log(arr[i])


// let i=0;
// while(i<arr.length){
//     console.log(arr[i]);
//     i++
// }

//summ of integers in array
let intArray=[2,3,4,19,10,30,45,67];
let s=0
for(let i=0;i<intArray.length;i++)
    s+=intArray[i];
console.log("sum=",s);

//print all odd integers in the array
console.log("odd numbers : ");
for(let i=0;i<intArray.length;i++){
    if(intArray[i]%2 !==0)
       console.log( intArray[i])

}

console.log("even numbers : ");
for(let i=0;i<intArray.length;i++){
    if(intArray[i]%2 ===0)
       console.log( intArray[i])

}

//greatest number in the array
let greatest=intArray[0];
for(let i=0;i<intArray.length;i++){
    if(intArray[i]>greatest)
        greatest = intArray[i]
}
console.log("greatest number is = ",greatest);

//array = [23,45,67]  => replace if 45 to 95 

let arr1 = [23 ,20, 67], f=0;
for(let i=0;i<arr1.length;i++){
    if(arr1[i] === 45){
        arr1[i]=95;
        f=1;
    }
}
if(f == 0){
    console.log("45 not present in array")
}
console.log(arr1);


// find out a pair of elements which form a particular value as sum from a given
// array for ex:value=9 pairs:(3,6),(7,2)

let intarr=[1,8,7,2,5,4,6,3,10]
for(let i=0;i<intarr.length;i++){
    for(j=i+1;j<intArray.length;j++){
        if((i+j) === 9){
            console.log(i,j)
        }
    }
}



