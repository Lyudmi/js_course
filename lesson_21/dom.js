export default class Dom {
    constructor() {
        let loader = document.getElementById('loader');
        let btn = document.getElementById('btn');
        this.div = document.getElementById('div');
    }

    showPreloader () {
        loader.style.display = "block ";
        document.getElementById("btn").style.display = "none";
    }

    hidePreloader () {
        
        loader.style.display = 'none';
        document.getElementById("btn").style.display = "block";
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
        
}