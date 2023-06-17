//promises
//project accept or reject

var projectPresentation = new Promise((resolve,reject)=>{
    let isDone=true;
    if(isDone){
        resolve("completed")
    }else{
        reject("failed")
    }
})

projectPresentation.then(res=>console.log("lets start angular")).catch(err=>console.log("pls do presentation"));

var luckycontext=new Promise((resolve,reject)=>{
    let yourNum=66
    let lotNum=parseInt(Math.random()*100)
    if(yourNum==lotNum){
        resolve("you win")
    }
});
luckycontext.then(res=>console.log("will buy a new car"));