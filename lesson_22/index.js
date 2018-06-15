import LocationApi from './location_api';
import Dom from './dom';
import WeatherApi from './weather';


const my_Api = new LocationApi();
const dom = new Dom();
const weather = new WeatherApi();
const Weatherbutton = document.getElementById("weatherApi");
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

Weatherbutton.addEventListener("click", () => {
    dom.showPreloader();
    let value = document.getElementById("your_city");
    if(value.value == "") {
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

                .catch(error => console.log(error));
        
    } 
    else { 
       
        weather.getOpenWeather(value.value)
        .then(res => weather.setOpenWeather(res))
        .then(res => dom.hidePreloader())

        .catch(error => console.log(error));
    }
});