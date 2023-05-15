const container=document.querySelector(".container");
const search_box=document.querySelector(".search");
const error=document.querySelector(".error");
const details=document.querySelector(".details");
const search=document.querySelector(".button");
const tryagain=document.querySelector(".error span");
const tempo=document.querySelector(".temp");
 search.addEventListener('click', ()=>{
    const city=document.querySelector(".search input").value;
    if(city==''){
        return;
    }
    const apikey='5a8bd8dc8b1482c3d1a7a69d78536095';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`).then(response => response.json())
    .then(json => {
      if(json.cod=='404'){
        container.style.height='600px';
        search_box.style.display='none';
        error.style.display = 'block';
        error.classList.add('fadeIn');
        tempo.style.display='none';
        details.style.display='none';
        tryagain.addEventListener('click', ()=>{
            error.classList.remove('fadeIn');
            container.style.height='85px';
            error.style.display = 'none';
            search_box.style.display='flex';
        })
      }
      else{
      tempo.style.display='grid';
      details.style.display='flex';
      const weatherimg=document.querySelector(".temp img");
      const temperature=document.querySelector(".temp .t");
      const description=document.querySelector(".temp .d");
      const windspeed=document.querySelector(".wind span");
      const humid=document.querySelector(".humid span");
      if(json.weather[0].icon!="01n" ||json.weather[0].icon!="02n"||json.weather[0].icon!="03n"||json.weather[0].icon!="04n"){
      switch(json.weather[0].main){
      
      case 'Clouds':
          weatherimg.src='SongImg/clouds-and-sun.png';
          break;
      case 'Haze':
          weatherimg.src='SongImg/haze.png';
          break;
      case 'Drizzle':
          weatherimg.src='SongImg/drizzle.png';
          break;
      case 'Thunderstorm':
          weatherimg.src='SongImg/storm.png';
          break;
      case 'Clear':
          weatherimg.src='SongImg/sunny.png';
          break;
      case 'Rain':
          weatherimg.src='SongImg/raining.png';
          break;
      case 'Snow':
          weatherimg.src='SongImg/snow-storm.png';
           break;
        }
      }
      else{
        switch(json.weather[0].main){
      
      case 'Clear':
            weatherimg.src='SongImg/half-moon.png';
            break;
      default:
            weatherimg.sec='SongImg/cloudy-moon.png';
            break;
        }
      }
      temperature.innerHTML=`${parseInt(json.main.temp)}<span>°C</span>`
      description.innerHTML=`${json.weather[0].description}`
      windspeed.innerHTML=`${parseInt(json.wind.speed)}Km/h`
      humid.innerHTML=`${parseInt(json.main.humidity)}%`
      
      container.style.height='600px';
      search_box.style.display='flex';
      error.style.display = 'none';
      details.classList.add('fadeIn');
      tempo.classList.add('fadeIn');
      
 //add details using json 
    }

    })
 })
