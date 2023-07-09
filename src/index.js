
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
Notiflix.Notify.success('Loading data, please wait...');


const dropDownEl = document.querySelector(".breed-select")

const loaderEl = document.querySelector(".willbeloading")
const errorEl = document.querySelector(".error")
const cardCatEl = document.querySelector(".cat-info");
cardCatEl.classList.add("is-hidden")
errorEl.classList.add("is-hidden");


const catArr = new FetchCat()               
catArr.fetchCats()
    .then(data => {
        cardCatEl.classList.add("is-hidden");      
            loaderEl.classList.add("loader");
            const mark = data.map(el => {
                return `<option value=${el.id}>${el.name}</option>`
                // console.log(`{label: "${el.name}", value="${el.id}"}`);
                return `{label: "${el.name}", value="${el.id}"}`;
            }).join("")
            // VirtualSelect.init({ ele: 'select', options: [mark], placeholder: 'Select options here'});
            dropDownEl.insertAdjacentHTML("beforeEnd", mark)
            VirtualSelect.init({
                ele: dropDownEl,
                search: true,
                silentInitialValueSet: false,
                placeholder: "Select an option",
                selectedOption: null
            });        
          
        const el = document.querySelector('.breed-select')
        el.addEventListener("change", handleDataCat)
         loaderEl.classList.remove("loader");
        cardCatEl.classList.remove("is-hidden");
        }).catch(el => {
            Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!')
            errorEl.classList.remove("is-hidden");
            cardCatEl.classList.add("is-hidden")
        })


// new VirtualSelect(dropDownEl);
// var instancce = NiceSelect.bind(document.querySelector(".breed-select")).update()

// dropDownEl.addEventListener('change', function() {
//   console.log("this value:", this.value);
// });


// document.querySelector('.breed-select').addEventListener("change", handleDataCat)
function handleDataCat(event) {
    cardCatEl.classList.remove("is-hidden");
     errorEl.classList.add("is-hidden");
    loaderEl.classList.add("loader");
    catArr.fetchCatByBreed(event.target.value).then(el => {
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
loaderEl.classList.remove("loader");        
// const mark1 = el.map(el => { //return kittyCatMarkup // })        
        // loaderEl.classList.add("is-hidden");
        // errorEl.classList.add("is-hidden");
        cardCatEl.innerHTML = kittyCatMarkup
        // cardCatEl.insertAdjacentHTML("beforeEnd", mark1)
        cardCatEl.classList.remove("is-hidden");
      
    })
        .catch(el => {
           Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!')
            errorEl.classList.remove("is-hidden");
            cardCatEl.classList.add("is-hidden")
        })
}


