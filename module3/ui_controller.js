
export default class UIController {
    constructor () {    
    }
    
    getMask(){
        this.input= document.getElementById('inputmask');
        this.maskInput = new MaskInput(this.input, {
            mask: '0000-0000-0000-0000',
            alwaysShowMask: true,
            onChange: this.onChange.bind(this),
            maskChar: '_',
          });
          console.log(this.maskInput);
    }
    
    onChange(e){
        // 2 — for example        
        if (parseInt(e.target.value[12],  10) > 2) {
            this.setState({
                mask: '0000-0000-0000-0000'
            });
        } else {
            this.setState({
                mask: '0000-0000-0000-0000'
            });
        }
    }
    getCardName() {
        
        return fetch(`https://api.bincodes.com/cc/?format=json&api_key=d96ca493f5be297f8c304a87edcdf6a8&cc=${this.card_name}`)
            .then(resolve => {
                if(resolve.status === 200) {
                    return resolve.json();
                } else {
                    throw new Error('error ip');
                }
            })
            .catch(reject => console.log('error ip: ', reject));
};
//getMay();

}
