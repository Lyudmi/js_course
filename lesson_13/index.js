
function removeKeys1(objOne, arrOne) {

	for (let key in objOne){

 		for (let i in arrOne) {
 	
 			if (key == arrOne[i]) {

				delete objOne[key];
 			}

 		}
	}

 	return objOne;
}

function removeKeys2(obj, arr) {
	let add = {};
	for (let key in obj){

		add[key] = obj[key];
	}

	for (let key in add){

 		for (let i in arr) {
 	
  			if (key == arr[i]) {

  				delete add[key];
  			}

 		}
	}

 	return add;

}



let absDiff = a =>b => Math.abs(a - b);


