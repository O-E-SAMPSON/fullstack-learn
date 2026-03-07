//LEARNING FULL STACK WITH SMARTHUB TECH
// Data Types in JavaScript
// Primitive Data Types
//1> String: Stringin javaScript are just text in a quotes
// Examples
//a. " " double quote eg "name"
//b. '  ' single quote eg '9'
//c. `  `  backslice eg `true`

//2> Numbers
//a. Int numbers
//b. float (decimal) numbers.   Is float the same with decimal?

//3> Booleans: which are true or false.

//4> null: means empty, intentionally empty

//5> undefine: This means the either a value is not present or the data type is not availabe


// non Primitive data types
// 1. objects
// 2. arrays
// 3. date

// Variables
// we can declare variable using let or const
// 1. let saves our data temporaraly and can be changed or redeclared

/*let lastName = "sam";
lastName = "semeon";
console.log(lastName);
*/

/*let age = 55;
age = 5;
console.log(age);
*/


/*let isfemale = false;
isfemale = true;
console.log(isfemale);
*/


// 2. const stores our data permenantly and can not be changed or redeclared

/*const lastName = "sam";

console.log(lastName);

const age = 55;

Console.log(age);

const isfemale = false;

console.log(isfemale);
*/

// String Methods
/*
let firstName = "david";
console.log(firstName.toUpperCase());
console.log(firstName.toLowercase());

// How to get Lenght of A Variable
console.log(firstName.length);
*/

//naming convention in JavaScript
//1>  pascal case: FirstName
//2> canel case: firstName
//3> snake case: first_name
//4> upper case: FIRSTNAME
//5> lower case: firstname

/*
const firstName = "edision";
const lastName = "sime";

// Concatenation in javascript
//Method Using backslice
const fullName = ` Hello I am ${firstName}, ${lastName}`;
console.log(fullName);

//Method Using +
const fullName = "Hello I am "+ firstName + " " + lastName;
console.log(fullName);
*/

// Numbers
//Int
//float (decimal)
/*
const number = 2;
const decimal = 2.267747;
console.log(typeof (decimal));
console.log(typeof(parseFloat(decimal)));
console.log(typeof(number));
console.log(typeof(parseInt(number)));
console.log(typeof(decimal.toFixed(1)));
console.log(typeof(toString(number)));
*/

//Methods of Number
//parseFloat(): parses the integer value from the string.
//toFixed(): Formats a number with a specific number of digits to the right of the decimal.
//toString(): Returns the string representation of the numbers value.
// BODMAS: Bracket, Order, Division, Multiplication, Addition, Subtraction

//Work: Calculate area of a Circle
//area = length * width

/*const lenght = 20;
const width = 10;
const area = length * width
console.log(`The Area of a circle is ${area}`);
*/

//Conditional Statement
//1> if statement
//2> else if statement
//3> else
//4> switch

//Conditional Operator
// ==	Equal	x == y
// !=	Not Equal	x != y
// ===	Strict equality (equal value and equal type)	x === y
// !==	Strict inequality (not equal value or not equal type)	x !== y
// >	Greater than	x > y
// <	Less than	x < y<
// >=	Greater than or Equal to	x >= y
// <=	Less than or Equal to	x <= y

//create a program that will check if someone is an adult or a teenager.
/*
let Age = "15";
const age = parseInt(Age);
if (age === 18) {
console.log(`You are ${age} years and you are an adult`);
} else if (age >= 18) {
console.log(`Your ${age} years, you are not an adult`);
} else {
console.log(`You do not have any age`);
} */

// Use this to correct my Assignment
/*
let score = "69.8";
const scores = parseFloat(score);
console.log(typeof (scores.toFixed(0)));
console.log(scores);
*/

//Switch Statement
// Key: expression
// Case: conditions
// Break: It means once that line of code is executed stop the code.
// Default:

// Write a program that indicates days of the week. Monday to Sunday.
//let days = "holiday";
// QUESTION TO ASK: WHY THE AGE ON THE SWITCH CODE?

