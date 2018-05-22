// the address of our rails backend, saved as a constant value, because we never want to accidently change it
const BASE = 'http://localhost:3000'

let getApartments = function() {
    // the function name getCats is intended to remind you of the restful rails route --> GET '/cats'.
    return fetch(BASE + '/apartments')
        .then((resp) => {
            let json = resp.json()
            console.log(json);
            return json
        })
}

export  {
    getApartments
}

let createApartment= function(apartment) {
    return fetch(BASE + '/apartments', {
        body: JSON.stringify(apartment),  // <- we need to stringify the json for fetch
        headers: {  // <- We specify that we're sending JSON, and expect JSON back
            'Content-Type': 'application/json'
        },
        method: "POST"  // <- Here's our verb, so the correct endpoint is invoked on the server
    })
        .then((resp) => {
            let json = resp.json()

            return json
        })
}
export {
    createApartment
}
