//1
// Написать функцию add, которая принимает один аргумент строку 
// из символов эмодзи, и должна вернуть среднее арифметические 
// значение, суммы двух кодов эмодзи 
// (эмодзи-символы состоят из двух unicode кодов).
// Например add('🍔😁') вернёт 56179.5. Если аргумент будет пустой, 
// то его необходимо обработать строку из эмодзи красного сердца и флага украины.


function add( emoji = '❤🇺🇦'){
 
	if( emoji === ''){
		emoji = '❤🇺🇦';
	}
		let sum = 0;
	 //console.log(emoji);
	 for (var i = 0; i < emoji.length; i++){
	 	sum += emoji.charCodeAt(i) ;
	 }
	 let average = sum / (emoji.length/2);
	 
	
	//console.log(average) ;
	return average;
}

//console.log(add());


//2
// Написать функцию clearNumbers, которая принимает 
// один аргумент - массив массивов. 
// Функция должна вернуть этот же массив массивов, 
// но очистив их от не числовых значений.

//var arr = [[3, 2, '999', 6, 6], ['4', 5, 'rrr'], [3, '']];

function clearNumbers(array) {
	let sum = 0;
	
	for (let x = 0; x < array.length; x++) {

		for (let y = array[x].length-1; y >=0 ; y-- ){
		
			if (Object.prototype.toString.call(array[x][y]) !== '[object Number]') {

				//console.log(y + " - "+ array[x][y]);
				 array[x].splice(y,1);
			 }
		}
	}
	
	return array;
}
//console.log(clearNumbers(arr)) 


//3
// Написать функцию revers, 
// которая принимает бесконечное количество аргментов, 
// где каждый и них - строка. Функция должна вернуть 
// массив строк в обратном порядке, где каждая строка - будет задом-наперед, 
// Например: revers('123', '456')вернет ['654', '321']


function revers(rev) {
    var arr = [];
    
    for (var i = 0; i < arguments.length; i++) {
        arr.push(arguments[i].split("").reverse().join(""));
    }
	
    return arr;
}
//var rev = revers('123, 456, 789, asd');
//console.log(rev);


//4
// Написать функцию splitArray которая первым 
// аргументом принимает массив чисел, а вторым 
// количество элементов в подмассивах. 
// Функция должна вернуть массив массивов. 
// Например:  splitArray([1, 4, 5, 6, 2], 2) 
// вернет [[1, 4], [5, 6], [2]]. 
// Если количества элементов недостаточно -
// последний подмассив может содержать меньшее количество элементов.

function splitArray(arr, c)
{
	var newarr = [];

	while(arr.length) {
    newarr.push(arr.splice(0, c));
}
	return newarr;
}

// var fil = splitArray ([1 , 2, 3, 4, 5, 6, 7], 2);
// console.log(fil);