/*switch (days) {
    case "Monday": console.log("This is Monday")
        break;
    case "Tuesday": console.log("This is Tuesday")
        break;
    case "Wednesday": console.log("This is Wenesday")
        break;
    case "Thursday": console.log("This is Thursday")
        break;
    case "Friday": console.log("This is Friday")
        break;
    case "Saturday": console.log("This is Saturday")
        break;
    case "Sunday": console.log("This is Sunday")
        break;
    default: console.log("Non of the day is found")
        break;
} */

// Loops In Javascript
// 1> for loop
// 2> while loop


// for loop in Javascript
// for loop method
// for (initialization, condition, increment)
// increment ++, +2
// decrement --

// write a program that counts 1 - 10
/*
for (let count = 1; count <10; count++){
    console.log(count)
}
*/


//write a program that print Hello word ten times
/*
for (let print = 1; print <= 10; print++) {
    console.log(`Hello World ${print}`)
}
*/

// While Loop in Javascript
// while loop Method

/*
let count = 1;
while(count <= 10){
    console.log(count)
    count++
}
*/

// Scope In Javascript
// 1> Local Variable
// 2> Global Variable

// Arrays In Javascript
// Arrays are are collection of data

/*
const fruits = ["mango", "orange", "apple", "grape"];
console.log(fruits.length);
console.log(fruits[2]);
*/

// Class Work
/*
const names = ["Marry", "John", "James", "Philip", "Mathew"];
console.log(names.length);
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);

//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//console.log(numbers.length);
*/

/*
const mixArray = ["strings", 1, true, ['text', 2], {name: 'bob'}];
console.log(mixArray[0]);
console.log(mixArray[3][1]);
console.log(mixArray[4].name);
*/

// Array Method
/*
const fruit = ["mango", "orange", "apple", "grape"];

// push(): It is used to add one or more elements to  the end of an Array.
fruit.push("banana");
console.log(fruit);

// pop(): This is used to Remove the last element from an Array and returns that element.
fruit.pop();
console.log(fruit);

// shift(): This is used to Remove the first element from an Array and returns that element.
fruit.shift();
console.log(fruit);

// Unshift(): This is used to Insert new elements at the start of an array, and returns the new length of the array.
fruit.unshift("berry");
console.log(fruit);
console.log(fruit.length);

// Index of
console.log(fruit.indexOf("berry"));

// Join()
console.log(fruit.join("-"));

//Sort()
console.log(fruit.sort);

//Reverse()
console.log(fruit.reverse());

// concate
console.log(fruit.concat(mixArray));
*/

//Assignment
// Remove the unneeded numbers and Add the missing numbers.
/*
const numbers = [, 2, 3, 4, 5, 7, 9, 10, 50];

// Remove the empty space
numbers.shift();
// Remove the last element 50.
numbers.pop();
// Add the missing Numbers
numbers.unshift(1, 6, 8);

//Sort()
console.log(numbers.sort());
*/

// Object In Javascript
/*
object - The JavaScript object is a non - primitive data type
that is used to store data as key - value pairs.
The key - value pairs are often referred as properties.
A key in a key - value pair, also called a "property name",
is a string and value can be anything.If a property's value
is a function, the property is known as a method.

 Objects are created using curly braces and each property
 is separated by a comma. Each property is written as
 property name followed by colon (:) followed by property value.
 The key: value pairs are not stored in the specific order
in the object. So an object is an unordered
collection of properties written as key: value pairs.
*/

/*
NOTE: THERE IS OBJECT IN THIS ARRAY
const mixArray = ["strings", 1, true, ['text', 2], {name: 'bob'}];
console.log(mixArray[0]);
console.log(mixArray[3][1]);
console.log(mixArray[4].name);
*/
/*
NOTE: THERE IS ARRAY IN THIS OBJECT
const students = {
    name: "Edison",
    age: 9,
    isstudent: true,
    subject: ['maths', 'Eng', 'Chem'],
}
*/

// Example of an Object
/*
const students = {
    name: "Edison",
    age: 9,
    isstudent: true,
    subject: ['maths', 'Eng', 'Chem'],
}

// Object Methods
// Access each property in an object
console.log(students.name);
console.log(students.subject[2]);

// Add to an Object
students.gender = "male";
console.log(students);

// edit (to override)
students.age = 10;
console.log(students);

// delete or remove from an object
delete students.age;
console.log(students);
*/

