// Example of a simple if-else statement in JavaScript
let age = 20;

if (age < 18) {
  console.log("You are a minor.");
} else if (age >= 18 && age < 21) {
  console.log("You are a teenager.");
} else {
  console.log("You are an adult.");
}

//Datatypes
let number_variable = 42; // Number
let number_variable2 = 3.14; // Number
let number_variable3 = Infinity; // Number

let string_variable = "Hello, World!"; // String
let string_variable2 = "JavaScript is fun!"; // String
let string_variable3 = `Template literals are great! ${string_variable}`; // String

let boolean_variable = true; // Boolean
let boolean_variable2 = false; // Boolean

let undefined_variable; // Undefined

let null_variable = null; // Null

let object_variable = { name: "Alice", age: 30, address: "chabahil" }; // Object

let array_variable = [1, 2, 3, 4, 5]; // Array

const a = 5;
const b = 20;
const c = "10";

console.log(a + b + c); // Outputs "2510" due to string concatenation

//functions
function ashmita(a, b) {
  console.log("Hello Ashmita");
  return a + b;
}

const ashmita2 = function (a, b) {
  console.log("Hello Ashmita");
  return a + b;
};

const ashmita3 = (a, b) => {
  console.log("Hello Ashmita");
  return a + b;
};

const ashmitaObject = {
  name: "Ashmita",
  method: function () {
    console.log("Hello from Ashmita's method");
  },
  method2: () => {
    console.log("Hello from Ashmita's arrow method");
  },
};

//switch case
let check = "ashmita";
switch (check) {
  case "ashish":
    console.log("Hello Ashish");
    break;
  case "ashmita":
    console.log("Hello Ashmita");
    break;
  default:
    console.log("Hello World");
}

//loops
//while loop
let i = 0;
while (i < 5) {
  console.log("ashmita");
  i++;
}

do {
  console.log("ashmita do while");
  i++;
} while (i < 5);

//for loop
for (let j = 0; j < 5; j++) {
  console.log("ashmita for loop");
}

const array_variable2 = [10, 20, 30, 40, 50];
let k = 10;
for (let k of array_variable2) {
  console.log(k);
}

let index = 0;
for (let index in array_variable2) {
  console.log(index);
}
