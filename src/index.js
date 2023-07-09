
import { FetchCat } from "./cat-api";
// import SlimSelect from 'slim-select'
// import NiceSelect from "nice-select2";
// import VirtualSelect from 'virtual-select-plugin';
// const Handlebars = require("handlebars");
// const template = Handlebars.compile(`{{#each this}}
// <option value={{${el.id}}}>{{${el.name}}}</option>
// {{/each}}`);
// console.log(template());
// import markup from './templates/markupCat.hbs';
import Notiflix from 'notiflix';
const liba = ""
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
                // console.log(`{label: "${el.name}", value="${el.id}"}`);
                return `{label: "${el.name}", value="${el.id}"}`;
            }).join("")
            // VirtualSelect.init({ ele: 'select', options: [mark], placeholder: 'Select options here'});
            dropDownEl.insertAdjacentHTML("beforeEnd", mark)
            VirtualSelect.init({ ele: dropDownEl });        
          
            const el = document.querySelector('.breed-select')
            el.addEventListener("change", handleDataCat)
     }).catch(el => Notiflix.Notify.info('Cogito ergo sum'))


// new VirtualSelect(dropDownEl);
// var instancce = NiceSelect.bind(document.querySelector(".breed-select")).update()
const ONE_CAT_BASE_URL = `https://api.thecatapi.com/v1/images/search?breed_ids=`

dropDownEl.addEventListener('change', function() {
  console.log("this value:", this.value);
});


document.querySelector('.breed-select').addEventListener("change", handleDataCat)
function handleDataCat(event) {
    console.log(this.value);
    console.log(123);
    console.dir(event.target.value)
    console.dir(event.currentTarget)

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
        .catch(el => Notiflix.Notify.info('Cogito ergo sum'))
}


