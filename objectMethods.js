const stud = {Name:"aswathi",
                class:12,
                div:'A',
                Mark:95,
                displaymark:function(){
                    return this.Name + " mark in maths " + this.Mark
                }
            }

let disp=stud.displaymark()
console.log(disp)


const car={
            Name:"BMW",
            colour:"white",
            type:"4 wheeler",
            price:"70 lakhs",
            EngineStart:function(){
                return this.Name + " engine started..."
            },
            Braking:function(){
                return this.Name + " applying brake .... "
            }
        }

let carDetails = console.log(car)
console.log(car.EngineStart())
console.log(car.Braking())