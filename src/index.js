
import FetchCat from "./fetch";

// const Handlebars = require("handlebars");
// const template = Handlebars.compile(`{{#each this}}
// <option value={{${el.id}}}>{{${el.name}}}</option>
// {{/each}}`);
// console.log(template());

// import markup from './templates/markupCat.hbs';


const dropDownEl = document.querySelector(".breed-select")



const allCatsURL = "https://api.thecatapi.com/v1/breeds"
const catArr = new FetchCat(allCatsURL)
               
catArr.fetchCats(allCatsURL)
    .then(data => {
       
        const mark = data.map(el => {
    return `<option value=${el.id}>${el.name}</option>`
        }).join("")
        dropDownEl.insertAdjacentHTML("beforeEnd", mark)
    
    })


dropDownEl.addEventListener("change", handleDataCat)
function handleDataCat(event) {
    console.dir(event.target.value)
    catArr.fetchCatByBreed(event.target.value).then(el => {   
        console.log(el[0].breeds[0]);


        const id = event.target.value
        const nameCat = el[0].breeds[0].name
        const picture = el[0].url
        const description = el[0].breeds[0].description
        const wiki = el[0].breeds[0].wikipedia_url
        const temperament = el[0].breeds[0].temperament

        const mimimi = 
 `<img src="${picture}" alt="${id}" width="250px" height="150px">
      <div>
        <h2>${nameCat}</h2>
        <p>${description}</p>
        <h3>Temperament: ${temperament}</h3>
        <a href="${wiki}">${wiki}</a>
</div>`  
        console.log(mimimi);

const mark1 = el.map(el => {
    return mimimi
}).join("")
        
        const card = document.querySelector(".cat-info")

        console.log(card);
        card.insertAdjacentHTML("beforeEnd", mark1)

        })

    
}



