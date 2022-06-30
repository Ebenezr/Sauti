document.addEventListener("DOMContentLoaded", init);

function init(){
	fetchData()
}

const fetchData = (station = "Classic 105") => {
	
fetch(`https://at1.api.radio-browser.info/json/stations/byname/${station}`)
.then(res => res.json())
.then(data => data.forEach(item => renderStation(item)))
.catch(err => console.error(err));

}

const renderStation = (search) => {
  const radioUrl = search.url;
  const stationName = search.name;
  const country = search.country;
  const format = search.codec;
  console.log(stationName, country, format)
}
