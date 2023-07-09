import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_A0QBC77czTXXzSvyN9Zimoxe9AmubwRr0tlg7oEnDYZrJyNnbnxe9tUN4nNfQjnN";
// console.log(axios.isCancel('something'));


export class FetchCat {
        constructor(url) {
        this.url = url;
    }
   fetchCats() {
            // const arrCats = []
           const ALL_CATS_URL = "https://api.thecatapi.com/v1/breeds"
            return axios.get(ALL_CATS_URL, {
            })
                    .then(res => {
                            return res.data
                    })
                // .then(data => {
                //     data.forEach(el => {
                //         arrCats.push({ id: el.id, name: el.name })
                //     })
                // })
        // return arrCats
}

        fetchCatByBreed(brirdURLId) {
            const ONE_CAT_BASE_URL = `https://api.thecatapi.com/v1/images/search?breed_ids=`
            return axios.get(ONE_CAT_BASE_URL + brirdURLId, {
            })
                    .then(res => {
                            return res.data
                    })
                // .then(data => {
                //     data.forEach(el => {
                //         arrCats.push({ id: el.id, name: el.name })
                //     })
                // })
        // return arrCats
        }
}

