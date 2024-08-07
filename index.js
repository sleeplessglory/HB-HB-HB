//BASICS OF JAVASCRIPT
/*
console.log(`Hello`); //We can use ` `, ' ' or " "
console.log(`I like pizza!`);

window.alert(`This is an alert!`); //Alert window from above
window.alert(`I like pizza`); //This alert will be shown after closing the previous one (by users)
*/

document.getElementById("myH1").textContent = `Hello`; //pasting text in <h1>
document.getElementById("myP").textContent = `I like pizza`;

//VARIABLES
//Numbers
/*
let x; //declaration of a variable
x=100; //assignment
let y = 200; //both declaration and assignment
let age = 25;
let price = 10.99;
let gpa = 2.1;
console.log(`I am ${age}`);
console.log(`The price is $${price}`);
console.log(`Your gpa is ${gpa}`);
console.log(typeof age);

//Strings
let firstName = "sleeplessglory";
let favouriteFood = "pizza";
let email = "sleeplessglory@outlook.com"
console.log(typeof firstName);
console.log(`Your name is ${firstName}`);
console.log(`You like ${favouriteFood}`);
console.log(`Your email is ${email}`);

//Booleans
let online = true;
let forSale = false;
console.log(typeof online);
console.log(`sleeplessglory is online: ${online}`);
console.log(`Is this car for sale: ${forSale}`);

let fullName = "sleepless glory";
let age = 22;
let isStudent = false;
document.getElementById("par1").textContent = `Your name is ${fullName}`;
document.getElementById("par2").textContent = `You're ${age}`;
document.getElementById("par3").textContent = `Enrolled: ${isStudent}`;
*/
//ARITHMETIC OPERATORS
// operands (values, variables, etc.), operators (+ - * /), exponents (11 = x + 5)
/*
let students = 30;
students = students + 1; //31
students = students - 3; //28
students = students * 2; //56 ("*" is called asterisks)
students = students / 4; //14
students = students ** 3; //2744 (power of 3)
let extraStudents = students % 2; //remainder (is 0 for 2744). "%" is modulus operator
students += 1; //Increased by 1. Same for all other operators
students++; //Increased by 1
students--; //Decreased by 1

//Operator precedance:
//1. Parenthesis ( )
//2. Exponents **
//3. Multiplication, division, modulo * / %
//4. Addition, substraction + -

let result = 1 + 2 * 3 + 4 ** 2;
console.log(result);
*/
//ACCEPT USER INPUT (by window prompt or HTML textbox)
//Window prompt
/*
let username = window.prompt("What's your username?"); //The input of users will be assigned to this variable
console.log(username);

//HTML textbox
let usename;
document.getElementById("mySubmit").onclick = function() { //Specifying the button, then "onclick" calling the "function()" which assigns the "value" from the box to the username specified
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myH2").textContent = `Hello, ${username}!`;
}
*/
//TYPE CONVERSION
/*
let age = window.prompt("How old are you?") //User input will be string
age = Number(age); //Converting into number
age+=1;
console.log(age, typeof age);

let x = "pizza";
let y = "pizza";
let z = "pizza";
x = Number(x);
y = String(y);
z = Boolean (z);
console.log(x, typeof x); //NaN (not a number)
console.log(y, typeof y); //pizza (string)
console.log(z, typeof z); //true (boolean), as long as "z" is not empty
*/
//CONSTANTS

const PI = 3.14159; //declaring it as a constant won't let change it later on. Only const numbers and booleans have capitalised const names, not strings 
let radius;
let circumference;

//PI = 420.94; //JS won't let reassign it due to being const

//radius = window.prompt("Enter the radius of a circle")
//radius = Number(radius);

//circumference = 2 * pi * radius;

document.getElementById("submit").onclick = function() {
    radius = document.getElementById("radius").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("circumference").textContent = `Circumference is ${circumference}`+" cm";
}

//COUNTER PROGRAM
const decreaseButton = document.getElementById("decreaseButton"); //Already assigned with "document.getEl...". Won't need to type it again while calling the function() below
const resetButton = document.getElementById("resetButton"); //Same as above
const increaseButton = document.getElementById("increaseButton"); //Same as above
const countLabel = document.getElementById("countLabel"); //Same as above
let count = 0;

increaseButton.onclick = function() { //Already assigned "increaseButton" earlier
    count++;
    countLabel.textContent = count;
}
resetButton.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}
decreaseButton.onclick = function() {
    count--;
    countLabel.textContent = count;
}
//MATH OBJECT
/*
let x = 4.5;
let y = 9.4;
let z;
let f;
let c;
let t;
let p;
let s;
let n;
let radians = 45; //Radians for trigonometric calculations
let sin;
let cos;
let tan;
let abs = -25.9;
let k1 = -4;
let k2 = 0;
let k3 = 7;
let sign;

z=Math.round(x); //Rounding method (works the same way as in Maths except for negative numbers. -4.5 will be rounded to -4, which is incorrect in Maths)
f=Math.floor(x); //Rounding down always
c=Math.ceil(y); //Rounding up always
console.log(z, f, c); //5 4 10

t=Math.trunc(y); //Eliminates any decimal portion
console.log(t); //9
p=Math.pow(x, y); //x^y
console.log(p);
s=Math.sqrt(y, x); //Root
console.log(s);
n=Math.log(x); //Natural logorithm
console.log(n);
sin=Math.sin(radians); //sine
console.log(sin);
cos=Math.cos(radians); //cosine
console.log(cos);
tan=Math.tan(radians); //tangent
console.log(tan);
abs=Math.abs(abs); //absolute value
console.log(abs); //25.9
sign=Math.sign(k1); //Defines the sign of a number
console.log(sign); //-1, hence, number is negative
sign=Math.sign(k2);
console.log(sign); //0, hence, number is 0
sign=Math.sign(k3);
console.log(sign); //1, hence, number is positive

let max = Math.max(x, y, z); //maximum
console.log(max);
let min = Math.min(x, y, z); //minimum
console.log(min);
*/
//RANDOM NUMBER GENERATOR
const min = 50;
const max = 100;
//By default random() will get the number between 0 and 1: interval (0; 1). So, to set it between 20 and 30, interval (0; 1) will be * (30-20) = (0; 10) and also + 20 to each side is = (20; 30)
let randomNum1 = Math.trunc(Math.random() * 6) + 1;
console.log(randomNum1);

let randomNum2 = Math.random() * (max - min) + min; //From 50 to 100: interval (50; 100). Check the explanation above
console.log(randomNum2);
//Let's make a random number generator for the dice
const myButton = document.getElementById("myButton"); //Already assigned with "document.getEl...". Won't need to type it again while calling the function() below
const myLabel = document.getElementById("myLabel"); //Same as above
const minDice = 1;
const maxDice = 6;
let randNum;

myButton.onclick = function() { //Already assigned "myButton" earlier
    randNum = Math.trunc(Math.random() * maxDice) + minDice;
    myLabel.textContent = randNum;
}