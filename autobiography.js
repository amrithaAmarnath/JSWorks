const person = {Name:"Amritha Amarnath",
                 Place:"Thrissur",
                 occupation:"IT",
                 Designation:"full-stack software developer",
                 Experience:"6 yrs",
                 Certifications:"Python-Django full-stack web development",
                 skills:"Python, Django, HTML, CSS, Javascript",
                 shotGoal:"job change",
                 intro:function(){
                    let myBio= "I am "+ this.Name + " from "+ this.Place + ", currently working in a reputed company as a "+this.Designation + " with "+this.Experience+" of experience. Beside that I am doing a certification course on "+this.Certifications+". My skills are "+this.skills + ". My shot-term goal is to have a "+this.shotGoal
                    return myBio;
                    }
                }
console.log(person.intro())


//create an object student, having property marks and it should contain marks of 5 subjects

const student = {
                    Name: "asha",
                    class:12,
                    div:"A",

}