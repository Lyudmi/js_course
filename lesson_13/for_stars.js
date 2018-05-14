function join() {
 var str = '';
	 for (var i = 0; i < arguments.length; i++) {

		 if (typeof(arguments[i]) === "object"){

		 	str += i+',';
		 }

 	}

 str = str.substring(0, str.length - 1);

 var arrs = str.split(',')
 var index0 = arrs[0];

 	for (var y = 1; y < arrs.length; y++) {

 		var index1 = arrs[y];

 		for (var fkay in arguments[index0]) {

 			for (var kay in arguments[index1]) {

 				var ar2 = customFilter(arguments[index0], kay );

 				if(ar2 == false){
 				arguments[index0][kay] = arguments[index1][kay];
 				}
 				else {

 					if (fkay == kay) {

 						if (Array.isArray(arguments[index0][fkay]) === true) {
 							[].push.apply(arguments[index0][fkay], arguments[index1][kay]);

 						}
 					else if (typeof(arguments[index0][fkay]) === "object" && typeof(arguments[index1][kay]) !== "object") {
 					arguments[index0][fkay] = arguments[index1][kay];
 					}

 					else if (typeof(arguments[index0][fkay]) === "string") {
					 	arguments[index0][fkay] += arguments[index1][kay];
					 }

 					else if (typeof(arguments[index0][fkay]) === "number") {
 						arguments[index0][fkay] = arguments[index0][fkay] + arguments[index1][kay];
 					}
 					}
 				}
 			}
 		}
 	}
 	return arguments[index0];
 }

 function customFilter(arrray, value) {
	 var flag =false;
		 for (var kay in arrray) {
			 if(kay === value){
			 	flag = true;
			 }
		 }
	 return flag;
 }