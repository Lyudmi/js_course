function itsMe(a="Lyudmi"){
	if (a == "")
	{
		a="Lyudmi";
	}
	let str = "'It's me,"  + a + "'";
	//console.log(str);
	return str;

}

//itsMe('Kolja');


function compare (a , b){
	let n = 0;
	if (typeof a === 'number' && typeof b === 'number'){
		console.log(a,b);

		if(a > b )
		{
			n = `"${a} > ${b}"`;
			//console.log(n);
		}
		else if(a < b )
		{
			n = `"${a} < ${b}"`;
			//console.log(n);

		}
		else if(a == b )
		{
			n = `"${a} = ${b}"`;
			//console.log(n);

		}
		
		//console.log(n);
		
	}
	else {
			n = `"НЕ ЧИСЛО"`;
			//console.log(n);
		}
	return n;
}

//compare("5","5");

function row(a ,b ,c ,d){
	let x = [a,b,c];
	let n;
	if (d == "<"){
			x.sort(function(a, b) {
				  return a - b  ;
				});
			
		    n = x.join(' < ');

	}
		
	if(d ==">"){
			x.sort(function(a, b) {
			  return b -a ;
			});
			n = x.join(' > ');
			
	}


//console.log (n);
return n;

}


//row(3, -4, 5, '<');

function fact(n){
    var result = 1;
    
    while (n--) 
        result *= n + 1
    //console.log (res);
    return result;
}

//fact(4);



// matrixDiff(

// [[2, 3], [4, 5]],

// [[2, 1], [6, 5]],);
 matrixDiff([[2, 3], [4, 5]],[[2, 1], [6]]);

function matrixDiff(a,b)
{
    var rows_a = a.length;
    var cols_a = a[0].length;
    var rows_b = b.length;
    var cols_b = b[0].length;
    var  sum ;
    if (cols_a != rows_b) return NaN;
    
    for (var k = 0; k < cols_b; k++){ 
     	for (var i = 0; i < rows_a; i++){ 
       		sum = 0;
          for (var j = 0; j < rows_b; j++){
          	 sum += Math.abs(a[k][i]-b[j][k]);
          	 
          }
         
        }
     }
     console.log(sum);
    return sum;
}


