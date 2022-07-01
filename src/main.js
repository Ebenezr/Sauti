document.addEventListener("DOMContentLoaded", () => {
  getStations().then((data) => console.log(data));
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
//funtion to render all the stations on load

async function getStations() {
  const users = await fetch(
    "https://at1.api.radio-browser.info/json/stations/byname/station"
  );
  return users.json();
}
