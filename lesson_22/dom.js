export default class Dom {
    constructor() {
        this.loader = document.getElementById('loader');
        this.btn = document.getElementById('btn');
        this.div = document.getElementById('div');
    }

    showPreloader () {
        this.loader.style.display = "block ";
        document.getElementById("btn").style.display = "none";
        document.getElementById("div").style.display = "none";
    }

    hidePreloader () {
        
        this.loader.style.display = 'none';
        document.getElementById("btn").style.display = "block";
        document.getElementById("div").style.display = "block";
        
}


    setCoordinates(parametr) {
             this.lng = parametr.longitude; 
             this.lat = parametr.latitude;
             console.log(this.lng, this.lat);
             //this.msg = `Longitude: ${this.lng }, Latitude: ${this.lat}`;
             //document.write(this.msg);
             
             this.div.innerHTML = "<div><span>Longitude: " + this.lng + ",</span><span> Latitude: " + this.lat  + "</span></div>";
             
             //document.body.appendChild(this.div);
    };
    setWeather(city) {
        this.cyty = city.city_name;
        
};
        
}