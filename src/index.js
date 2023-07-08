
import FetchCat from "./fetch";

// import markup from './templates/markupCat.hbs'

const dropDownEl = document.querySelector(".breed-select")

const arrCats = []
const allCatsURL = "https://api.thecatapi.com/v1/breeds"
const catArr = new FetchCat(allCatsURL)
               
catArr.fetchCats(allCatsURL)
    .then(data => {
    data.forEach(el => {
        arrCats.push({ id: el.id, name: el.name })
    })
    })

console.log(arrCats); 
// console.log(markup(arrCats))



// markup(catArr, dropDownEl)

// function markup(whatAppend, where) {
//     const createHTML = markup(whatAppend)
//     where.insertAdjacentHTML("beforeEnd", createHTML)
// }




// dropDownEl.addEventListener("click", onSelectHandle)
// function onSelectHandle(event) { 
//     console.dir(event.target);
//     event.target.value = "1234"
    
// }

            // const BASE_URL = `https://api.thecatapi.com/v1/images/search?breed_ids=${breed.id}`
            // const ENDPOINT = `${breed_ids}`
    // constructor(page, searchQuery) {
    //     this.page = page;
    //     this.searchQuery = searchQuery;
    // }
