/*--------------new syntax-------------*/

class Human {
  constructor(arg) {
    this.arg = arg;
    //console.log(this.arg);
  }

  sayHello() {
    console.log(`Hello, my name is  ${this.arg.name}, i am ${this.arg.age} years old`);
  }
}

class AlevelStudent extends Human{
	constructor(arg){
		super({ arg });
		this.arg = arg;
	}

	averageMark(){
		this.length = this.arg.marks.reduce((sum, current) => sum + current, 0) / this.arg.marks.length;
		console.log(this.length);

	}
		
					
}

const student = new AlevelStudent({
		 name: 'Ivan',
		 age: 19,
     	 marks: [5, 5, 4, 4],
 });

// let human = new Human( { 
// 	name: 'Donald', 
// 	age: 15 ,
// });

// student.sayHello();
// student.averageMark();


/*--------------new syntax-------------*/





/*-----old syntax-------------*/


 // function Human(arg) {

	// this.name = arg.name;
	// this.age = arg.age;

 // }

 // Human.prototype.sayHello = function (){

 // 	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`);

 // }

// function AlevelStudent(arg) {
// 	Human.apply(this, arguments);
// 	//Human.call(this, name)
//  	this.m = arg.marks;	
//  	// this.n = arg.name;
//  	// this.a = arg.age;		
//  	// console.log(this.m);
//  }

// AlevelStudent.prototype = new Human({});

// AlevelStudent.prototype.averageMark = function(){

//  	this.length = this.m.reduce((sum, current) => sum + current, 0) / this.m.length;
//  	console.log(this.length);
// }


// let student = new AlevelStudent({
// 	name: "Nikolay",
// 	age: 28,
// 	marks: [5, 4, 2, 3, 3, 4],
// });
//console.log(student);
//student.sayHello();
//student.averageMark();

/*-----old syntax-------------*/