let a = 7.5;
let b = 3;
let operation = "add";

switch (operation) {
	case "add":

	console.log(a + b);
	break;

	case "sub":
	console.log(a - b);
	break;

	case "mult":
	console.log(a * b);
	break;

	case "div":
	 if (b !== 0) {
		console.log(a / b);
		} else {
			console.log("деление на ноль");}
		break;

	case "pow":
	console.log(Math.pow(a, b));
	break;

	default:
	console.log( "Введите корректные данные (add - деление, sub - вычитание, mult - умножение, div - деление, pow - возведение в степень.)" )
}

// function calc(){

// let a = parseFloat(document.getElementById("a").value);
// let b = parseFloat(document.getElementById("b").value);


// let operation = document.getElementById("operation").value;
// let res;
// switch (operation) {
//     case "add":
//       document.getElementById('result').value = a + b;
//       res= document.getElementById('result').value = a + b;
//       console.log(res);
//       break;
//     case "sub":
//        document.getElementById('result').value = a - b;
//        res= document.getElementById('result').value = a - b;
//        console.log(res);
//        break;
//     case "mult":
//        document.getElementById('result').value = a * b;
//        res= document.getElementById('result').value = a * b;
//        console.log(res);
//        break;
//     case "div":
//       if (b !== 0) {
//          document.getElementById('result').value = a / b;
//          res= document.getElementById('result').value = a / b;
//          console.log(res);
//       } else {
//         document.getElementById('result').value = "не делится на ноль";
//         res= document.getElementById('result').value = "не делится на ноль";
//         console.log(res);
//       }
//       break;
//     case "row":
//        document.getElementById('result').value = Math.pow(a,b);
//        res= document.getElementById('result').value = Math.pow(a,b);
//        console.log(res);
//        break;
//     default:
// 	     document.getElementById('result').value = "ups";
// 	     res = document.getElementById('result').value = "ups";
// 	     console.log(res);

//   }
// }
