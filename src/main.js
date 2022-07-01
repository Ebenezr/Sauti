document.addEventListener("DOMContentLoaded", () => {
  getStations().then((data) => {
    console.log(data);
    renderAllStation(data);
    // for (let data of data.name) {
    //   console.log(data);
    // }
    data.forEach((data) => {
      console.log(data.name);
    });
  });
});

// function init() {
//   fetchData();

const fetchData = (station = "Classic 105") => {
  fetch(`https://at1.api.radio-browser.info/json/stations/byname/${station}`)
    .then((res) => res.json())
    .then((data) => data.forEach((item) => renderStation(item)))
    .catch((err) => console.error(err));
};

const renderStation = (search) => {
  const radioUrl = search.url;
  const stationName = search.name;
  const country = search.country;
  const countryCode = search.countrycode;
  const format = search.codec;
  const votes = search.votes;
  const clickcount = seacrh.clickcount;
  console.log(radioUrl);
};

const stationsWrapper = document.getElementById("stations");

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
//funtion to render all the stations on load

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
  });
}
async function getStations() {
  const users = await fetch(
    "https://at1.api.radio-browser.info/json/stations/byname/station"
  );
  return users.json();
}
