import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_A0QBC77czTXXzSvyN9Zimoxe9AmubwRr0tlg7oEnDYZrJyNnbnxe9tUN4nNfQjnN";
// console.log(axios.isCancel('something'));

export default class FetchCat {
        constructor(url) {
        this.url = url;
    }
   fetchCats(url) {
            // const arrCats = []
            return axios.get(url, {
            })
                    .then(res => res.data)
                // .then(data => {
                //     data.forEach(el => {
                //         // arrCats.push(`{${el.id}, ${el.name}}`)
                //         arrCats.push({ id: el.id, name: el.name })
                        
                //     })
                // })
        // return arrCats
        }

}

