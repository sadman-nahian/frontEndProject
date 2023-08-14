var inputText=document.querySelector('.input-box') ;
var searchButton=document.querySelector('#search-button');
var image=document.querySelector('.weather-pic');
var temperature=document.querySelector('.temparature');
var description=document.querySelector('.info');
var humidity=document.querySelector('#humidity');
var windSpeed= document.querySelector('.wind .value');

var weather_data=getWeather("new york");
var weatherDetailsDiv = document.querySelector('.weather-details');



searchButton.addEventListener('click',function(){
    var location=inputText.value;
    getWeather(location);
});
inputText.addEventListener('keypress',function(event){
    if(event.key==="Enter"){
        event.preventDefault();
        getWeather(inputText.value);
    }
})
window.addEventListener('keypress',function(event){
    if(event.key==="Enter"){
        event.preventDefault();
        getWeather(inputText.value);
    }
})
async function getWeather(city="newyork"){
    const key="902c2f65f57297668fcc5eaca3df486b";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    var weather_data = await fetch(`${url}`).then(response => response.json());
    console.log(weather_data);
    if (weather_data.cod === '404') {
        temperature.innerHTML = "Location not found";
        description.innerHTML = "";
        windSpeed.innerHTML = "";
        image.src = "/images/404.png";
        weatherDetailsDiv.style.display='none';
        
        


    }
    else{
        temperature.innerHTML=`${Math.round(weather_data.main.temp-273.15)} C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    windSpeed.innerHTML=`${weather_data.wind.speed}Km/H`;
    var mode=weather_data.weather[0].main;
    
     if(mode==='clouds'){
            image.src="/images/cloud.png";
            
        } else if (mode === 'Clear') {
            image.src = "/images/clear.png";
        } else if (mode === 'Rain') {
            image.src = "/images/rain.png";
        } else if (mode === 'Mist') {
            image.src = "/images/mist.png";
        } else if (mode === 'Snow') {
            image.src = "/images/snow.png";
        }
    }}
    
    
    
    
    




