export default class WeatherApi {
    constructor () {
        this.my_api_key = '6dd89f65a86b21f15123b05abd8a3cc4';
    }
    
    getOpenWeather(city) {
       // console.log(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.my_api_key}`);
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.my_api_key}`)
            .then(resolve => {
                if(resolve.status === 200) {
                    return resolve.json();
                } else {
                    throw new Error('error');
                }
            })
    }

    setOpenWeather(data) {
        console.log(data);
        // this.kTemp = data.main.temp;
        // console.log(this.kTemp);
        // this.country = data.sys.country;
        // this.city = data.name;
        // this.weatherDescr = data.weather[0].description;
        // this.windSpeed = data.wind.speed;
        // this.swapTemp = true;

        // this.tempC = (this.kTemp-273).toFixed(1);
       
        // console.log(this.tempC);
        
    }
}