const search = () =>{
    let searchForm =document.querySelector('form');
    console.log(searchForm);

    searchForm.addEventListener('submit', (event) =>{
        event.preventDefault();
    })
}


document.addEventListener('DOMContentLoaded', search)