//api to be used

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '99b1489bc1mshe4869d13ccb8365p164db9jsn74e1339350c1',
		'X-RapidAPI-Host': '30-000-radio-stations-and-music-charts.p.rapidapi.com'
	}
};

fetch('https://30-000-radio-stations-and-music-charts.p.rapidapi.com/rapidapi?id=%7Bid%7D', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


//its paid haha lets find another