// Creating multiple object in an array
/*
StudentArray = [
    {
        name: "Alice",
        gender: "female",
        age: 9,
        isstudent: true
    },
    {
        name: "chika",
        gender: "male",
        age: 14,
        isstudent: true
    },
    {
        name: "Ben",
        gender: "male",
        age: 55,
        isstudent: false
    },
    {
        name: "Truth",
        gender: "female",
        age: 18,
        isstudent: true
    },
    {
        name: "zewas",
        gender: "male",
        age: 22,
        isstudent: true
    },
]

// Using loop and if statement to access object inside array

for (let names = 0; names < StudentArray.length; names++) {
    console.log(StudentArray[names].age);
}

// Combine for loop and if statement
for (let names = 0; names < StudentArray.length; names++) {
    if (StudentArray[names].name === "Alice") {
        console.log(StudentArray[names]);
    }
}

// How to push new object inside an array
StudentArray.push(
    {
        name: "love",
        gender: "female",
        age: 11,
        isstudent: true,
    },
)
console.log(StudentArray);
*/
// Read
// for in
// for of
// functions
/*
const papi = {
    name: "love",
    gender: "female",
    age: 11,
    isstudent: true,
}

console.log(papi);

// distructure
const { name: first, gender, age, isstudent } = papi;
console.log(first);

// spread operator
const { name, ...details } = papi
console.log(name, details)

const { ...detals } = papi
console.log(detals);
*/


/*
for in, for of in Video
for (variable in Object){//for in will loop through property names
    statement
}

for (variable of object){//for of will loop through proprty values
    statement
}
*/
/*
let person = { fname: "kate", lname: "carnes", arms: 2 };
let arr = [3, 5, 7];
arr.foo = "hello"; // This is custom property
let text = "";
for (let x in person) {
    text += person[x];
    console.log(x);
};
console.log(text);

for (let i in arr) {
    console.log(i);
};

for (let i of arr) {
    console.log(i);
};
*/
/*
Video: Object destructuring and spread operator
destructuring is to take an array or an object to convert
it into smaller object, element or variable,
*/
/*
const alphabet = ["A", "B", "C", "D", "E", "F"];
const numbers = ['1', '2', '3', '4', '5', '6'];


//const a = alphabet[0];
//const b = alphabet[1];
//const [a, b, c] = alphabet; //This is the method of destructuring
const [a, , c, ...rest] = alphabet; // This is spread oparator
const missArray = [...alphabet, ...numbers];
const newArray = alphabet.concat(numbers);

//console.log(a);
//console.log(c);
//console.log(rest);
console.log(missArray)
console.log(newArray);
*/
/* // Spread Operator in Array uses the key word "rest"
const alphabet = ["A", "B", "C", "D", "E", "F"];
const numbers = ['1', '2', '3', '4', '5', '6'];

//const [...rest] = alphabet;
//console.log(rest);
const [...rest] = numbers;
console.log(rest);
*/


// Function
/*
function sumAndMultiply(a, b) {
    return [a + b, a * b];
}

const array = sumAndMultiply(2, 3);
const [sum, multiply, division = "no division"] = sumAndMultiply(2, 3);

console.log(array);
console.log(sum);
console.log(multiply);
console.log(division);
*/
// Object destroction
/*
const personone = {
    name: "skyle",
    age: 29,
    address: {
        city: "Port Harcourt",
        state: "Rivers State"
    }
}
/*
const persontwo = {
    name: "map",
    age: 34,
    favoriteFood: "beans",
    address: {
        city: "owarre",
        state: "Imo State"
    }
}
*
const persontwo = {
    favoriteFood: "beans",
    address: {
        city: "owarre",
        state: "Imo State"
    }
}

//const { name: firstName, age } = persontwo; //This the object of destroction
//const { name: firstName, age, favoriteFood = 'rice' } = persontwo;
const { name: firstName, ...rest } = persontwo;
const both = { ...personone, ...persontwo };

//console.log(firstName);
//console.log(age);
//console.log(favoriteFood);
console.log(rest);
console.log(both);
// Using destroture inside function
function printuser(user) {
    //console.log(user);
    console.log(`Name is: ${user.name}. Age is:  ${user.age}.`);
}
printuser(personone);
*/


