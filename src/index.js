
import FetchCat from "./fetch";

//  import markup from './templates/markupCat.hbs'

const dropDownEl = document.querySelector(".breed-select")



const allCatsURL = "https://api.thecatapi.com/v1/breeds"
const catArr = new FetchCat(allCatsURL)
               
catArr.fetchCats(allCatsURL)
    .then(data => {
       
        const mark = data.map(el => {
        //    console.log(el);
    return `<option value=${el.id}>${el.name}</option>`
        }).join("")
dropDownEl.insertAdjacentHTML("beforeEnd", mark)
        
    })


dropDownEl.addEventListener("change", handleDataCat)

// console.log(dropDownEl);
function handleDataCat(event) {
    console.dir(event.target.value)

}

