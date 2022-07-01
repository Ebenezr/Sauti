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
const audioPlayer = document.getElementById("audioControl");
const stationTag = document.getElementById("tag");

//fetch all radio stations
async function getStations() {
  const users = await fetch(
    "https://at1.api.radio-browser.info/json/stations/byname/station"
  );
  return users.json();
}

const fetchData = (station = "Classic 105") => {
  fetch(`https://at1.api.radio-browser.info/json/stations/byname/${station}`)
    .then((res) => res.json())
    .then((data) => data.forEach((item) => renderStation(item)))
    .catch((err) => alert("Network Error"));
};

const renderStation = (search) => {
  const radioUrl = search.url;
  const stationName = search.name;
  const country = search.country;
  const countryCode = search.countrycode;
  const format = search.codec;
  const votes = search.votes;
  const clickcount = seacrh.clickcount;
  // console.log(radioUrl);
};

//get random pics
//fetch data from randomuserapi
async function getAverters() {
  const users = await fetch("https://randomuser.me/api/");
  return users.json();
}
//apend random image to station card
// function updateProfile(profile) {
//   avatar.src = profile.results[0].picture.large;
// }
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
