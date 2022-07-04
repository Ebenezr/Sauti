const search = () =>{
    let searchForm =document.querySelector('form');

    searchForm.addEventListener('submit', (event) =>{
        event.preventDefault();

        const input = document.querySelector('input.search')

        fetch(`https://at1.api.radio-browser.info/json/stations/byname/${input.value}`)
        .then((resp) => resp.json())
        .then(data => {
            console.log(data);
            // console.log(data[0].name);
            // console.log(data[0].country);
            // console.log(data[0].votes);
            let title = document.querySelector('.categoryTitle')
            title.innerText = 'Search Results';
            let buttons = document.querySelector('.categoryButtons')
            // buttons.remove();
            let results = document.querySelector('.categoryWrapper');
            results.innerHTML = " ";
            console.log(results);

            for (const station in data) {
                // if (Object.hasOwnProperty.call(object, sta)) {
                //     const element = object[key];
                    
                // }
                console.log(data.name)
            }

            // let radioTitle = document.querySelector('.radioTitle');
            // let country = document.querySelector('.country');
            // let rate = document.querySelector('.rate');

            // radioTitle.innerText = data.name
            // country.innerText = data.country
            // rate.innerText = data.votes

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
                  results.appendChild(list);
              }
            renderAllStation(input);
        });
    });
}


document.addEventListener('DOMContentLoaded', search)