document.addEventListener("DOMContentLoaded", () => {
  getStations()
    .then((data) => renderAllStation(data))
    .catch((error) => {
      alert("Network Error");
    });
});

//get dom elements
const stationsWrapper = document.getElementById("stations");
const stationName = document.getElementById("stationTitle");
const stationCountry = document.getElementById("stationCountry");
const audioPlayer = document.getElementById("audioControl");
const stationTag = document.getElementById("tag");

//fetch all radio stations
async function getStations() {
  const users = await fetch(
    "https://at1.api.radio-browser.info/json/stations/byname/station"
  );
  return users.json();
}


//funtion to render all the stations on load and play selected station

function renderAllStation(data) {
  data.forEach((data) => {
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
    });
  });
}

const fetchData = (station = "Classic 105") => {
  fetch(`https://at1.api.radio-browser.info/json/stations/byname/${station}`)
    .then((res) => res.json())
    .then((data) => data.forEach((item) => renderOneStation(item)))
    .catch((err) => console.log(err));
};

const renderOneStation = (search) => {
  const radioUrl = search.url;
  const stationName = search.name;
  const country = search.country;
  const countryCode = search.countrycode;
  const format = search.codec;
  const votes = search.votes;
  const clickcount = search.clickcount;

  stationName.textContent = search.name;
  stationCountry.textContent = country;
  stationTag.textContent = search.tags;
  audioPlayer.src = radioUrl;
};


  const searchForm =document.querySelector("#search-form");

  searchForm.addEventListener("submit", handleSubmit);

  function handleSubmit(event){
    event.preventDefault();
    const inputValue = event.target.search.value;
    fetchData(inputValue)   
}

fetchData()