// Class for 20 FEB 2026
// for in
// for of
// Object destructuring
// spread operator
// functions

// For in
/*const profile = { //for an object it loop through the keys
    name: "Uchechi",
    gender: "female",
    age: 9,
    isstudent: true
}

for (const value in profile) {
    console.log(profile); //The result here shows all the keys and values
}*/
/*
const profile = ['Uchechi', 'female']; //Loop through using index number

for (const value in profile) {
    console.log(profile);
}*/
/*const dep = [{
    name: "love",
    gender: "female",
    age: 12,
    isstudent: true
},
{
    name: "love",
    gender: "female",
    age: 12,
    isstudent: true
},
]

for (const value in dep) {
    console.log(value, dep[value]); //it indexed first object as index 0 and second as index 1
}*/

/*const dep = 'Edision' //string

for (const value in dep) {//for in loop
    console.log(value, dep[value]); // edision showed as index
}

// for of loop is used to loop through the values of an array, string
for (const values of dep) {//for of loop
    console.log(values);
}*/

// Object destructuring

/*const pupil = {
    "name": "sarah",
    "gender": "female",
    "age": 14,
    "isstudent": true
}

// Keys
//const { name: firstName, gender, age, isstudent } = pupil;
console.log(pupil);

// Values
const { name, gender, age, isstudent } = { name: "joe", gender: "male", }
console.log(name);
*/

// Spread Operator ... cloning
// spread operator in object uses "details" as key word
/*
const pupil = {
    "name": "sarah",
    "gender": "female",
    "age": 14,
    "isstudent": true
}
//const { name, ...details } = pupil
//console.log(name, details);

const { ...details } = pupil
console.log(details);
*/

/*
Function
function in javascript is a block of code designed to
perform a particular task. A JavaScript function is
executed when "something" invokes it (calls it).
*/

/*
// This is how function is been coded
function name(params){

}*/
/*
function greet() {
    console.log("Hello World");
}
//Note: We can run a function by Calling a function,
// which is the same with execute the function,
// invoke the function and run the function
greet(); // Calling the function
*/

/*function Declaration
function declaration- a function declaration is when a
 function is defined using the function keyword followed
 by the function name and parentheses.
 Function declarations are hoisted,
 which means they can be called before they are defined
 in the code.*/
/*
greet();
function greet() {
    console.log("Hello World");
}
*/

/*Function Expression
function expression - a function expression is when a
function is assigned to a variable. Function expressions
can be anonymous (without a name) or named. They are not
hoisted, which means they cannot be called before they
are defined in the code.
*/
// greet() // this will give an error because
// function expression is not hoisted/
/*
const greet = function () {
    console.log("Hello World");
}
greet()
*/

/*
Arrow Function
arrow function- an arrow function is a concise way
to write a function expression.
It uses the => syntax and does not have its own this,
arguments, super, or new.target. Arrow functions are
always anonymous and cannot be used as constructors.
*/
/*
const greet = () => {
    console.log("Hello World");
}
greet();
*/
// One line arrow function
/*
const greet = () => console.log("Hello World");
greet();
*/

/*
Parameters
parameters- are the names listed in the function
definition. They act as placeholders for the
values that will be passed to the function when
it is called.
*/
/*
function greet(name) {
    console.log(`Hello ${name}`);
}
greet("Sampson");
*/
// ADDITION IN FUNCTION
/*
function add(a, b) {
    console.log(a + b);
}
// arguments- are the actual values that are passed to the
// function when it is called. They are assigned to the
// corresponding parameters in the function definition.
add(4, 5);
*/

/*
return statement- is used to specify the value that a
function should return when it is called. It is used
to exit a function and return a value to the caller.
*/
/*
function add(c, d) {
    return c + d;
}
const sum = add(4, 5);
console.log(sum);
*/

