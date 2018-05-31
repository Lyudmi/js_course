const moment = require ('moment');
const result = moment().format();

const input = document.body.children[0];

input.oninput = function() {
      
    let now = moment(new Date());
    let ends = moment(input.value);
    let days = ends.diff(now, 'days');//let days = ends.diff(now, 'days', true);
    let fixed_day = days.toFixed(2);
    //console.log(fixed_day);

    if(days < 0) {
        
        document.getElementById('result').innerHTML = 'writing correct date';
    }else if(days >=0){
        document.getElementById('result').innerHTML = days;
    }
    else {
        document.getElementById('result').innerHTML = 'date doesnt correct';
    }  
};



