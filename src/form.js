const search = () =>{
    let searchForm =document.querySelector('form');

    searchForm.addEventListener('submit', (event) =>{
        event.preventDefault();

        const input = document.querySelector('input.search')
        console.log(input.value)

        fetch(`https://at1.api.radio-browser.info/json/stations/byname/${input.value}`)
        .then((resp) => resp.json())
        .then(data => {
            console.log(data);
        });
    });
}


document.addEventListener('DOMContentLoaded', search)