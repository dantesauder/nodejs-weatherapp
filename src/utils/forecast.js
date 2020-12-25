const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=8ab44b5182a508b1f53c26b789bfa394&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true}, (error, {body} = {}) => {
        if(error) {
            callback('Unable to connect to weather services', undefined)
        } else if (body.error) {
            callback('Unable to determine the weather for location entered. Enter another location.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. The wind speed is currently ' + body.current.wind_speed + ' km/h.')
            
        }

    })
}
module.exports = forecast