// Object in Function
/*
pupil = {
    name: "Sarah",
    gender: "female",
    age: 14,
    isstudent: true
}
function displayname(pupil) {
     console.log(pupil.name);
}
displayname(pupil);
*/
/*
pupil = {
    name: "Sarah",
    gender: "female",
    age: 14,
    isstudent: true
}
//Note: This is object destrocturing inside a function
function displayname({ name, gender, age, isstudent }) {
    if (isstudent === false) {
        console.log(`Hello ${name}, you are a ${age} year old ${gender} student.`)
    } else {
        console.log(`Hello ${name}, you are a ${age} year old ${gender} not a  student.`)
    }
}
displayname(pupil);
*/
/*
pupil = {
    name: "Sarah",
    gender: "female",
    age: 14,
    isstudent: true
}
//Note: This is Object detrocturing outside function
const { name, gender, age, isstudent } = pupil;
function displayname() {
    if (isstudent === false) {
        console.log(`Hello ${name}, you are a ${age} year old ${gender} student.`)
    } else {
        console.log(`Hello ${name}, you are a ${age} year old ${gender} not a  student.`)
    }
}
displayname(pupil);
*/

// Array Inside A Function
/*
const party = [
    {
        name: "June",
        gender: "male",
        age: 15,
        isstudent: true,
    },
    {
        name: "August",
        gender: "female",
        age: 25,
        isstudent: true,
    },
    {
        name: "December",
        gender: "male",
        age: 19,
        isstudent: true,
    },
]

function displayinfo([june, august, december]) {
    console.log(`Hello ${june.name}, you are a ${june.age} year old ${june.gender} student.`)
}
displayinfo(party);
*/
// assisgnment

/* write a function that takes an array of objects
and display the name and age of each person in the array.
If the person is a student, display "Hello [name],
you are a [age] year old student." If the person is not
a student, display "Hello [name], you are a [age] year
old not a student." Use object destructuring to extract
the properties from each object in the array.
Use template literals to format the output string.
Use a loop to iterate through the array of objects
and call the function for each object.*/
/*
const people = [
    {
        name: "June",
        gender: "male",
        age: 15,
        isstudent: true,
    },
    {
        name: "August",
        gender: "female",
        age: 25,
        isstudent: true,
    },
    {
        name: "December",
        gender: "male",
        age: 19,
        isstudent: true,
    },
]

function displayinfo(people) {
    for (let person of people) {
        const { name, age, isstudent } = person;
        if (isstudent === true) {
            console.log(`Hello ${name}, you are a ${age} year old student.`)
        } else {
            console.log(`Hello ${name}, you are a ${age} year old not a student.`)
        }
    }
}
displayinfo(people);


// Create an array of object
function displayinfo(people) {
    const [student1, student2, student3] = people;
    if (student1.isstudent === true) {
        console.log(`Hello ${student1.name}, you are a ${student1.age} year old student`);
    }
    if (student2.isstudent === false) {
        console.log(`Hello ${student2.name}, you are a ${student2.age} year old student`);
    }
    if (student3.isstudent === true) {
        console.log(`Hello ${student3.name}, you are a ${student3.age} year old student`);
    }
}
displayinfo(people);
*/


