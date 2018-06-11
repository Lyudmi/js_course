export default class Dom {
constructor(){
    this.div = document.createElement('div');
    this.preload = document.createElement('div');
    this.preload.className = "preloader";
    this.preload.innerHTML = '<div class="b-ico-preloader"></div><div class="spinner"></div>';

    document.body.appendChild(preload);
}
    showPreloader() {  
        setTimeout(() => {
            this.preload.className += ' fade';
            
}, 200);
        
    };

    hidePreloader() {     
    };

    setCoordinates(parametr) {
             this.lng = parametr.longitude; 
             this.lat = parametr.latitude;
             console.log(this.lng, this.lat);
             //this.msg = `Longitude: ${this.lng }, Latitude: ${this.lat}`;
             //document.write(this.msg);
             
             this.div.innerHTML = "<div><span>Longitude: " + this.lng + ",</span><span> Latitude: " + this.lat  + "</span></div>";
             
             document.body.appendChild(this.div);
    };
        
}