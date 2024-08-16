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
//.forEach() METHOD
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

function upperCase(element, index, array) {
    array[index] = element.toUpperCase();
}
*/
//.map() METHOD
//Accepts a callback and applies that function to each element of an array, then returns a new array (similar to .forEach(), but returns a new array)
/*
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
    //console.log(parts); "parts" now consists of many arrays. The 1st array is made out of the 1st element of the initial array: ["2024", "8", "11"]. The 2nd is made out of the 2nd, etc.
    return `${parts[2]}/${parts[1]}/${parts[0]}` //rearranging the date format as DD-MM-YYYY. Every index stands for its element within each array of "parts" (commented above)
}
*/
//.filter() METHOD
//Creates a new array by filtering out elements (based on "true" or "false")
/*
let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(evenNums, oddNums);

function isEven(element) { //callback function
    return element % 2 === 0; //returning "true" or "false"
}

function isOdd(element) { //callback function
    return element % 2 !== 0;
}


const ages = [16, 17, 18, 18, 19, 20, 60];
const adults = ages.filter(isAdult);
const minors = ages.filter(isMinor);

console.log(adults, minors);

function isAdult(element) { //callback function
    return element >= 18;
}

function isMinor(element) {
    return element < 18;
}


const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(shortWords, longWords);

function getShortWords(element) {
    return element.length < 7;
}

function getLongWords(element) {
    return element.length >= 7;
}
*/
//.reduce() METHOD
//Reduces the elements of an array to a single value
/*
const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(previous, element) { //previous sum of elements and a current element
    return previous + element; //this sum is a new "previous" element for the next pair of elements (explained below)
}
// [5, 30, 10, 25, 15, 20]; for the first iteration the sum (5+30=35). Now the initial array is reduced to a smaller one: [35, 10, 25, 15, 20]
// [35, 10, 25, 15, 20]; for the second iteration the sum is 35+10=45. The reduced array now is [45, 25, 15, 20]
// [45, 25, 15, 20]; for the next iteration now the sum is 45+25=70. The new array: [70, 15, 20]
// [70, 15, 20] will be reduced into [85, 20]
// [85, 20] will be reduced to the final single value sum=85+20=105. The whole array has been reduced into the value (according to the rule of sum specified)
const grades = [75, 50, 90, 80, 65, 95];
const maximum = grades.reduce(getMax);

console.log(maximum);

function getMax(previous, element) { //"previous" can also be called "accumulator"
    return Math.max(previous, element); //
}
*/
//FUNCTION EXPRESSIONS
//A way to define functions as values or variables (not a function declaration)
/*
const hello = function() { //Assigning a function to a variable
    console.log("Hello");
};

hello(); //The function() will be called now by the name it was assigned to

setTimeout(hello, 3000); //hello() will be executed after 3000ms = 3s
setTimeout(function(){ //An entire f() was passed as an argument (treated as a value)
    console.log("Hey");
}, 3000); //The end of arguments for setTimeout()


const numbers = [1, 2, 3, 4, 5, 6];
const squares1 = numbers.map(square1);

console.log(squares1);

function square1(element) { //This time it's a function declaration
    return Math.pow(element, 2);
}

const squares2 = numbers.map(function(element) { //This time we used a function expression instead. No need to name a function then ('cause it's used just once)
    return Math.pow(element, 2);
});

console.log(squares2);

const cubes = numbers.map(function(element) {
    return Math.pow(element, 3);
});

console.log(cubes);

const evenNums = cubes.filter(function(element) {
    return element % 2 === 0;
});

console.log(evenNums);

const sumEvenNums = evenNums.reduce(function(accumulator, element) {
    return accumulator + element;
});

console.log(sumEvenNums);
*/
//ARROW FUNCTIONS
//A concise way to write function expressions. Good for simple functions that're only used once
//(patameters) => {some code}
/*
const hello = function() { //function expression. Now there's a hello() function
    console.log("Hello");
};

hello(); //function expression invoking (calling)

const hello2 = (name, age) => {console.log(`Hello, ${name}!`) //if more than 1 line, then use "{ }" around
                               console.log(`You're ${age} years old!`)}; //hello2() is an arrow function now

hello2("sleeplessglory", 22); //arrow function invoking (calling it)


setTimeout(() => console.log("Goodbye!"), 3000);


const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2)); //We don't "return" those elements
console.log(squares);

const oddNums = numbers.filter((element) => element % 2 !== 0); //We don't "return" the elements back when using "=>"
console.log(oddNums);

const sum = numbers.reduce((accumulator, element) => accumulator + element);
console.log(sum);
*/
//JAVASCRIPT OBJECTS
//Collections of related properties and/or methods that can represent real world objects (people, products, places)
// object = {key:value,       //properties
//               function()};  //methods
/*
const person = { //an object ("const" is optional)
    firstName: "Florence", //key: value,
    lastName: "Welch", //for object properties or methods we separate them with "," (even functions end with it, not ";")
    age: 37,
    isEmployed: true,
    sayHello: function() {console.log("Hi! I'm Florence. I'm English. AHAHAHHA")}, //Do not use ";" in the end. Use "," within objects instead
    sing: () => {console.log("Some things you let go in order to live. While all around you the buildings sway, You sing it out loud, Who made us this way?")}, //arrow functions can be applied too
    eat: () => {console.log("I'm eating this salad now!")},
};

console.log(person.firstName); //access any property of the object
console.log(person.lastName);
console.log(person.age);
person.sayHello(); //access any method of the object
person.sing();
person.eat();
*/
//THIS
//"this" is a reference to the object where "this" is used. The object depends on the immediate context.
//Used in object methods, where this refers to the object that the method is attached to, thus allowing the same method to be reused on different objects
//person.name = this.name
/*
const person = {
    name: "Stefani",
    favFood: "spaghetti",
    sayHello: function(){console.log(`I'm ${this.name}`)}, //we use "this.name" (or can use "person.name"), otherwise it won't show it
    eat: () => {console.log(`${person.name} is eating ${person.favFood}`)}, //"this." doesn't work with arrow functions. Use the function() itself or specify properties as "objectName." ("person.")
};
person.sayHello();
person.eat();

const person2 = {
    name: "Martin",
    favFood: "pizza",
    sayHello: function(){console.log(`I'm ${this.name}`)}, //we use "this.name" (or can use "person.name"), otherwise it won't show it
    eat: () => {console.log(`${person2.name} is eating ${person.favFood}`)}, //"this." doesn't work with arrow functions. Use the function() itself or specify properties as "objectName." ("person." this time)
};
person2.eat();
*/
//CONSTRUCTORS
//Special method for defining the properties and methods of objects
/*
function Car(make, model, year, color) { //constructor names are capitalised (Car)
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`You drive the ${this.model}`)}
} //Car() is a constructor method (which is reusable)

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
//we can add as many cars as we want with this constructor

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

car1.drive();
car2.drive();
*/
//CLASSES
//(ES6 feature) provide a more structured and cleaner way to work with objects compared to traditional constructure functions
// e.g. static keyword, encapsulation, inheritence
/*
class Products { //this class is reusable
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    displayProduct(){ //inside classes no need to use keywords for functions
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`); //.toFixed() method shows 2 digits in the decimal part
    }
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const product1 = new Products("Shirt", 19.99); //creating an object
const product2 = new Products("Pants", 22.50);
const product3 = new Products("Underwear", 100);
const salesTax = 0.05; //5%
const total = product1.calculateTotal(salesTax); //for shirt

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();
console.log(`Total price (with tax): $${total.toFixed(2)}`);
*/
//STATIC KEYWORD
//Keyword that defines properties or methods that belong to a class itself rather than the objects created from that class (class owns anything static, not the objects)
/*
class MathUtil {
    static PI = 3.14159; //no need to create an object to access this property
    static getDiameter(radius) {
        return radius*2;
    }
    static getCircumference(radius) {
        return 2*this.PI*radius;
    }
    static getArea(radius) {
        return this.PI*radius*radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));


class User {
    static userCount = 0; //can't be accessed by "this", only by class (commented below)
    constructor(username) {
        this.username = username;
        User.userCount++; //"userCount" is static and belongs to the class only
    }
    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }
    static getUserCount(){
        console.log(`There are ${User.userCount} users online`);
    }
}

const user1 = new User("Florence");
const user2 = new User("Elizabeth");

console.log(user1.username);
console.log(user2.username);
//console.log(user1.userCount); //won't be executed since "userCount" is static and belongs to the class only
console.log(User.userCount); //now we can access userCount
User.getUserCount();

user1.sayHello();
user2.sayHello();
*/
//INHERITANCE
//Allows a new class to inherit properties and methods from an existing class (parent -> child)
/*
class Animal {
    alive = true;
    eat() {
        console.log(`This ${this.name} is eating`);
    }
    sleep() {
        console.log(`This ${this.name} is sleeping`);
    }
}
class Rabbit extends Animal { //"extends" sets a relationship that "Animal" is a parent class for a "Rabbit" (child class)
    name = "rabbit";
    run() {
        console.log(`This ${this.name} is running`);
    }
}
class Fish extends Animal {
    name = "fish";
    swim() {
        console.log(`This ${this.name} is swimming`);
    }
}
class Hawk extends Animal {
    name = "hawk";
    fly() {
        console.log(`This ${this.name} is flyng`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

//rabbit.alive = false; //can be changed

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();
//fish.run(); //an error, because it can't run (according to our methods)
//hawk.swim(); //same as above
//rabbit.fly(); //same as above
*/
//SUPER KEYWORD
//Keyword's used in classes to call the constructor or access the properties and methods of a parent (superclass)
//this = this object
//super = the parent
/*
class Animal { //superclass
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    move(speed){
        console.log(`The ${this.name} moves at speed of ${speed}km/h`);
    }
}
class Rabbit extends Animal {
    constructor(name, age, runSpeed){
        super(name, age); //"super()" constructor of the parent has to be called
        this.runSpeed = runSpeed;
    }
    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}
class Fish extends Animal {
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}
class Hawk extends Animal {
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }
    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 20);
const hawk = new Hawk("hawk", 3, 50);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);

rabbit.run();
fish.swim();
hawk.fly();
*/
//GETTERS & SETTERS
//Getter is a special method that makes a property readable
//Setter is a special method that makes a property writable
//Can be used to modify a value when reading/writing a property. So, users don't input inappropriate values
/*
class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    set width(newWidth){ //for a Setter we specify the property "width"
        if(newWidth > 0) {
            this._width = newWidth; //"_width" means it's a private property that shouldn't be touched by other developers
        }
        else {
            console.error("Width must be a positive number"); //"".error" is used to show an error within the console
        }
    }
    set height(newHeight){
        if(newHeight > 0) {
            this._height = newHeight;
        }
        else {
            console.error("Height must be a positive number"); //"".error" is used to show an error within the console
        }
    }
    get width(){
        return this._width; //now width is not only writable but also readable
    }
    get height(){
        return this._height;
    }

    get area(){ //with Getter now this will be accessed as if it was a property below (technically it's not)
        return this._width * this._height;
    }
}

//const rectangle = new Rectangle(-1000000, "pizza"); //testing setters
const rectangle = new Rectangle(3, 4); //still are undefined, since with Setters they're writable now, but not readable yet! Add Getters now. Values are shown now

rectangle.width = 5; //can be changed
rectangle.height = 6;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area); //"area" is being accessed as if it was a property (technically it's not)


class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstName = newFirstName;
        }
        else {
            console.error("First name must be a non-empty string");
        }
    }
    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0) {
            this._lastName = newLastName;
        }
        else {
            console.error("Last name must be a non-empty string");
        }
    }
    set age(newAge){
        if(typeof newAge === "number" && newAge >=0 ) {
            this._age = newAge;
        }
        else {
            console.error("Age must be a positive number");
        }
    }
    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    get fullName(){ //still can add this Getter even if we don't have such property (pretending as it was)
        return this._firstName + " " + this.lastName;
    }
    get age(){
        return this._age;
    }
}
//const person1 = new Person(420, 69, "pizza"); //variables are inappropriate (we'll use setters again)
const person1 = new Person("Florence", "Welch", 37); //legitimate values now

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.fullName);
console.log(person1.age);
*/
//DESTRUCTURING
//Allows to extract value from arrays and objects, then assign them to variables in a convenient way
//"[]" is used to perform array destructuring
//"{}" to perform object destructuring
//Let's swap the value of 2 variables
/*
let a = 1;
let b = 2;

[a, b] = [b, a]; //[a, b] is destructuring
console.log(a, b); //2 and 1 (swapped)


//Swap 2 elements in array
const colours = ["red", "green", "blue", "black", "white"];

[colours[0], colours[4]] = [colours[4], colours[0]];

console.log(colours); // ["white", "green", "blue", "black", "red"]


//Assign array elements to variables
//arrayName = [firstElementName, secondElementName, ];
// [firstVariableName, secondVariableName, ... (if we want)] = arrayName; that's how we destruct the array and assign array elements to variables
const [firstColour, secondColour, thirdColour, ...extraColours] = colours; //for the rest 2 colours we used "rest" parameter (...) and called them as a new array ("extraColours")

console.log(firstColour);
console.log(secondColour);
console.log(thirdColour);
console.log(extraColours);


//Extract values from objects
const person1 = {
    firstName: "Florence",
    lastName: "Welch",
    age: 37,
    job: "Singer"
}
const person2 = {
    firstName: "Stefani",
    lastName: "Germanotta",
    age: 38,
  //job: "Singer" let's pretend there's no such property
}

const {firstName, lastName, age, job="unemployed"} = person2; //we can set a default value while destructuring (e.g. for job)
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);


//Destructure in function parameters
function displayPerson({firstName, lastName, age, job="unemployed"}){ //when the object is received, it's destructured within "{firstName, ...}" parameter
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}
displayPerson(person2); //let's pass "person1" object to the function
*/
//NESTED OBJECTS
//Objects inside of other objects
//Allows you to represent more complex data structures
//Person{Adress{}, ContactInfo{}}
//ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}
/*
const person = {
    fullName: "Florence Welch",
    age: 37,
    isSinger: true,
    hobbies: ["reading", "writing", "cooking"],
    address: {
        street: "God only knows...",
        city: "London",
        country: "Great Britain"
    }
}

console.log(person.fullName);
console.log(person.hobbies);
console.log(person.address); //returns an entire object
console.log(person.address.city); //in order to access the property of the nested class you must use "." again after its name

for(const property in person.address) { //to loop through nested object's properties
    console.log(person.address[property]);
}


class Person {
    constructor(name, age, ...address){ //rest parameter is used
        this.name = name;
        this.age = age;
        this.address = new Address(...address); //calling the constructor of "Address" class (spread operator used)
    }
}
class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Florence", 37, "Secret Street", 
                                           "London", 
                                           "Great Britain");

const person2 = new Person("Ann", 28, "Sunny Alley",
                                      "Milan",
                                      "Italy");

const person3 = new Person("Martin", 25, "Night Knight",
                                         "Montreal",
                                         "Canada");

console.log(person1.address.street);
console.log(person3.address.country);
*/
//ARRAYS OF OBJECTS
/*
const fruits = [{name: "apple", colour: "green", calories: 90},
                {name: "orange", colour: "orange", calories: 45},
                {name: "banana", colour: "red", calories: 105},
                {name: "coconut", colour: "white", calories: 159},
                {name: "pineapple", colour: "yellow", calories: 37}];

console.log(fruits[0].name); //first access the element and then the property as you always do

fruits.push({name: "grape", colour: "purple", calories: 62}); //adding an object
fruits.pop(); //removes the last object of the array
fruits.splice(1, 2); //.splice() removes the specified objects! (not .split() method)

fruits.forEach(fruit => console.log(fruit.name)); //arrow function meaning "for every 'fruit' do this (=>) console.log(fruit.propertyName)". Instead of "fruit" we could use "i" too, which means "for every 'i'..."

const fruitNames = fruits.map(fruit => fruit.name); //created a new array with .map() method and out of each fruit we picked their names
console.log(fruitNames);

const yellowFruits = fruits.filter(fruit => fruit.colour === "yellow");
console.log(yellowFruits);
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
console.log(lowCalFruits);

const maxCalFruit = fruits.reduce((currentMax, fruit) => 
                                   fruit.calories > currentMax.calories ? //ternary operator
                                   fruit : currentMax); //if true, return the new fruit, otherwise the current one remains
console.log(maxCalFruit.calories); //if you need calories and not the whole object
*/
//SORTING
//.sort() method is used to sort elements of an array in place. We sort them as strings in lexicographic order, not alphabetical.
//lexicographic = (alphabet + numbers + symbols) as strings
/*
let fruits = ["apple", "orange", "banana"];
let numbers = [5, 6, 2, 3, 1, 7, 4, 9, 8, 10];
const people = [{name: "Florence", age: 37}, 
                {name: "Stefani", age: 38}, 
                {name: "Elizabeth", age: 39}, 
                {name: "Adele", age: 36}];

fruits.sort();
console.log(fruits); //["apple", "banana", "orange"]

//numbers.sort();
//console.log(numbers); //[1, 10, 2, 3, 4, 5, 6, 7, 8, 9] meaning sorting by the first digit priority and then the second, so on... We treat them as strings, not numbers
numbers.sort((a, b) => a - b); //(a, b) means comparing the current and the next element of initial array (without swapping). (a - b) returns a negative 0 or a positive number
console.log(numbers); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.sort((a, b) => b - a); //for a reverse sorting/order
console.log(numbers);

people.sort((a, b) => a.age - b.age); //"a" is the 1st object, "b" is the 2nd. "a.age" will access its property, same with "b.age"
console.log(people); //Objects are sorted by their ages: 36, 37, 38, 39
people.sort((a, b ) => a.name - b.name);
console.log(people); //Adele, Florence, Stefani, Elizabeth (making no sense now). Use another formula for strings within the objects!
people.sort((a, b) => a.name.localeCompare(b.name)); //Adele, Elizabeth, Florence, Stefani
people.sort((a, b) => b.name.localeCompare(a.name)); //for a reverse option: Stefani, Florence, Elizabeth, Adele
*/
//SHUFFLE AN ARRAY
/*
const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']; //playing cards array
//Better to use Fisher-Yates algorithm instead of .sort() to shuffle cards
function shuffle(array) {
    for(let i = cards.length - 1; i >=0; i--){
        const random = Math.trunc(Math.random() * (i + 1)); //random index between the end and the beginning
        [array[i], array[random]] = [array[random], array[i]];
    }
}

shuffle(cards);
console.log(cards);
*/
//DATE OBJECTS
//Objects that contain values that represet dates and times
//These date objects can be changed and formatted
/*
let date = new Date(); //assigns your current time (we created "date" object, the "new Date()" is a constructor)
console.log(date); //current date and time

//Date(year, month /from 0 to 11, as arrays/, day, hour, minute, second, ms)
date = new Date(2024, 0, 1, 2, 3, 4, 5); //Mon Jan 01 2024 02:03:04 GMT+0300
console.log(date); //Mon Jan 01 2024 02:03:04 GMT+0300

date = new Date("2024-01-02T12:00:00Z"); //"T" stands for "time" and "Z" for the UTC time
console.log(date); //Tue Jan 02 2024 15:00:00 GMT+0300 since it's +0300 to ours

date = new Date(1700000000000); //ms since the epic date (date when computer thinks it started);
console.log(date); //Wed Nov 15 2023 01:13:20 GMT+0300

const year = date.getFullYear(); //gets the year of the "date"
console.log(year); //2023 (off the last "date" assignment)

const month = date.getMonth();
console.log(month); //10, since November is 10 and January is 0

const day = date.getDate(); //.getDate() is for numbers (of the month), but .getDay() will assign numbers of the week (1 for Monday, 2 for Tuesday, etc.)
console.log(day); //15

const hour = date.getHours();
console.log(hour); //1

const minutes = date.getMinutes();
console.log(minutes); //13

const seconds = date.getSeconds();
console.log(seconds); //20

date.setFullYear(2024);
date.setMonth(0);
date.setDate(1);
date.setHours(2);
date.setMinutes(3);
date.setSeconds(4);
console.log(date); //Mon Jan 01 2024 02:03:04 GMT+0300

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if(date2 > date1) {
    console.log("Happy New Year!");
}
*/
//CLOSURES
//A function defined inside of another function
//The inner function has access to the variables and scope of the outer function
//Allows for private variables and state maintenance
/*
function outer() {
    let message = "Hello";
    function inner(){ //has access to everything within "outer()"
        console.log(message);
    }
    inner();
}
message = "Goodbye"; //won't affect the "message" within "outer()"
outer(); //message will be shown if we invoke "inner()" within "outer()"


function increment(){
    let count = 0; //no state maintenance in this example (check out the example below)
    count++;
    console.log(`Count increased to ${count}`);
}

increment();
increment();
increment(); //"count" is still = 1, since it's initialised while invoking "increment()"


function createCounter(){
    let count = 0; 

    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }

    //return {increment} //{increment: increment} is the same, but full version for this line. We return object with the method of "increment"
    //let's add another function and modify what we return now
    function getCount(){
        return count;
    }
    return {increment, getCount}; //we added another property "getCount"
}

const counter = createCounter();

counter.increment(); //count = 1;
counter.increment(); //count = 2;
counter.increment(); //count = 3; Similar to invoking the class methods!

//counter.count = 0;
//console.log(count); //error: "count" is not defined
//console.log(counter.count); //undefined

console.log(`The current count is ${counter.getCount()}`);


function createGame(){ //Closure (now the code inside of it is enclosed for security)
    let score = 0;
    function increaseScore(points) {
        score += points;
        console.log(`+${points}pts`);
    }
    function decreaseScore(points) {
        score -= points;
        console.log(`-${points}pts`);
    }
    function getScore(){
        return score;
    }

    return({increaseScore, decreaseScore, getScore}); //additional code to return an object
}

const game = createGame();

game.increaseScore(5); //after enclosing the functions into the closure we must use "game" object
game.increaseScore(6);
game.decreaseScore(3);
console.log(`The final score is ${game.getScore()}pts`);
*/
//setTimeout() FUNCTION
//Allows to schedule the execution of a function after an amount of time (milliseconds)
//Times are approximated (values based on the workload of the JS runtime environment)
//Not for precise stuff (like stopwatch)
//setTimeout(callback, delay);
//clearTimeout(timeoutId) can cancel a timeout before it triggers
/*
function sayHello(){
    window.alert("Hello");
}

setTimeout(sayHello, 3000); //3 seconds delay
setTimeout(() => {window.alert("Hello")}, 5000); //anonymous function

let timeoutId = setTimeout(() => {window.alert("Hello")}, 9000);
clearTimeout(timeoutId); //nothing's gonna happen now


//let timeoutId; //needs to be declared, but has already been
function startTimer(){
    timeoutId = setTimeout(() => window.alert("Hello"), 4000);
    console.log("Started the timer");
}
function clearTimer(){
    clearTimeout(timeoutId);
    console.log("Cleared the timer");
}
*/
//DIGITAL CLOCK PROGRAM
//sale.html file involved
function updateClock() {
    const now = new Date(); //the current date is stored within this object
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "p.m." : "e.m.";
    hours = hours % 12 || 12; //"|| 12" means that if the remainder equals 0, then 12 will be showed instead
    hours = hours.toString().padStart(2, 0); //.toString() returns a string representation of an object, and .padStart(), as was previously learned, sets 2 characters for hours and it starts with "0", if only one character's used
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds}${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}
updateClock();
setInterval(updateClock, 1000); //will call the function repeatedly, where 1000 ms means every second
//STOPWATCH PROGRAM
const display = document.getElementById("display");
let timer = null; //"null" means no value
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if(!isRunning) { //if it's false
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10); //every 10 ms will be updated
        isRunning = true;
    }
}
function stop() {

}
function reset() {

}
function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime; //in milliseconds

    let hours = Math.trunc(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.trunc(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.trunc(elapsedTime / 1000 % 60);
    let milliseconds = Math.trunc(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, 0); //same as in the previous exercise
    minutes = String(minutes).padStart(2, 0);
    seconds = String(seconds).padStart(2, 0);
    milliseconds = String(milliseconds).padStart(2, 0);
    
    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}