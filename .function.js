// function login() {
//   return "login successfully";
// }
// console.log(login());

// const multiply = (u = 10, t = 20, a = 30, b = 40) => t * u * b;

// console.log(multiply(6, 7));

// multiply function
// function multiply(a, b, c) {
//   return a * b * c;
// }
// console.log(multiply(6, 7, 2));

//b --> 7
//c --->6
//a --->2
//      1, 2, 3
//multiply(c, a, b);    //parameters
//1, 2, 3                   //positions
//myltiply(7, 6, 2);  //arguments

//     1, 2, 3, 4
// function greeting(name) {
//   return "Hello, " + name;
// }
// console.log(greeting("Mwangi"));

// the function  key word is replaced with a variable declaration syntax / word
// function greeting()  ------->   const greeting()

//the function name is equated to the function parameter
//const greeting = (name)

//the function name variable greeting and the parameter are equated to the return value with an arrow (hence arrow function)
// const greeting =(name) => return "Hello, " + name;

// const greeting = (name) => "Hello, " + name;
// console.log(greeting("Mwangi"));

// function sayHi(name) {
//   return "Hi, " + name;
// }
// console.log(sayHi("Faith"));

// const sayHi = (name) => "Hi, " + name;
// console.log(sayHi("Faith"));

// Functions --> block of code defined and called to perform a specifc task.
// types of functions
    // Named functions
    // Anonymous functions
    // Call back functions
    // Arrow function

    // let name = "Mwangi";
// let age = 20;
// console.log(name, age);

// let x = 5;
// let y = 10;
// let z = 15;

// console.log(`${x}+${y}+${z}=${x + y + z}`);
// 4 ** 5;
//console.log(4 ** 5);
//0-31=E
// 31 -40=D;
// 41-50-=C;
// 51-60=B;
// 61-80=A;
// 81-100=A+
// otherwise: invalid input

// let mark = 80;

// if (mark >= 0 && mark <= 30) {
//   console.log("your grade is : E");
// } else if (mark >= 31 && mark <= 40) {
//   console.log("your grade is: D");
// } else if (mark >= 41 && mark <= 50) {
//   console.log("your grade is: C");
// } else if (mark >= 51 && mark <= 60) {
//   console.log("your grade is : B");
// } else if (mark >= 61 && mark <= 80) {
//   console.log("your grade is: A");
// } else if (mark >= 81 && mark <= 100) {
//   console.log("your grade is: A+");
// } else {
//   console.log("invalid input");
// }

// normal function
// function miaka(age) {
//   console.log(`your age is: ${age}`);
// }
// miaka(20);

// // arrow function
// const miaka = (name, age) => console.log(`${name} your age is : ${age}`);
// miaka("Brian", 20);

// const cars = [
//   "mazdaCX5",
//   "audi",
//   "GT3",
//   "mclarren",
//   "cardilac",
//   "fordranger",
//   "LexusLC55",
//   "lamboghini",
// ];
// const fruits = ["apple", "mango", "orange", "banana"];
// const persons = [
//   {
//     name: "john",
//     wife: "faith",
//     sister: "Blessed",
//     boss: "Brian",
//     driver: "Kelvin",
//     age: 20,
//   },

//   {
//     name: "Brian",
//     wife: "Cate",
//     sister: "Joy",
//     boss: "Ahmed",
//     driver: "Job",
//     age: 15,
//   },
// ];
// fruits.forEach((fruit, index) => console.log(`${index} : ${fruit}`));

// persons.map((person) =>
//   console.log(person.name, "your wife is :", person.wife)
// );

// persons.filter(function (person) {
//   if (person.age >= 18) {
//     console.log(person.name, ": you can drink");
//   } else {
//     console.log(person.name, ": you are underage");
//   }
// });

// cars.forEach((car) => console.log(`${car}`));

// codewars

