var fromBox = document.querySelector('#id_select1');
var toBox = document.querySelector('#id_select2');
var currencyCode;
let appid="ab727fc9b0f0e672f8a9b0fe";
fetch(`https://v6.exchangerate-api.com/v6/${appid}/latest/USD`).then(res=>res.json())
.then(data=>processData(data));

function processData(data){
    currencyCode=data.conversion_rates;
    for(countryCodes in currencyCode){
        fromBox.appendChild(getOptionTag(countryCodes))
        toBox.appendChild(getOptionTag(countryCodes))

   }
  }

function getOptionTag(code){
                let optionTag=document.createElement('option');
               // console.log(code)
                optionTag.value=currencyCode[code];
                optionTag.text=code;
                return optionTag
}

function exchange(){
    let fromRate=document.querySelector("#id_select1").value;
    let toRate=document.querySelector("#id_select2").value;
    console.log(fromRate,toRate);
   // console.log(currencyCode)
    let amount=id_amount.value
   // console.log(fromRate)
   let finalValue =
   ((amount / fromRate) * toRate).toFixed(2);
   console.log(finalValue);
   document.querySelector("#id_result").innerHTML=finalValue;
}

function displayCountryName(event){
    // myevent=["option tag1","option tag2", "option tag3"]
   console.log(event.name)
    let cname=event.options[event.selectedIndex].text;
    console.log(cname)
    fetch("https://restcountries.com/v2/all/").then(res=>res.json())
      .then(data=>{
        //   data.forEach(c=>{
        //      if(c.currencies){
        //         if(c.currencies[0].code == cname){
        //             let cdata=cname
        //             console.log(cdata)
        //         }
                
        //      }

        //   });
        for(let c of data){
            if(c.currencies){
                if(c.currencies[0].code == cname){
                    let cdata = c.name;
                    console.log(cdata);
                    if(event.name == "fcode"){
                        document.querySelector('#from_countryname').innerHTML=cdata;
                    }
                    if(event.name == "tcode"){
                        document.querySelector('#to_countryname').innerHTML=cdata;
                    }
                        
                
                }
            }
        }
      })

}



      //view part display logic
      //api call((services))
      //bissiness logic | functionality

      // frame work (angular)

      //Django(python)
      //angular(TypeScript)

      /**
       * in js
       * var name="hello"
       * name =2345 
       * no type safety
       * 
       * in ts  // to give typesafet
       * type can be specified
       * var age:number=100  -> typescript
       * 
       */