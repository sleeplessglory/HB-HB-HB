//BASICS OF JAVASCRIPT
/*
console.log(`Hello`); //We can use ` `, ' ' or " "
console.log(`I like pizza!`);

window.alert(`This is an alert!`); //Alert window from above
window.alert(`I like pizza`); //This alert will be shown after closing the previous one (by users)

document.getElementById("myH1").textContent = `Hello`; //pasting text in <h1>
document.getElementById("myP").textContent = `I like pizza`;
*/
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
/*
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
*/
//COUNTER PROGRAM
/*
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
*/
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
/*
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
*/
//IF STATEMENTS
//For if statements "and" is used as "&&", "or" is used as "||"
/*
let time = 14;
if (time < 12) {
    console.log("Good morning");
}
else {
    console.log("Good afternoon!")
}

let isStudent = false;
if (isStudent) {
    console.log("You are a stundent");
}
else {
    console.log("You ain't a student");
}

let hasLicence=false;
if (age>=16) {
    console.log("You're old enough to drive");
    if(hasLicence){
        console.log("You have your licence");
    }
    else {
        console.log("You do not have your licence yet");
    }
}
else {
    console.log("You have to be 16+ to gave a licence");
}
*/
/*
const myText1 = document.getElementById("myText1");
const mySubmit1 = document.getElementById("mySubmit1");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit1.onclick = function() {
    age = Number(myText1.value); //Already declared myText1 constant above. Text will be converted into number before comparisons
    if(age >= 18) { //If it's true, the rest "else" statements will be skipped
        resultElement.textContent="You're old enough to enter this site";
    }
    else if (age < 0) {
        resultElement.textContent="Your age can't be below 0";
    }
    else if (age == 0) { //Comparison is used with "=="
        resultElement.textContent="You can't enter. You were just born";
    }
    else if (age >=100) { //Will be skipped because it works for the first "if" statement with >=18
        resultElement.textContent="You're too old to enter this site";
    }
    else {
        resultElement.textContent="You must be 18+ to enter this site";
    }
    //In this case it's better to check if age is >=100 first, then the other statements
}
*/
//CHECKED PROPERTY
//.checked is property that determines the checked state of an HTML checkbox or radio button element
/*
const myCheckBox = document.getElementById("myCheckBox");
const visaButton = document.getElementById("visaButton");
const masterCardButton = document.getElementById("masterCardButton");
const payPalButton = document.getElementById("payPalButton");
const submit2 = document.getElementById("submit2");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

submit2.onclick = function () {
    if (myCheckBox.checked) {
        subResult.textContent = "You are subscribed";
    }
    else {
        subResult.textContent = "You are not subscribed";
    }

    if (visaButton.checked) {
        paymentResult.textContent = "Your payment method is Visa";
    }
    else if (masterCardButton.checked) {
        paymentResult.textContent = "Your payment method is MasterCard";
    }
    else if (payPalButton.checked) {
        paymentResult.textContent = "Your payment method is PayPal";
    }
    else {
        paymentResult.textContent = "You must select a payment method";
    }
}
*/
//TERNARY OPERATOR "?"
//Ternary operator is a shortcut to if() and else() statements, which helps to assign a variable based on a condition:
//condition ? codeIfTrue : codeIfFalse;
/*
let a = 22;
let message = a >= 18 ? "You're an adult" : "You're a minor";
console.log(message);

let time = 16;
let greeting = time < 12 ? "Good morning!" : "Good afternoon!";
console.log(greeting);

let hungry = true;
let state = hungry ? "I'm hungry" : "I'm not hungry"; //With booleans we just use its variable
console.log(state);

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? purchaseAmount*0.9 : purchaseAmount;
console.log(discount);
*/
//SWITCHES
//An efficient replacement to many "if"/"else" statements
/*
let day = 1;

switch(day) {
    case 1:
        console.log("It is Monday");
        break; //helps to get out of the switch, otherwise next cases will be executed
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is Wednesday");
        break;
    case 4:
        console.log("It is Thursday");
        break;
    case 5:
        console.log("It is Friday");
        break;
    case 6:
        console.log("It is Saturday");
        break;
    case 7:
        console.log("It is Sunday");
        break;
    default: //If there're no matches with cases
        console.log(`${day} is not a day`);
}

let testScore = 94;
let letterGrade;

switch(true) { //"true" means that the case will be executed, if the statement is true, otherwise will be skipped
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
}
console.log(letterGrade);
*/
//STRING METHODS
/*
let userName = "   sleeplessglory";

console.log(userName.charAt(0)); //.charAt() returns the character of specified index of a string. Starts with index "0" (like arrays) for the 1st letter
console.log(userName.indexOf("o")); //indexOf() returns the index of the specified character that was detected for the 1st time
console.log(userName.lastIndexOf("s")); //lastIndexOf() returns the index of the last time where character was detected
console.log(userName.length); //Just the length property of the variable
console.log(userName.trim()); //Trims white spaces from the beginning and the end of a string
console.log(userName.toUpperCase()); //All letters will be capitalised
console.log(userName.toLowerCase()); //The reverse
console.log(userName.repeat(2)); //.repeat() repeats the string by the specified amount of time
console.log(userName.startsWith("7")); //.startsWith() returns the boolean value, whether the string starts with "7" or not
console.log(userName.endsWith("y")); //.endsWith() returns the boolean value, whether the string ends with "y" or not
console.log(userName.includes("less")); //.includes() returns the boolean value, whether the string includes the specified sequence of characters or not

let phoneNumber = "8-800-555-35-35";
phoneNumber = phoneNumber.replaceAll("-", ""); //.replaceAll("-", "") replaces the "-" characters with "" characters in the string
console.log(phoneNumber);
phoneNumber = phoneNumber.padStart(15, "0"); //.padStart(15, "0") sets 15 characters for the string to end up with and "0" will be added to the beginning to have these 15 characters eventually
console.log(phoneNumber);
phoneNumber = phoneNumber.padEnd(17, "0"); //.padEnd(17, "0") will do the same but at the end of the string
console.log(phoneNumber);
*/
//STRING SLICING
//Creating a substring out of another with .slice(starting index, ending index+1)
/*
const fullName = "sleepless glory";
let firstName = fullName.slice(0, 9); //Despite "s" has index 8, we have to write 9, since the last index is exclusive for this method
console.log(firstName);
let lastName = fullName.slice(10, 15); //This time you can use just .slice(10), if you want it till the end
console.log(lastName);
let lastChar = fullName.slice(-1); //Starts from the end. -1 is for the last character, -5 will return the last 5 characters
console.log(lastChar);
//A better way is to find when " " is met:
firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ")+1);
console.log(firstName);
console.log(lastName);

const email = "sleeplessglory@outlook.com";
let userName1 = email.slice(0, email.indexOf("@"));
console.log(userName1);
let extension = email.slice(email.indexOf("@")+1);
console.log(extension);
*/
//METHOD CHAINING
//Call one method after another in one continuous line
//let userName2 = window.prompt("Enter your username:");
//No method chaining:
/*
userName2 = userName2.trim();
let letter = userName2.charAt(0);
letter = letter.toUpperCase();

let extraChars = userName2.slice(1);
extraChars = extraChars.toLowerCase();
userName2 = letter + extraChars;
console.log(userName2);
*/
//Method chaining:
//userName2 = userName2.trim().charAt(0).toUpperCase() + userName2.trim().slice(1).toLowerCase();
//console.log(userName2);
//LOGICAL OPERATORS
//"and" is "&&", "or" is "||", "not" is "!"
/*
const temp = 20;
if(temp > 0 && temp <= 30) {
    console.log("The weather is good");
}
else {
    console.log("The weather is bad");
}

if(temp <= 0 || temp > 30) {
    console.log("The weather is bad");
}
else {
    console.log("The weather is good");
}

const isSunny = true;
if(!isSunny){
    console.log("It's cloudy");
}
else {
    console.log("It's sunny");
}
*/
//STRICT EQUALITY
// "=" is assignment operator
// "==" is comparison operator
// "===" is strict equality operator (compare whether values & data types are equal)
// "!=" is inequality operator
// "!==" is strict inequality operator
/*
const e = 2.7;

if(e == "2.7") { //with "===" the else statement would be executed, because of different data types
    console.log("That is e");
} 
else {
    console.log("That is not e");
}

if(e != "2.7") {
    console.log("That is not e");
}

if(e !== "2.7") { //checking the value & data type as well
    console.log("That is not e");
}
*/
//WHILE LOOPS
/*
let userName3 = "";

while(userName3 === "" || userName3 === null) {
    userName3 = window.prompt("What's your username?");
}

do { //the same variation as above, but now we're able not to assign the initial userName3
    userName3 = window.prompt("What's your username?");
} while(userName3 === "" || userName3 === null)
console.log(userName3);

let loggedIn = false;
let userName4;
let password;

while(!loggedIn) {
    userName4 = window.prompt("Enter your username: ");
    password = window.prompt("Enter your password: ");
    if (userName4 === "myUsername" && password == "myPassword") {
        loggedIn = true;
        console.log("You're logged in");
    }
    else {
        console.log("Invalid credentials! Please, try again");
    }
}
*/
//FOR LOOPS
/*
for(let i = 0; i <= 2; i++) {
    console.log(i);
}

for(let i=20; i>=0; i-=2) {
    if(i == 14){
        continue; //will skip this "i" and go to the next iteration
    }
    if (i == 12) {
        break; //gets out of the loop without the remaining iterations
    }
    console.log(i); //Results: 20, 18, 16
}
*/
//NUMBER GUESSING GAME
/*
const minNum = 50;
const maxNum = 100;
const answer = Math.trunc(Math.random()*(maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
    if (isNaN(guess)){ //isNan() is a method that checks whether the variable has a number data type or not
        window.alert("Enter a valid number");
    }
    else if(guess < minNum || guess > maxNum) {
        window.alert("Enter a valid number");
    }
    else {
        attempts++;
        if(guess < answer){
            window.alert("Too low. Try again");
        }
        else if(guess > answer){
            window.alert("Too high. Try again");
        }
        else {
            window.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts!`);
            running = false;
        }
    }
}
*/
//FUNCTIONS
/*
function happyBirthday(userName5, age) { //function with parameters to be received
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday, dear ${userName5}!`);
    console.log(`You're ${age} years old!`);
}
happyBirthday("sleeplessglory", "22"); //Calling the function and passing it specific arguments to be used within
happyBirthday("Alex", "20");

function add(x, y) {
    let result = x + y;
    return result;
}
console.log(add(2, 3));

function isEven(number1) {
    if(number1 % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
    //another way is to use ternary operator again: 
    //return number1 % 2 === 0 ? true : false
}
console.log(isEven(10));

function isValidEmail(email) {
    if(email.includes("@")){
        return true;
    }
    else {
        return false;
    }
    //another way is to use ternary operator again: 
    //return email.includes("@") ? true : false
}
console.log(isValidEmail("sleeplessglory@outlook.com"));
*/
//VARIABLE SCOPE
//A place where a variable is recognised and accessible (local or global)
/*
let g = 4; //global scrope (outside of a function)
function f1(){
    let l = 1; //"l" is local within f1(), hence, it can be declared again within another f()
    console.log(l); //if "l" was global as well, the result would be the local value
    console.log(g); //global variable can be accessed by functions
}
function f2(){ //f2() can't get access to "l" within f1() and vice versa
    let l = 2; //local scope
    console.log(l);
    console.log(g);
}
*/
//TEMPERATURE CONVERSION PROGRAM
/*
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert() { //in HTML file for the line of "Submit" button specify an attribute "onclick" with value "convert()" in order to execute whis function 
    if(toFahrenheit.checked) {
        temp=Number(textBox.value);
        temp=temp*9/5+32; //conversion formula
        result.textContent=temp.toFixed(1) + "°F"; //.toFixed(1) gives us additional 1 digit for more precision
    }
    else if(toCelsius.checked) {
        temp=Number(textBox.value);
        temp=(temp-32)*(5/9); //conversion formula
        result.textContent=temp.toFixed(1) + "°F"; //.toFixed(1) gives us additional 1 digit for more precision
    }
    else {
        result.textContent = "Select a unit";
    }
}
*/
//ARRAYS
/*
let fruits = ["apple", "orange", "banana"]; //indexing from 0

fruits.push("coconut"); //.push() adds the next element to the end of an array
fruits.pop(); //.pop() removes the last element of an array;
fruits.unshift("mango"); //.unshift() adds the specified element to the beginning of an array
fruits.shift(); //.shift() removes the first element of an array;

console.log(fruits.length); //the length (amount of elements) of an array
console.log(fruits.indexOf("apple")); //defining the index of the specified element, same as for strings
//in case the .indexOf() returns "-1", that means that the specified element does not exist in an array
for (let i=0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
//or there's a simple way:
for (let fruit of fruits) {
    console.log(fruit); //"fruit" is chosen instead of "i", could be anything
}

fruits.sort(); //sort the elements alphabetically
fruits.sort().reverse(); //sort the elements in a reverse alphabetical way
*/
//SPREAD OPERATOR "..."
//Allows an iterable (array, string) to be expanded into separate elements (unpacks the elements)
/*
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(numbers); //result will be "NaN", since it's an array
let maxNum = Math.max(...numbers); //now we allowed to spread (unpack) the array into different elements
let minNum = Math.min(...numbers);
console.log(maxNum, minNum);

let trackTitle = "Various Storms & Saints";
let letters = [...trackTitle]; //created an array and spread the string into it
console.log(letters); //['V', 'a', 'r', 'i', 'o', 'u', 's', ' ', 'S', 't', 'o', 'r', 'm', 's', ' ', '&', ' ', 'S', 'a', 'i', 'n', 't', 's'] is the result
letters = [...trackTitle].join("-"); //.join() adds the specified character(s) to the unpacked version of a string within an array
console.log(letters); //V-a-r-i-o-u-s- -S-t-o-r-m-s- -&- -S-a-i-n-t-s (not an array)

//off the previous exercise let's use the fruits array
let newFruits = [...fruits]; //a copy array containing the same values
let vegetables = ["carrots", "tomatoes", "potatoes"];
let foods = [...fruits, ...vegetables, "eggs", "milk"]; //we can add 2 arrays with spread operator for a new one and also write new elements too

console.log(foods);
*/
//REST OPERATOR (PARAMETERS) "..."
//Allows a function work with a variable number of arguments by bundling them into an array
//'spread' expands an array into separate elements
//'rest' bundles separated elements into an array
/*
const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

function openFridge(...foods) { //rest parameters (...foods) allows to accept any number of arguments
    console.log(...foods); //spread parameters (a string is shown) unpacked the array
}
openFridge(food1, food2, food3, food4, food5);

function getFood(...foods) { //rest parameters are bundled as an array now
    console.log(foods); //shows an array
}
getFood(food1, food2, food3, food4, food5);

function sum(...numbers) {
    let result = 0;
    for (let number of numbers){
        result += number;
    }
    console.log(`Your total is $${result}`);
}
sum(4, 7, 11);

function getAverage(...numbers) {
    let result = 0;
    for (let number of numbers){
        result += number;
    }
    console.log(`Your total is $${result/numbers.length}`);
}
getAverage(11, 11, 11);

function combineStrings(...strings){ //bundled as an array
    return strings.join(" ") //.join(" ") will add strings together with " " in between them (a string will be returned)
}
const fullName = combineStrings("Florence", "+", "The", "Machine");
console.log(fullName);
*/
//DICE ROLLER PROGRAM
function rollDice() {
    const amountOfDice = document.getElementById("amountOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = []; //the values of each dice
    const images = []; //to be shown accordingly

    for (let i=0; i < amountOfDice; i++) {
        let value = Math.trunc(Math.random() * 6 + 1);
        values.push(value);
        images.push(`<img src="images/${value}.png" alt="Dice ${value}">`); //let's call dice images accordingly. Couldn't find those images currently. So, alt names are shown instead
    }
    diceResult.textContent = `Dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join("");
}
//RANDOM PASSWORD GENERATOR
/*
const passwordLength = 22;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=\|/<>?'`;:,.{}[]~";

    let allowedChars = "";
    let password = "";
    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0) {
        return "Password length must be at least 1";
    }
    else if(allowedChars.length === 0) {
        return "At least 1 set of character needs to be selected";
    }
    else {
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.trunc(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }
        return password;
    }
}

