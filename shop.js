var products=[
    {code:1,name:"potatto",price:45,avl_qty:50,category:"veg"},
    {code:2,name:"onion",price:30,avl_qty:150,category:"veg"},
    {code:3,name:"brinjal",price:30,avl_qty:10,category:"veg"},
    {code:4,name:"carrot",price:75,avl_qty:0,category:"veg"},
    {code:5,name:"tomatto",price:34,avl_qty:20,category:"veg"},
    {code:6,name:"apple",price:190,avl_qty:50,category:"veg"},
    {code:7,name:"egg",price:5,avl_qty:250,category:"nonveg"},
    {code:8,name:"chicken",price:145,avl_qty:250,category:"nonveg"},
    {code:9,name:"garlic",price:240,avl_qty:0,category:"veg"},
    {code:10,name:"chilly",price:100,avl_qty:15,category:"veg"},
    
]
// total no of products
console.log(products.length)
//total number of available items
console.log(products.filter(p=>p.avl_qty>0).length)
//outofstock products name
console.log(products.filter(p=>p.avl_qty == 0).map(p => p.name));
//in stock products name
console.log(products.filter(p=>p.avl_qty > 0).map(p => p.name));

//is any products below rs 40
console.log(products.some(p=>p.price<=40))
//costly product name
console.log(products.reduce((p1,p2)=>p1.price>p2.price?p1:p2).name);
// price of apple
console.log(products.find(p=>p.name == 'apple').price);



products.forEach(p=>console.log(p.name))
products.forEach(p=>console.log(p.price))


//map(),filter(),reduce(),sort(),find(),forEach(),includes()