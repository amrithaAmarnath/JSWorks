//PATTERN
let string;
// for(let i=1;i<=3;i++){
//     string="";
//     for(let j=0;j<i;j++){
//       string+="* "
//     }
//     console.log(string)
// }
n=3
for(let i=0;i<n;i++){
    string="";
    for(let j=i;j<n;j++){
      string+="* "
    }  
    console.log(string)
}
 for(let i=0;i<n;i++){
         string="";
         for(let j=0;j<i;j++){
          string+="  "
         }
         for(let j=i;j<n;j++){
             string+="* "
         }

         for(let j=0;j<n;j++){
           
         }
          console.log(string)
 
        
     }


     for(let i=1;i<=3;i++){
          string="";
          for(let j=1;j<=i;j++){
            string+=" "+j
          }
          console.log(string)
      }