const password = generatePassword (passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);
console.log(`Generated password: ${password}`);
*/
//CALLBACKS
//Functions that are passed as an argument to another function (e.g. we want functions to be executed consequently)
//JavaScript won't wait when one function is executed to go further
//Used to handle asynchronous operations: reading a file, network requests, interacting with databases. So, another function ain't executed before these operations
/*
hello(wait);
function hello(callback) {
    console.log("Hello!");
    callback(); //wait() is called now
}

function wait() {
    console.log("Wait!");
}


function sum(callback, x, y) { //"callback" is specified as a parameter
    let result = x + y;
    callback(result); //passing the result to a callback function
}
sum(displayConsole, 1, 2); //"displayConsole" is a callback funtion specified without "()"

function displayConsole(result) {
    console.log(result);
}

function displayDOM(result){
    document.getElementById("h1CallBack").textContent = result;
}
sum(displayDOM, 22, -48);
*/
//forEach() METHOD
//Method used to iterate over the elements of an array and apply a specified function (callback) to each element
//element, index and array are provided automatically
/*
let numbers = [1, 2, 3, 4, 5];

function double(element, index, array) {
    array[index] = element * 2;
}

function tripple(element, index, array) {
    array[index] = element * 3;
}

function square(element, index, array) {
    array[index] = Math.pow(element, 2);
}

function display(element) {
    console.log(element);
}

numbers.forEach(double);
numbers.forEach(tripple);
numbers.forEach(square);

numbers.forEach(display);

let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(capitalise);
fruits.forEach(upperCase); //calls are executed consequently

fruits.forEach(display);

function capitalise(element, index, array) {
    array[index] = element.charAt(0).toUpperCase()+element.slice(1);
}

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}
*/
//.map() METHOD
//Accepts a callback and applies that function to each element of an array, then returns a new array (similar to .forEach(), but returns a new array)
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);

console.log(squares);

function square(element) {
    return Math.pow(element, 2);
}


const students = ["Florence", "Adele", "Stefani", "Elizabeth"];
const studentsUpper = students.map(upperCase);

console.log(studentsUpper);

function upperCase(element) {
    return element.toUpperCase();
}


const dates = ["2024-8-11", "2020-1-1", "2021-7-19"]; //Let's declare the date as YYYY-MM-DD
const formatedDates = dates.map(formatDates);

console.log(formatedDates);

function formatDates (element) {
    const parts = element.split("-"); //.split("-") splits an element where "-" is detected. Now the parts are: "2024", "8", "11", "2020", "1", "1", "2021", "7", "19"
    return `${parts[2]}/${parts[1]}/${parts[0]}` //rearranging the date format as DD-MM-YYYY. Every index stands for its element within the initial array
}