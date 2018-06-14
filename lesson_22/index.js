import LocationApi from './location_api';
import Dom from './dom';
import WeatherApi from './weather';


const my_Api = new LocationApi();
const dom = new Dom();
const weather = new WeatherApi();
weather.setOpenWeather();

btn.addEventListener('click', () => {
    
    setTimeout(() => {
        dom.showPreloader();
        my_Api.getMyIp()
                .then(resolve => my_Api.getMyLocation(resolve.ip))
                .then(resolve => {
                    dom.setCoordinates(resolve);
                    //console.log(resolve.city);
                    // console.log(weather.getOpenWeather(resolve.city));
                    return weather.getOpenWeather(resolve.city);
                })
                .then(resolve => {
                    //console.log(resolve);
                    weather.setOpenWeather(resolve);
                    dom.hidePreloader();
})
                // .then(resolved => dom.hidePreloader())
                .catch(reject => {
                    console.log('Error:', reject);
});
    }, 400);
})

