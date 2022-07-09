document.addEventListener("DOMContentLoaded", () => {
  fetchData();//call
  getStations();
  
});

let url = 'https://at1.api.radio-browser.info/json/stations';
//get dom elements
const stationsWrapper = document.getElementById("stations");
const stationName = document.getElementById("stationTitle");
const stationCountry = document.getElementById("stationCountry");
const audioPlayer = document.getElementById("audioControl");
const stationTag = document.getElementById("tag");
const countriesButton = document.querySelectorAll(".countries");

//fetch all radio stations by country
async function getStations(country = "Kenya") {
 
  const users = await fetch(`${url}/bycountry/${country}`)
  .then(res => res.json())
  .then((data) => data.forEach(item => renderAllStation(item)))
  .catch((error) =>alert('Unable to connect'));
  
}


//function to render all the stations on load and play selected station

function renderAllStation(data) {
  
  let list = document.createElement("li");
 
   
    list.innerHTML = `
     <div class=categoryCard>
     <img class=categoryImg >
     <h3 class=radioTitle>${data.name}</h3>
     <p class=country>${data.country}</p>
     <span class="rate">Ratings <span class="votes">${data.votes}</span> </span>
     </div>
     `;
    stationsWrapper.appendChild(list);
  
    //play seleceted station
    list.addEventListener("click", () => {
      stationName.textContent = data.name;
      audioPlayer.src = data.url;
      stationTag.textContent = data.tags;
      stationCountry.textContent = data.country;
    });
  
}

// function to fetch station by name 
const fetchData = (station = "Classic 105") => {
  fetch(`${url}/byname/${station}`)
    .then((res) => res.json())
    .then((data) => data.forEach((item) => renderOneStation(item)))
    .catch((err) => alert('Unable to connect'));
};


// function to render default station and station from form submit
const renderOneStation = (search) => {
  const radioUrl = search.url;
  const station = search.name;
  const country = search.country;
 

  stationName.textContent = station;
  stationCountry.textContent = country;
  stationTag.textContent = search.tags;
  audioPlayer.src = radioUrl;
};


  // const searchForm =document.querySelector("#search-form");

  // searchForm.addEventListener("submit", handleSubmit);

  // function handleSubmit(event){
  //   event.preventDefault();
  //   const inputValue = event.target.search.value;
  //   stationsWrapper.innerHTML="";
  //   fetchData(inputValue)   
  //   renderAllStation(inputValue)
  //   }

// Click event that fetch all station per country
countriesButton.forEach(button => button.addEventListener("click", ()=> getStations(button.textContent)))