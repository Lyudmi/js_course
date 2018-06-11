export default class LocationApi {
    getMyIp() {
        
        return fetch('https://api.ipify.org?format=json')
            .then(resolve => {
                if(resolve.status === 200) {
                    return resolve.json();
                } else {
                    throw new Error('error ip');
                }
            })
            .catch(reject => console.log('error ip: ', reject));
    };
    
    getMyLocation(your_Ip) {
        return fetch('https://freegeoip.net/json/' + your_Ip )
            .then (resolve => {
                if (resolve.status === 200) {
                    return resolve.json();
                }
               throw new Error('error');
            })
            .catch(reject => console.log('Error: ' + reject));
    }
};