const router = require('express').Router();
const eventController = require('../controllers/eventController');
const e = require('express');
const { Owner, Dog, Event, Comment } = require('../../models');
const withAuth = require('../../utils/auth');
// API dependencies
const SerpApi = require('google-search-results-nodejs');
const axios = require("axios")

// Dotenv for API keys
require('dotenv').config();

// There are view routes prepended by [rootURL].com/

router.get('/', async (req, res) => {
    eventController.getAll(req, res)
    .then(events => {
        plainEvents = events.map(event => event.get({ plain: true }));

        // API function to add object to handlebars
        geocode = function (zip) {
            // const zipformat = JSON.parse(zip)
            console.log('Geocoding with zip:', zip);

            const formattedCoords = '@'

        
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
                console.log('Axios response:', response)
        
                let lat = JSON.stringify(response.data.results[0].geometry.location.lat)
                let long = JSON.stringify(response.data.results[0].geometry.location.lng)
        
                let result = formattedCoords.concat(lat, ", ", long, ",14z")
        
                
        
                const search = new SerpApi.GoogleSearch(process.env.QUERY_KEY);
        
                const params = {
                engine: "google_maps",
                type: "search",
                google_domain: "google.com",
                q: "Park",
                hl: "en",
                ll: result
                };
            
                const callback = function(data) {
                        // console.log(data);
                        // res.json(data)
                    console.log('Callback called with data:', data);

                    res.status(200).render('homepage', {
                        events: plainEvents,
                        logged_in: req.session.logged_in,
                        user_id: req.session.user_id,
                        suggestions: data.local_results
                    });
                    // Show result as JSON
                }
                search.json(params, callback)
            })
            .catch(err => {
                console.log(err);
                res.render('homepage', {
                    events: [],
                    logged_in: req.session.logged_in,
                    user_id: req.session.user_id,    
                    location_zip: req.session.location_zip
                });
            })
        };
        if (req.session.location_zip) {
            geocode(req.session.location_zip)
        } else {
            geocode(20007)
        }
    })
})        

router.get('/login', (req, res) => {
    //Renders login handlebars template on the login page
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    //Renders signup handlebars template on the signup page
    res.render('signup', {
        logged_in: req.session.logged_in,
        user_id: req.session.user_id
    });
});

router.get('/signup-2', withAuth, (req, res) => {
    //Renders signup handlebars template on the signup page
    res.render('signup-2', {
        logged_in: req.session.logged_in,
        user_id: req.session.user_id
    });
});

router.get('/signup-3', withAuth, async (req, res) => {
    // Send the rendered Handlebars.js template back as the response
    try {
        // Find the user's dog based on the request parameter called dog_id
        const userData = await Owner.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: { model: Dog }
        });
        // res.status(200).json(userData); //For testing only
        const user = userData.get({ plain: true });
        req.session.dog_id = user.dogs[0].id
        //Renders signup handlebars template on the signup page
        res.render('signup-3', {
            ...user,
            logged_in: req.session.logged_in,
            user_id: req.session.user_id
        });
    } catch (err) {
        res.status(500).json(err);
    }
}
);

module.exports = router;