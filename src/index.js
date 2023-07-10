
import { FetchCat } from "./cat-api";
import hbs from './templates/markupCat.hbs'
// import VirtualSelectPlugin from 'virtual-select-plugin'
import 'virtual-select-plugin/dist/virtual-select.min.css';
import 'virtual-select-plugin/dist/virtual-select.min.js';

import Notiflix from 'notiflix';
const dropDownEl = document.querySelector(".breed-select")
const spiner = document.querySelector(".loader")
const loadingElement = document.querySelector(".content")
const cardCatEl = document.querySelector(".cat-info");
const bouncerEl = document.querySelector(".bouncer")
bouncerEl.style.display = "none";
cardCatEl.style.display = "none";
spiner.style.display = "none";
let mi;

const catArr = new FetchCat()               
catArr.fetchCats()
    .then(data => {
        bouncerEl.style.display = "block";
        spiner.style.display = "block";
        loadingElement.style.display = "block";
        cardCatEl.classList.add("is-hidden");      
            dropDownEl.insertAdjacentHTML("beforeEnd", hbs(data))
        VirtualSelect.init({
                autoSelectFirstOption: false,
                ele: dropDownEl,
                search: true,
                showSelectedOptionsFirst: false,
                keepValue: false,
                
            })
                //  .onOpen();  
        
       
          
        const el = document.querySelector('.breed-select')
        el.addEventListener("change", handleDataCat)
        loadingElement.style.display = "none";
        spiner.style.display = "none";
        bouncerEl.style.display = "none";
    })
    .catch(el => {
        Notiflix.Notify.failure(el.code)
        Notiflix.Notify.failure(el.stack)
        })


function handleDataCat(event) {
    catArr.fetchCatByBreed(event.target.value)
        .then((el) => {
            spiner.style.display = "block";
            loadingElement.style.display = "block";
            cardCatEl.style.display = "none";
            const id = event.target.value
            if (id === "") {
                cardCatEl.innerHTML = "<H1>Choose the Cat</H1>"
                spiner.style.display = "none";
                loadingElement.style.display = "none";
                cardCatEl.style.display = "block";
                return
            }  
            
            const { name: nameCat, description, wikipedia_url: wiki, temperament } = el[0].breeds[0];
            const picture = el[0].url;
            
        // const nameCat = el[0].breeds[0].name
        // const picture = el[0].url
        // const description = el[0].breeds[0].description
        // const wiki = el[0].breeds[0].wikipedia_url
        // const temperament = el[0].breeds[0].temperament
       const kittyCatMarkup =
            `<img src="${picture}" alt="${id}" width="400px" height="300px">
      <div>
        <h2>${nameCat}</h2>
        <p>${description}</p>
        <p><span style='font-weight: bold'>Temperament: </span>${temperament}</p>
        <a href="${wiki}">${wiki}</a>
</div>`;
            cardCatEl.innerHTML = kittyCatMarkup
            cardCatEl.style.display = "block";
            loadingElement.style.display = "none";
            spiner.style.display = "none";
            // console.log(mi);
            // console.log(mi.typeof());
            Notiflix.Notify.success("Котик завантажився мі-мі-мі")

        })
        .catch(el => {
         Notiflix.Notify.failure(el.code)
          Notiflix.Notify.failure(el.stack)
        })
}


