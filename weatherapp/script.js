//let url="https://api.openweathermap.org/data/2.5/weather?appid=6fa99e1f96f024f79970c5a3532b2ac6&units=metric&q=thrissur"
//fetch(url).then(res=> res.json()).then(data=>console.log(data))

function fetchWeather(){
    let city= id_city.value;
    console.log(city);
   fetch(`https://api.openweathermap.org/data/2.5/weather?appid=6fa99e1f96f024f79970c5a3532b2ac6&units=metric&q=${city}`)
   .then(res=>res.json()).then(data=>displayWeather(data))
//fetch(url).then(res=> res.json()).then(data=>console.log(data))
}

function displayWeather(data){
    let name=data.name
    let icon=data.weather[0].icon
    let type=data.weather[0].main
    let description=data.weather[0].description
    let tem=data.main.temp
    console.log(name,icon,type,description,tem);
    let htmlData=`<article class="widget">
    <div class="weatherIcon"><i class="wi wi-day-cloudy"></i></div>
    <div class="weatherInfo">
      <div class="temperature"><span>25&deg;</span></div>
      <div class="description">    
        <div class="weatherCondition">CLOUDY</div>    
        <div class="place">New York, New York</div>
      </div>
    </div>
    <div class="date">1st Jan</div>
  </article>`
   document.querySelector("#id_result").innerHTML=htmlData

}
function getCurrentWeather(){
    navigator.geolocation.getCurrentPosition((pos)=>{
        console.log(pos.coords.latitude,pos.coords.longitude)
        let lat=pos.coords.latitude
        let lon=pos.coords.longitude
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=77af46c0c8fec9ecfad0e29f5b81d66f&units=metric`)
        .then((res)=>res.json()).then((data)=>displayWeather(data))
    })
}