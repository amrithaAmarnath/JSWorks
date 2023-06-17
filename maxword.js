var txt="hello good morning all"
var max_word=txt.split(" ").reduce((w1,w2)=>w1.length>w2.length?w1:w2);
console.log(max_word)

// DOM ts Angular