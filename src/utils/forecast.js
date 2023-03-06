const request = require('request');

const forecast = (latitude, longitute, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1729871f7ca83ee31d9cafd64dc81b24&query='
        + latitude + ',' + longitute + '&units=f';   
    request({
        url,
        json : true  
        }, (error, {body}) => {
            if(error){
                callback('Unable to connect to weather services', undefined);
            }else if(body.error){
                callback('Unable to get weather info for this location', undefined);
            }else{
                console.log(body);
                callback( undefined , body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + 
                    '. It feels like ' + body.current.feelslike + '. Humidity is ' + body.current.humidity + '%.');   
            }
})
}

module.exports = forecast ;