/*Function inside a function
function inside a function - a function that is defined
inside another function is called a nested function or
an inner function. The inner function has access to the
variables and parameters of the outer function,
and can also access the global scope. The inner function
can be used to perform a specific task that is related
to the outer function, and can also be returned as a
value from the outer function.*/
/*
const people = [
    {
        name: "June",
        gender: "male",
        age: 15,
        isstudent: true,
    },
    {
        name: "August",
        gender: "female",
        age: 25,
        isstudent: false,
    },
    {
        name: "December",
        gender: "male",
        age: 19,
        isstudent: true,
    },
]
function displayinfo(people) {
    function displayperson(person) {
        const { name, age, isstudent } = person;
        if (isstudent === true) {
            console.log(`Hello ${name}, you are a ${age} year old student `);
        } else {
            console.log(`Hello ${name}, you are a ${age} year old not a student `);
        }
    }
    for (let person of people) {
        displayperson(person)
    }
}
displayinfo(people);
*/
/*
Parameter and callback function-
a callback function is a function that is passed as an
argument to another function and is executed after some
operation has been completed. The callback function can
be used to perform a specific task after the main function
has finished executing, such as handling the result of an
asynchronous operation or performing additional processing
on the data. Callback functions are commonly used in
JavaScript for handling events, making API calls, and
working with asynchronous code.
*/
/*
const people = [
    {
        name: "June",
        gender: "male",
        age: 15,
        isstudent: true,
    },
    {
        name: "August",
        gender: "female",
        age: 25,
        isstudent: false,
    },
    {
        name: "December",
        gender: "male",
        age: 19,
        isstudent: true,
    },
]
function displayperson(person) {
    const { name, age, isstudent } = person;
    if (isstudent === true) {
        console.log(`Hello ${name}, you are a ${age} year old student `);
    } else {
        console.log(`Hello ${name}, you are a ${age} year old not a student `);
    }
}
function displayinfo(people, displayperson) {
    for (let person of people) {
        displayperson(person)
    }
}
displayinfo(people, displayperson);
*/
/*
callback function- a callback function is a function that
is passed as an argument to another function and is
executed after some operation has been completed.
The callback function can be used to perform a specific
task after the main function has finished executing,
such as handling the result of an asynchronous operation
or performing additional processing on the data.
Callback functions are commonly used in JavaScript for
handling events, making API calls, and working with
asynchronous code.
*/
/*
const party = [
    {
        name: "June",
        gender: "male",
        age: 15,
        isstudent: true,
    },
    {
        name: "August",
        gender: "female",
        age: 25,
        isstudent: false,
    },
    {
        name: "December",
        gender: "male",
        age: 19,
        isstudent: true,
    },
]
function displayperson(person) {
    const { name, age, isstudent } = person;
    if (isstudent === true) {
        console.log(`Hello ${name}, you are a ${age} year old student `);
    } else {
        console.log(`Hello ${name}, you are a ${age} year old not a student `);
    }
}
function displayinfo(a, b) {
    for (let person of a) {
        b(person)
    }
}
displayinfo(party, displayperson);
*/
/*
assignment
write a function that calculate the area of a circle.
The function should take the radius as a parameter and
return the area of the circle. Use the formula A = πr^2,
where A is the area, π is a constant (approximately 3.14),
and r is the radius of the circle. Use a callback function
to display the result in the console.
*/
/*
function calculateArea(radius, callback) {
    const area = 3.14 * radius * radius;
    callback(area);
}
function displayArea(area) {
    console.log(`The area of the circle is ${area}`);
}
calculateArea(9, displayArea);
*/

/*
Advance Array Method:
1. for Each()
2. map()
3. filter()
4. reduce()
5. find()
6. some()
7. every()
8. sort()
*/

/*1. for Each()
forEach() - executes a provided function once for
each array element. */
/*
const people = [
    {
        name: "sarah",
        gender: "female",
        age: 14,
        isstudent: true,
        country: "Nigeria"
    },
    {
        name: "john",
        gender: "male",
        age: 15,
        isstudent: false,
        country: "Ghana"
    },
    {
        name: "jane",
        gender: "female",
        age: 16,
        isstudent: true,
        country: "Kenya"
    }
]

people.forEach(function (person) {
    console.log(person);
})
*/
/*
const people = [
    {
        name: "sarah",
        gender: "female",
        age: 14,
        isstudent: true,
        country: "Nigeria"
    },
    {
        name: "john",
        gender: "male",
        age: 15,
        isstudent: false,
        country: "Ghana"
    },
    {
        name: "jane",
        gender: "female",
        age: 16,
        isstudent: true,
        country: "Kenya"
    }
]
people.forEach((person) => {
console.log(person.name);
if (person.country === "Nigeria") {
console.log(person);
}
})
*/
/*
const people = [
    {
        name: "sarah",
        gender: "female",
        age: 14,
        isstudent: true,
        country: "Nigeria"
    },
    {
        name: "john",
        gender: "male",
        age: 15,
        isstudent: false,
        country: "Ghana"
    },
    {
        name: "jane",
        gender: "female",
        age: 16,
        isstudent: true,
        country: "Kenya"
    }
]
function selectcountry() {
    people.forEach((person) => {
        console.log(person.name);
        if (person.country === "Nigeria") {
            console.log(person);
        }
    })
}
selectcountry();
*/
/*
2. map()
map() - creates a new array populated with the results
of calling a provided function on every element in the
calling array.
*/
// Numbers
/*
const list = [1, 2, 3, 4, 5, 6];
const l = list.map(function (params) {
    return params * 2;
});
console.log(l)

// Strings
const items = ["john", "kelly", "lilly"];
const i = items.map((items) => {
    return items.toUpperCase()
});
console.log(i);
*/

