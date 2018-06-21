export default class WeatherApi {
    constructor () {
        this.my_api_key = '6dd89f65a86b21f15123b05abd8a3cc4';
        this.city = document.getElementById("city");
        this.country = document.getElementById("country");
		this.clouds = document.getElementById("clouds");
        this.temp = document.getElementById("temp");
        this.cache = {};
		
    }
    
    getOpenWeather(city) {
        if(this.cache[city]){
            if(this.cache[city] && Data.now() - this.cache[city].timestamp< 1000 * 60 * 10){
                return Proomise.resolve(this.cache[city].data);
    
            }else {
                this.cache[city] = null;
            }

        }
       
       // console.log(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.my_api_key}`);
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.my_api_key}`)
            .then(resolve => {
                if(resolve.status === 200) {
                    return resolve.json();
                } else {
                    throw new Error('error');
                }
            })
            .then((data) => {
                
                localStorage.setItem('cache', JSON.stringify({
                //this.cache[city] = {
                    timestamp: Data.now(),
                    data,
                }));
                console.log(this.cache);
                return data;
            })
    }

    setOpenWeather(data) {
        //console.log(data);
        this.kTemp = data.main.temp;
        //console.log(this.kTemp);
        this.city.innerHTML = data.name;
        this.country.innerHTML = data.sys.country;
        this.clouds.innerHTML = data.weather[0].description;
        this.temp.innerHTML = (this.kTemp-273.15).toFixed(0);
       
        //console.log(this.tempC);
        
    }
}