var point_table=[
    {team:"GT",matches:14,won:10,loss:4,nrr:0.809,pts:20,lastFive:["w","w","l","w","w"]},
    {team:"csk",matches:14,won:8,loss:5,nrr:0.652,pts:17,lastFive:["w","w","l","w","l"]},
    {team:"srh",matches:14,won:4,loss:10,nrr:-0.590,pts:8,lastFive:["l","l","l","l","w"]},
    {team:"dc",matches:14,won:5,loss:9,nrr:-0.80,pts:10,lastFive:["l","w","l","l","w"]},
    {team:"mi",matches:14,won:8,loss:6,nrr:-0.44,pts:16,lastFive:["w","l","w","w","l"]},
    {team:"rcb",matches:14,won:7,loss:7,nrr:+1.39,pts:14,lastFive:["l","w","w","l","l"]},
]

// map,filter,reduce,sort
// Q1. print all team members
// console.log(point_table.map(t=> t.team))
// Q2. sort teams wrt pts
// console.log(point_table.sort((p1,p2)=> p2.pts-p1.pts))
// Q3. print teams with +ve nrr
//console.log(point_table.filter((t)=> t.nrr>0).map(t=>t.team))
// Q4. qualifiers
var qualifiers = point_table.sort((t1,t2)=>t2.pts-t1.pts).slice(0,4).map(t=>t.team)
console.log(qualifiers)
// Q5. teams with atleast 5 won
console.log(point_table.filter((t)=> t.won>=5).map(t=>t.team))
// Q6. team with maximum pts
var max=point_table.reduce((t1,t2)=> t1.pts>t2.pts?t1:t2).team
console.log(max)
// Q7. team won last game
console.log(point_table.filter(t=>t.lastFive.slice(-1)=='w').map(t=>t.team))
// Q. team with pts more than 15
//console.log(point_table.filter(t => t.pts>15).map(t=>t.team))
//Q.sort pts in descending order
 //console.log(point_table.map(t => t.pts).sort((p1,p2)=> p2-p1))

 //Q IS KT playing 2k23 ipl?
 //some()
 /**
  *  checks if any array elements pass a test (provided as a callback function).
  * The some() method executes the callback function once for each array element.

The some() method returns true (and stops) if the function returns true for one of the array elements.

The some() method returns false if the function returns false for all of the array elements.

The some() method does not execute the function for empty array elements.

The some() method does not change the original array.


  */
var is__playing=point_table.some(t=>t.team == "kt")  // can't use include here. include can apply to array only
console.log(is__playing)



