const arr1 = [1, 13, -3, 0];

/*let sum = arr1.reduce((sum, current) => sum + current, 0);
let average = sum / arr1.length;
let maxArray = Math.max(...arr1);
let minArray = Math.min(...arr1);

console.log(`minArray : ${minArray}`);
console.log(`maxArray: ${maxArray}`);
console.log(`summa array: ${sum}`);
console.log(`average: ${average}`);*/

let sumArray = 0;
let min = 0;
let max = 0;
  for (let i = 0; i < arr1.length; i++) {
	sumArray += arr1[i];
     if (arr1[i] < min) {
    min = arr1[i];
  }
    if (arr1[i] > max) {
    max = arr1[i];
    }
}
let a = sumArray / arr1.length;
console.log(`sum: ${sumArray}`);
console.log(`averenge: ${a}`);
console.log(`min value: ${min}`);
console.log(`max value: ${max}`);

//the second part
// const obj1 = { from: 1, to: 4, value: [4, 5, 12, 7, 5, 4], ignore: [2] };
// let arrValue = obj1['value'];
// let ignore = obj1['ignore'];

// let nextArr = arrValue.filter(function(number) {
//   return number != arrValue[ignore];
// });

// let newMas = nextArr.slice(obj1['from'], obj1['to']);

// console.log(newMas.join(', '));


/*the second part modification*/
const obj1 = { from: 1, to: 4, value: [4, 5, 12, 7, 5, 4], ignore: [2] };
let arrValue = obj1['value'];
let keys = obj1['ignore'];
let nextArr = [];
for(let i = 0; i < arrValue.length; i++){
  if(i >= obj1['from'] && i <= obj1['to']){
      if(keys.includes(i)==false){
        nextArr.push(arrValue[i]);
      }
  }
}
 console.log(nextArr.join(', '));