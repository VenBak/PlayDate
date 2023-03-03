require('dotenv').config()

// Links to get API key
// https://serpapi.com/integrations/node
// https://rapidapi.com/googlecloud/api/google-maps-geocoding/

// Make sure to have .env file within same folder with your keys under this notation:
// GEO_KEY="1217d0bcebmshcbd8------------------------------"
// QUERY_KEY="68f67282a5a40f91652e0--------------------------"

// Run the file in your terminal node script.js
// Look at the response

const SerpApi = require('google-search-results-nodejs');
const axios = require("axios")

// coords format: "@40.7455096,-74.0083012,14z"

// Zip test trial
var zip = 20007

// String which will be passed as the input into the query function
const formattedCoords = '@'

function query(coords) {

    const search = new SerpApi.GoogleSearch(process.env.QUERY_KEY);

    const params = {
        engine: "google_maps",
        type: "search",
        google_domain: "google.com",
        q: "Park",
        hl: "en",
        ll: coords
    };

    const callback = function(data) {
        console.log(data);
    };

    // Show result as JSON
    search.json(params, callback);
}


function Geocoder(zip) {
    const options = {
    method: 'GET',
    url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
    params: {address: `${zip}`, language: 'en'},
    headers: {
        'X-RapidAPI-Key': process.env.GEO_KEY,
        'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com'
    }
    };

    axios.request(options).then(function (response) {

        let lat = JSON.stringify(response.data.results[0].geometry.location.lat)
        let long = JSON.stringify(response.data.results[0].geometry.location.lng)

        // formattedCoords.concat(lat, ', ', long)

        console.log(lat)
        console.log(long)


        let result = formattedCoords.concat(lat, ", ", long, ",14z")
        console.log(result)
        
        query(result)

    }).catch(function (error) {
        console.error(error);
    });
}

Geocoder(zip)

