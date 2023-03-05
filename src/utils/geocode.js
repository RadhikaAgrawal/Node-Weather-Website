const request = require('request');

const geocode = (address, callback) => {
    const url = '' + address + '.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw';
    
    callback(undefined, {
        latitude : 37.8267,
        longitute : -122.4233,
        location :  'San Francisco, United States of America, California'
    })

    // request({
    //     url : url,
    //     json : true
    // }, (error, response) => {
    //     if(error){    
    //         callback('Unable to connect to location services!', undefined);
    //     }else if(response.body.features.length === 0){
    //         callback('Unable to find this location, try another search.', undefined);
    //     }else{
    //         callback(undefined, {
    //             latitude : response.body.features[0].center[1],
    //             longitute : response.body.features[0].center[0],
    //             location : response.body.features[0].place_name
    //         })
    //     }
    // })
}

module.exports = geocode;

