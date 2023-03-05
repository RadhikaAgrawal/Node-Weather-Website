const path = require('path');
const express = require('express');
const hbs = require('hbs');
const { resolveSoa } = require('dns');
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast');

const app = express();
const viewsPath = path.join('__dirname', '../templates/views')
const partialsPath = path.join('__dirname', '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(path.join(__dirname, '../public')))

app.get('', (req, res) => {
    res.render('index',{
        title : 'Weather',
        name : 'Radhika'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title : 'About',
        name : 'Radhika'
    });
})

app.get('/help', (req, res) => {
    res.render('about', {
        title : 'Help',
        helpText : 'This is help text',
        name : 'Radhika'
    });
})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error : 'Please provide an address'
        })
    }
    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if(error){
            return res.send({
                error : error
            })
        }
        forecast(latitude , longitude, (error, forecastData) => {
            if(error){
                return res.send({
                    error : error
                })
            }
            res.send({
                forecast : forecastData,
                location : location,
                address : req.query.address
            });
               
        })    
    })  
})

app.get('/products', (req, res) => {
    
    console.log(req.query);
    res.send({
        product : []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title : '404',
        name : 'Radhika',
        errorMsg : 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title : '404',
        name : 'Radhika',
        errorMsg : 'Page not found'
    })
})


app.listen(3000, () => {
    console.log('Server up');
});

