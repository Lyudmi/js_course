function itsMe(a="Lyudmi"){
	if (a == "")
	{
		a="Lyudmi";
	}
	let str = "'It's me,"  + a + "'";
	//console.log(str);
	return str;

}

itsMe('Kolja');


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



matrixDiff(

[[4, 3], [7, 5]],
[[2, 1], [6, 5]]

);

function matrixDiff(a,b)
{
    var rowsa = a.length, colsa = a[0].length,
        rowsb = b.length, colsb = b[0].length,
        t ;
    if (colsa != rowsb) return false;
    
    for (var k = 0; k < colsb; k++)
     { for (var i = 0; i < rowsa; i++)
        { var t = 0;
          for (var j = 0; j < rowsb; j++)
          {

          	//console.log(b[j][k]);
          	 t += a[i][j]-b[j][k];
          	 
          }
         
        }
     }
     console.log(t);
    return t;
}