/*
3. filter()
creates a new array with all elements that pass the test
implemented by the provided function.
*/
/*
const items = ["john", "kelly", "lilly"];
const f = items.filter((fill) => {
    if (fill.includes("l")) {
        return fill;
    }
});
console.log(f);
*/

/*
const list = [1, 2, 3, 4, 5, 6];
const R = list.filter((even) => {
    if (even % 2 === 0) {
        return even;
    }
});
console.log(R);
*/
/*
4. reduce()
executes a reducer function (that you provide) on each
element of the array, resulting in a single output value.
*/
/*
explanation
        const list = [1, 2, 3, 4, 5, 6]
                      1 = 1 + 2 = 3
                      3 = 3 + 3 = 6
                      6 = 6 + 4 = 10
                      10 = 10 + 5 = 15
                      15 = 15 + 6 = 21
*/
/*
const list = [1, 2, 3, 4, 5, 6];
const sum = list.reduce((currentvalue, nextvalue) => {
    return currentvalue + nextvalue
});
console.log(sum);

const items = ["john", "kelly", "lilly"];
const k = items.reduce((c, n) => {
    return c + n;
});
console.log(k);
*/

/*
5. find()
returns the value of the first element in the provided
array that satisfies the provided testing function.
Otherwise undefined is returned.
*/
/*
const people = [
    {
        name: "sarah",
        gender: "female",
        age: 14,
        isstudent: true,
        country: "Nigeria"
    },
    {
        name: "john",
        gender: "male",
        age: 15,
        isstudent: false,
        country: "Ghana"
    },
    {
        name: "jane",
        gender: "female",
        age: 16,
        isstudent: true,
        country: "Kenya"
    }
]
const p = people.find((s) => {
    if (s.gender === 'female') {
        return s;
    }
});
console.log(p);
*/

/*
6. some()
tests whether at least one element in the array passes
the test implemented by the provided function.
It returns a Boolean value.
*/
/*
const people = [
    {
        name: "sarah",
        gender: "female",
        age: 14,
        isstudent: true,
        country: "Nigeria"
    },
    {
        name: "john",
        gender: "male",
        age: 15,
        isstudent: false,
        country: "Ghana"
    },
    {
        name: "jane",
        gender: "female",
        age: 16,
        isstudent: true,
        country: "Kenya"
    }
]
const p = people.some((s) => {
    if (s.gender === 'male') {
        return s;
    }
});
console.log(p);
*/

/*
7. every()
tests whether all elements in the array pass the test
implemented by the provided function. It returns a
Boolean value.
*/
/*
const people = [
    {
        name: "sarah",
        gender: "female",
        age: 14,
        isstudent: true,
        country: "Nigeria"
    },
    {
        name: "john",
        gender: "male",
        age: 15,
        isstudent: false,
        country: "Ghana"
    },
    {
        name: "jane",
        gender: "female",
        age: 16,
        isstudent: true,
        country: "Kenya"
    }
]
const p = people.every((s) => {
    if (s.country === 'Nigeria') {
        return s;
    }
});
console.log(p);
*/

/*
8. sort()
sorts the elements of an array in place and
returns the sorted array.
*/
/*
const sortItem = [1, 3, 4, 6, 8, 10, 20]
const t = sortItem.sort((a, b) => {
    return a + b;
});
console.log(t);
*/
/*
Assignment
write a function that takes an array of objects and display
the name and age of each person in the array. If the person
is a student, display "Hello [name], you are a [age] year
old student." If the person is not a student, display
"Hello [name], you are a [age] year old not a student."
Use object destructuring to extract the properties from
each object in the array. Use template literals to format
the output string. 
*/
/*
const users = [
    {
        name: "Ebuka",
        age: 17,
        gender: "male",
        isstudent: true,
    },
    {
        name: "Chidinma",
        age: 34,
        gender: "female",
        isstudent: false,
    },
    {
        name: "Chikwe",
        age: 19,
        gender: "male",
        isstudent: false,
    },
    {
        name: "Ruth",
        age: 18,
        gender: "female",
        isstudent: true,
    }
]

users.forEach((user) => {
    const { name, age, isstudent } = user;
    if (isstudent === true) {
        console.log(`You Name is ${name}, and your age is ${age}, and you are a student`);
    } else {
        console.log(`You Name is ${name}, and your age is ${age}, but sorry you are not a student`);
    }
})
users(users);
*/

