
import {FetchCat} from "./cat-api";

// const Handlebars = require("handlebars");
// const template = Handlebars.compile(`{{#each this}}
// <option value={{${el.id}}}>{{${el.name}}}</option>
// {{/each}}`);
// console.log(template());
// import markup from './templates/markupCat.hbs';
const dropDownEl = document.querySelector(".breed-select")
const loaderEl = document.querySelector(".loader")
const errorEl = document.querySelector(".error")
const cardCatEl = document.querySelector(".cat-info");


const ALL_CATS_URL = "https://api.thecatapi.com/v1/breeds"
const catArr = new FetchCat(ALL_CATS_URL)
               
catArr.fetchCats(ALL_CATS_URL)
        .then(data => {
       cardCatEl.classList.add("is-hidden");
        const mark = data.map(el => {
    return `<option value=${el.id}>${el.name}</option>`
        }).join("")
        dropDownEl.insertAdjacentHTML("beforeEnd", mark)
    
    }).catch(console.log)


const ONE_CAT_BASE_URL = `https://api.thecatapi.com/v1/images/search?breed_ids=`

dropDownEl.addEventListener("change", handleDataCat)
function handleDataCat(event) {
    console.dir(event.target.value)
    catArr.fetchCatByBreed(ONE_CAT_BASE_URL + event.target.value).then(el => {
        cardCatEl.classList.remove("is-hidden");
        
        const id = event.target.value
        const nameCat = el[0].breeds[0].name
        const picture = el[0].url
        const description = el[0].breeds[0].description
        const wiki = el[0].breeds[0].wikipedia_url
        const temperament = el[0].breeds[0].temperament

        const kittyCatMarkup =
            `<img src="${picture}" alt="${id}" width="400px" height="300px">
      <div>
        <h2>${nameCat}</h2>
        <p>${description}</p>
        <p><span style='font-weight: bold'>Temperament: </span>${temperament}</p>
        <a href="${wiki}">${wiki}</a>
</div>`;        
        // const mark1 = el.map(el => { //return kittyCatMarkup // })        
        loaderEl.classList.add("is-hidden");
        errorEl.classList.add("is-hidden");
        cardCatEl.innerHTML = kittyCatMarkup
        // cardCatEl.insertAdjacentHTML("beforeEnd", mark1)
    })
        .catch(console.log)
}


