import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_A0QBC77czTXXzSvyN9Zimoxe9AmubwRr0tlg7oEnDYZrJyNnbnxe9tUN4nNfQjnN";
const ALL_CATS_URL = "https://api.thecatapi.com/v1/breeds";
const ONE_CAT_BASE_URL = `https://api.thecatapi.com/v1/images/search?breed_ids=`;

export class FetchCat {
        // constructor() {}
        fetchCats() {
                return axios.get(ALL_CATS_URL, {

                }).then(res => {
                        return res.data
                })
        }

        fetchCatByBreed(brirdURLId) {
                return axios.get(ONE_CAT_BASE_URL + brirdURLId, {
                })
                        .then(res => {
                                return res.data
                        })
        }
}

