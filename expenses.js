var expenese=[12000,8000,24000,23000,45000,10000]
//total expense -reduce
sum=0
tot_exp=expenese.reduce((exp)=>sum+=exp)
console.log(tot_exp)
//highest exp   -reduce
var max=expenese.reduce((exp1,exp2)=>exp1>exp2?exp1:exp2)
console.log(max)
//lowest exp   -reduce
var min=expenese.reduce((exp1,exp2)=>exp1>exp2?exp2:exp1)
console.log(min)
//avg exp   -reduce /len
s=0
tot_exp=expenese.reduce((exp)=>s+=exp)
console.log(tot_exp/expenese.length)
//sort exp  - sort
var asc=expenese.sort((exp1,exp2)=>exp1-exp2)
console.log(asc)
//expenses >  -filter

var exp_grt=expenese.filter((exp)=>exp>12000)
console.log(exp_grt)

