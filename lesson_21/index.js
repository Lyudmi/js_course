import LocationApi from './location_api';
import Dom from './dom';

const my_Api = new LocationApi();
const dom = new Dom();
btn.addEventListener('click', () => {
    
    setTimeout(() => {
        dom.showPreloader();
        my_Api.getMyIp()
                .then(resolve => my_Api.getMyLocation(resolve.ip))
                .then(resolve => dom.setCoordinates(resolve))
                .catch(reject => {
                    console.log('Error:', reject);
});
    }, 200);
})