/*
Date Function
 new Date()
*/
/*
new Date();
console.log(new Date());
*/

/*
const date = new Date();
console.log(date);
*/
/*
//days Sun - Mon = 0-6
const date = new Date();
const days = date.getDay() + 1;
console.log(days);
*/
/*
//months Jan - Dec = 0-11
const date = new Date();
const months = date.getMonth() + 1;
console.log(months);
*/
/*
//Year
const date = new Date();
const year = date.getFullYear();
console.log(year);
*/
/*
//Hours 1 - 23
const date = new Date();
const hours = date.getHours();
console.log(hours);
*/
/*
// Time
const date = new Date();
const time = date.getTime();
console.log(time);
*/
/*
const date = new Date();
const local = date.toDateString();
console.log(local);
*/
/*
const date = new Date();
const format2 = date.toLocaleString();
console.log(format2);
*/
/*
const DOB = new Date("1985-7-10")
console.log(DOB);
*/
/*
const today = new Date();
console.log(today);
*/
/*
// What is the objetive here?

const DOB = new Date("1985");
const today = new Date();
let age = today.getFullYear() - DOB.getFullYear();
console.log(age);
*/


/*
setTimeout(function, delay)
this function will execute at the exact time given to it

NOTE: 1 seconds = 1000 millesecond
*/
/*
setTimeout(() => {
    const DOB = new Date("1985");
    const today = new Date();
    let age = today.getFullYear() - DOB.getFullYear();
    console.log(age);
}, 9000);
*/
/*
setInterval(function, interval)
this function will execute repeatedly at exact time
interval given to it
*/
/*
setInterval(() => {
    const DOB = new Date("1992-7-10");
    const today = new Date();
    const age = today.getFullYear() - DOB.getFullYear();
    console.log(age);
}, 6000)
*/

/*
clearinterval
*/
/*
const clear = setInterval(() => {
    const DOB = new Date("1992-7-10");
    const today = new Date();
    let age = today.getFullYear() - DOB.getFullYear()
    console.log(age);
}, 8000)

setTimeout(() => {
    clearInterval(clear);
    console.log("This is cleared");
}, 9000)
*/



/*        DOM
.....Meaning..... 
Document Object Module
*/
/*
console.log(document);
console.log(document.title);
console.log(document.body);
*/
/*
DOM Selectors:
1. getElementByTagName()
2. getElementByid()
3. getElementBtClassName()
4. querySelector()
5. querySelectorAll()
*/
/*
// TagName
const byTag = document.getElementsByTagName("h1");
console.log(byTag);

// ById
const byid = document.getElementById("id");
console.log(byid);

// ByClassName
const byclass = document.getElementsByClassName("class");
console.log(byclass);

// Query Select Tag
const queryTag = document.querySelector("h1");
console.log(queryTag);

// Query Select Id
const queryId = document.querySelector("#id");
console.log(queryId);

// Query Select Class
const querclass = document.querySelector(".class");
console.log(querclass);

// Query Select All
//can be all tages, ids, or class
const allh1 = document.querySelectorAll("h1");
console.log(allh1);
*/
/*
// innerText: This gives us access to the text.
const qid = document.querySelector("#id");
const textin = qid.innerText;
console.log(textin);

// innerHTMl: This access the html element
const qeid = document.querySelector("#id");
const texth = qeid.innerHTML;
console.log(texth);

// textContent
const qidcon = document.querySelector("#id");
const textcon = qidcon.textContent;
console.log(textcon);

const upper = document.querySelector(".class");
const up = upper.innerHTML.toUpperCase();
console.log(up);
*/