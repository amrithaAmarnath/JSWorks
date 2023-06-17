let API_KEY="adf89c5166454f3091d2be96c159277c";
let news;
fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`).then(res=>res.json())
    .then(data=>{console.log(data);news=data});
function displayTopNews(){


  news.article.forEach(n => {
    let htmlData=`
    <div class="card" style="width: 18rem;">
    <img src="${source}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>

    
    `

    document.querySelector("#displayNews").innerHTML=htmlData;
  });
    
   
       
    

 

 
}
