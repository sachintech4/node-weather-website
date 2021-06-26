const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=fe38ec92b43610d1bbe7c5d57c582309&query=' + latitude + ',' + longitude + ''

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the network', undefined)
        } else if (body.error) {
            callback('Unable to find the location', undefined)
        }
        else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees outside but is feels like ${body.current.feelslike} degrees. The humidity is ${body.current.humidity}%.`)
        }
    })
}

module.exports = forecast