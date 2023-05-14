const container=document.querySelector(".container");
const search_box=document.querySelector(".search");
const error=document.querySelector(".error");
const details=document.querySelector(".details");
const search=document.querySelector(".button");
const tryagain=document.querySelector(".error span");
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
        tryagain.addEventListener('click', ()=>{
            error.classList.remove('fadeIn');
            container.style.height='85px';
            error.style.display = 'none';
            search_box.style.display='flex';
        })
      }
 //add details using json 


    })
 })