//IF ANYTHING DOES NOT WORK, CONSIDER COMMENTING PARTS OF THE EXERCISES (MADE ALL TOGETHER)
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
        return this._firstName + " " + this._lastName;
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
/*
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
*/
//STOPWATCH PROGRAM
/*
const display = document.getElementById("display");
let timer; //"null" means no value, holds the ID of "setInterval" function
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
    if(isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}
function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
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
*/
//ES6 MODULES
//External files that contain reusable code that can be imported into other JS files
//Write reusable code for many different apps. Can contain variables, classes, functions, etc.
//Introduced as part of ECMAScript 2015 update
//Created mathUtil.js file within the current folder to import it
/*
import {PI, getCircumference, getArea, getVolume} from "./mathUtil.js"; //destructuring within {}

console.log(PI);

const circumference = getCircumference(10);
console.log(circumference.toFixed(2));
*/
//ASYNCHRONOUS CODE
//Synchronous code executes line by line consecutively in a sequential
//manner. Code that waits for an operation to complete
//Asynchronous code allows multiple operations to be performed concurrently
//without waiting. Doesn't block the execution flow and allows the program
//to continue (I/O operations, network requests, fetching data). Handled
//with: callbacks, promises, async/await
/*
//Synchronous code (line by line) example:
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
//Asynchronous code example:
setTimeout(() => console.log("Task 0"), 3000); //Task 0 will be finished after 3 seconds. Tasks 1-3 will be finished earlier


function f1(callback){ //asynchronous function
    setTimeout(() => {console.log("Task 0")
                      callback()}, 3000);

}
function f2(){ //will be executed after f1()
    console.log("Task 4");
    console.log("Task 5");
    console.log("Task 6");
}
f1(f2);
*/
//ERROR HANDLING
//Error is an object created to represent a problem that occurs
//often with user input or establishing a connection. Issues that 
//generate errors: network errors, promise rejection, security problems
/*
//console.lag("Hello"); //Uncaught TypeError (interrupts the flow, so the rest of the code won't be executed)
//console.log(x); //Uncaught ReferenceError (interrupts too)
//console.log("You've reached the end!");
//Handling errors with blocks (so, errors won't interrupt the rest of the code):
//try {} encloses code that might potentially cause an error
//catch {} catches and handles any thrown errors from "try {}"
//finally {} (optional) always executes. Used mostly for clean up
//e.g. close files, close connections, release resources
try { //encloses the potential problem
    console.log(x);
}
catch(error) { //catches from "try {}" and handles it
    console.error(error); //ReferenceError: x is not defined. Use "console.error" to highlight it
}
finally { //optional block (used whether an error occurs or not)
    console.log("This always executes");
}
console.log("You've reached the end!");


try {
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if(divisor == 0) {
        throw new Error("You can't divide by 0");
    }
    if(isNaN(dividend) || isNaN(divisor)) { //if these variables aren't numbers
        throw new Error("Values must be a number");
    }
    
    const result = dividend / divisor;
    console.log(result);
}
catch(error) {
    console.error(error);
}
console.log("You've reached the end again!");
*/
//CALCULATOR PROGRAM
/*
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = "";
}
function calculate(){
    try {
        display.value = eval(display.value); //eval() is kind of a calculator itself, which returns what you specify within "()"
    }
    catch (error) {
        display.value = "Error";
    }
}
*/
//DOM (DOCUMENT OBJECT MODEL)
//Object() that represents the page you see in the web browser and
//provides you with an API to Internet with it. Web browser constructs
//the DOM when it loads an HTML document and structures all the elements
//in a tree-like representation. JS can access the DOM to dynamically
//change the content, structure and style of a web page
/*
console.log(document); //shows the DOM in the console
console.dir(document); //(directory) shows all the properties of the object

//document.title = "How Big, How Blue, How Beautiful"; //accessed the "title" property and changed it
//document.body.style.backgroundColor = "hsl(241, 88%, 26%)";
const username = "sleeplessglory";
const welcomeMsg = document.getElementById("welcome-msg");
welcomeMsg.textContent += username === "" ? "Guest" : username;
*/
//ELEMENT SELECTORS
//Methods used to target and manipulate HTML elements that allow you to
//select one or multiple HTML elements from the DOM (Document Object Model)
//you can specify combinators alongside with the classes (e.g. ".slides img" for descendant combinator)
//document.getElementById() returns //element or null
//document.getElementByClassName()  //HTML collection
//document.getElementsByTagName()   //HTML collection
//document.querySelector()          //1st matching element or null
//document.querySelectorAll()       //nodelist (which has built-in methods) is static (they do not update automatically)
/*
const myHeading = document.getElementById("my-heading"); //if the ID is misspelled, the console shows "null"
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";
console.log(myHeading); //shows an HTML element with an inline CSS


let fruits = document.getElementsByClassName("fruits");
fruits[0].style.backgroundColor = "yellow"; //acesses the [0] index object (1st out of 3 <div> objects)

for (let fruit of fruits) {
    fruit.style.backgroundColor = "green"; //every <div> object's highlighted
}

//fruits.forEach(); //TypeError since HTML collections don't have .forEach() method
Array.from(fruits).forEach(fruit => { //Array.from() returns a new array, where we can use .forEach()
    fruit.style.backgroundColor = "gray";
});

console.log(fruits); //returns an HTML collection (3 <div> objects)


const h4Elements = document.getElementsByTagName("h4");
h4Elements[0].style.backgroundColor = "pink";

for (let h4Element of h4Elements) {
    h4Element.style.backgroundColor = "pink";
}

const liElements = document.getElementsByTagName("li");
for (let liElement of liElements) {
    liElement.style.fontSize = "1.2em";
    liElement.style.backgroundColor = "lightgreen";
}
//or we can turn these HTML collections into an array and use array methods
Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "pink";
});
Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "lightgreen";
    liElement.style.fontSize = "1.2em";
});

console.log(h4Elements); //returns an HTML collection (2 <h4> objects)
console.log(liElements);


const element = document.querySelector(".fruits"); //selects the 1st matching element with "fruits" class ("." is specified for it). Class or tag names can be selected
element.style.fontStyle = "italic"; //"Apple" has been modified

fruits = document.querySelectorAll(".fruits");
fruits[0].style.fontWeight = "bold"; //"Apple" is bold now
console.log(fruits); //shows a nodelist with built-in methods (no need to turn them into an array)

fruits.forEach(fruit => {
    fruit.style.backgroundColor = "lightgreen";
});
*/
//DOM NAVIGATION
//The process of navigating through the structure of an HTML document using JS
//HTML elements include but not limited to:
//.firstElementChild
//.lastElementChild
//.nextElementSibling
//.previousElementSibling
//.parentElement
//.children
/*
let element = document.getElementById("fruits"); //reference to this unordered list
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "lightgreen"; //highlights the "Apple"

let ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild; //first child of every <ul> element
    firstChild.style.backgroundColor = "yellow";
});


element = document.getElementById("desserts");
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "lightblue";

ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "lightblue";
});


element = document.getElementById("apple"); //if we choose "fruits" ID, it's gonna apply to the whole next (sibling) element ("vegetables")
nextSibling = element.nextElementSibling;
nextSibling.style.fontStyle = "italic"; //"orange" is now italic


element = document.getElementById("vegetables"); //the previous sibling is "fruits"
const prevSibling = element.previousElementSibling;
prevSibling.style.fontWeight = "bold";


element = document.getElementById("cake");
const parent = element.parentElement;
parent.style.fontStyle = "italic";


element = document.getElementById("vegetables");
const children = element.children; //returns an HTML collection
Array.from(children).forEach(child => { //we need to turn this collection into an array and go through each element
    child.style.fontSize = "1.4em";
});
//or we can access this HTML collection by an index number
children[1].style.backgroundColor = "pink"; //the 2nd child is highlighted now
*/
//ADD AND CHANGE HTML
/*
//1. Create the element
const newH1 = document.createElement("h1"); //specify the tag
//2. Add attributes/properties
newH1.textContent = "I like pizza!";
newH1.id = "newID"; //added an "id" attribute for it with the "newID" value
newH1.style.color="red"; //added a CSS property
newH1.style.textAlign = "center";
//3. Append element to DOM
//document.body.append(newH1); //the last child of <body> parent
//document.body.prepend(newH1); //the 1st child of <body> parent
document.getElementById("box2-id").append(newH1); //the last child of the 2nd box
document.getElementById("box3-id").prepend(newH1); //the 1st child of the 3rd box

const box2 = document.getElementById("box2-id");
document.body.insertBefore(newH1, box2); //.insertBefore(newElement, currentElement)
//Let's pretend that these boxes don't have IDs, then:
const boxes = document.querySelectorAll("box-class"); //nodelist is assigned to the variable
//document.body.insertBefore(newH1, boxes[1]); //before the 2nd box

//4. Remove the element
//document.body.removeChild(newH1); //if the <body> is parent
document.getElementById("box3-id").removeChild(newH1); //if this box is the parent


//1. Create the element
let newListItem = document.createElement("li");
//2. Add attributes/properties
newListItem.textContent = "Potatoes and mushrooms";
newListItem.id = "potatoes-mushrooms";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";
//3. Append element to DOM
document.body.append(newListItem);
document.getElementById("lunch").append(newListItem);
document.getElementById("lunch").prepend(newListItem);
const spaghetti = document.getElementById("spaghetti");
document.getElementById("lunch").insertBefore(newListItem, spaghetti);
//Let's pretend that lunch items do not have IDs, then:
const listItems = document.querySelectorAll("#lunch li"); //selects all the lists within the "lunch" ID
document.getElementById("lunch").insertBefore(newListItem, listItems[4]); //listItems is a nodelist (specify the index in order to apply anything)
//4. Remove the element
document.getElementById("lunch").removeChild(newListItem); //removes the new element (child)
*/
//MOUSE EVENTS
//eventListener listens for specific events to create interactive web pages
//These events include: click, mouseover (when we hover over) and mouseout (hover over and then leave it)
//.addEventListener(event, callback)
/*
const myBox = document.getElementById("myBox");
myBox.addEventListener("click", changeColor);
function changeColor(event) { //event is an object containing information about smth happening
    //console.log(event);
    event.target.style.backgroundColor = "tomato"; //"target" is what tag we clicked on the page
    event.target.textContent = "OUCH! 🤕";
}
//same can be written with function expressions:
//myBox.addEventListener("click", function(event){
//    event.target.style.backgroundColor = "tomato"; //"target" is what tag we clicked on the page
//    event.target.textContent = "OUCH! 🤕";
//});
//or arrow functions:
//myBox.addEventListener("click", event => {...}); //if only 1 parameter, no need to use ()
myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it! 😲";
});
myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me 😊";
});

//Do the same but with a button separately to alter the box
const clickButton = document.getElementById("click-button");
clickButton.addEventListener("click", changeColor);
function changeColor(event) {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH! 🤕";
}
clickButton.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it! 😲";
});
clickButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click Me 😊";
});
*/
//KEY EVENTS
//eventListener listens for specific events to create interactive web pages
//These events also include: keydown, keyup
//document.addEventListener(event, callback);
/*
document.addEventListener("keydown", event =>{ //when we press any key on the keyboard
    //console.log(event);
    //console.log(`Key down = ${event.key}`);
});
document.addEventListener("keyup", event => {
    //console.log(`Key up = ${event.key}`);
});


const keyBox = document.getElementById("keyBox");
document.addEventListener("keydown", event =>{ //when we press any key on the keyboard
    keyBox.textContent = "😲";
    keyBox.style.backgroundColor = "tomato";
});
document.addEventListener("keyup", event => {
    keyBox.textContent = "😊";
    keyBox.style.backgroundColor = "lightblue";
});

const moveAmount = 10;
let x = 0; //initial X-axis value;
let y = 0; //initial Y-axis value;
document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")) { //eventListener works only if the "event.key" starts with "Arrow" (left, up, right, down)
        event.preventDefault(); //won't be scrolling alongside with the slide bar, just on its own
        switch(event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
        keyBox.style.top = `${y}px`; //"top" property in pair with "relative" position value in CSS
        keyBox.style.left = `${x}px`; //"left" property in pair with "relative" position value in CSS
    }
});
*/
//HIDE OR SHOW HTML
/*
const hsButton = document.getElementById("hs");
const hbImg = document.getElementById("HBimg");

hsButton.addEventListener("click", event => {
    if(hbImg.style.visibility === "hidden") {
        hbImg.style.visibility = "visible";
        hsButton.textContent = "Hide";
    }
    else {
        hbImg.style.visibility = "hidden"; //hides the image, but still reserves its space, whereas "display: none" removes the image and its space too
        hsButton.textContent = "Show";
    }
});
*/
//NODELISTS
//Static collection of HTML elements by (id, class, element)
//Can be created by using .querySelectorAll()
//Similar to an array, but no .map(), .filter(), .reduce()
//NodeList won't update to automatically reflect changes in DOM:
//E.g. if you remove the element from the DOM, you need to separately remove it from NodeList too
/*
let buttons = document.querySelectorAll(".four-buttons");
console.log(buttons);

buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += "🐉";
});

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(213, 66%, 66%)";
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "hsl(213, 66%, 41%)";
    });
});

const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "four-buttons"; //"classList" is used when working with an element. Added the new button to the existing class
document.body.appendChild(newButton); //has the same CSS properties, since it's in the same class

console.log(buttons); //NodeList shows only 4 buttons without the 5th
buttons = document.querySelectorAll(".four-buttons"); //select them again to include the 5th button
console.log(buttons); //now all 5 buttons're within the NodeList

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove(); //removes the target (button) from the DOM
        buttons = document.querySelectorAll(".four-buttons"); //the NodeList is being updated too
        console.log(buttons);
    });
});
*/
//CLASSLISTS
//Element property in JS used to interact with an element's list of (CSS) classes
//Allows to make reusable classes for many elements across the web page
//add()
//remove(classOne, classTwo, ...) we can specify any amount of classes, so it removes if any found
//toggle(remove if present, add if not)
//replace(oldClass, newClass)
//contains()
/*
const myButton = document.getElementById("my-button");
myButton.classList.add("enabled"); //created a new class (not added to the existing like previously)
myButton.classList.remove("enabled"); //the new class is removed now

myButton.addEventListener("mouseover", event => {
    event.target.classList.add("btn-hov");
});
myButton.addEventListener("mouseout", event => {
    event.target.classList.remove("btn-hov");
});

myButton.addEventListener("mouseover", event => {
    event.target.classList.toggle("btn-hover"); //removes the class if present, adds if not
});
myButton.addEventListener("mouseout", event => {
    event.target.classList.toggle("btn-hover"); //removes the class if present, adds if not
});

myButton.classList.add("enabled");
myButton.addEventListener("click", event => {
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "🤡";
        event.target.classList.replace("disabled", "enabled");
    }
    else {
        event.target.classList.replace("enabled", "disabled");
    }
});


const newH1 = document.getElementById("newH1");
newH1.classList.add("enabled"); //added properties of another class to this element
newH1.addEventListener("click", event => {
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "🤡";
        event.target.classList.replace("disabled", "enabled");
    }
    else {
        event.target.classList.replace("enabled", "disabled");
    }
});


let buttons = document.querySelectorAll(".another4");
buttons.forEach(button => {
    button.classList.add("enabled");
});

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("btn-hov");
    });
});
buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("btn-hov");
    });
});
buttons.forEach(button => {
    button.addEventListener("click", event => {
        if(event.target.classList.contains("disabled")) {
            event.target.textContent += "👻";
        }
        else {
            event.target.classList.replace("enabled", "disabled");
        }
    });
});
*/
//ROCK PAPER SCISSORS GAME
/*
const choices = ["rock", "paper", "scissors"]; //the array index will be used for random choice of a computer
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.trunc(Math.random()*3)]; //computer randomly chooses the array value (indexes 0-2)
    console.log(computerChoice);
    let result="";

    if(playerChoice == computerChoice) {
        result = "IT'S A TIE!";
    }
    else {
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors" ? "YOU WIN!" : "YOU LOSE!");
                break;
            case "paper":
                result = (computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE!");
                break;
            case "scissors":
                result = (computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE!");
                break;
        }
    }
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;
    resultDisplay.classList.remove("greenText", "redText", "pinkText"); //removes any of the specified classes before the new game
    switch(result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        case "IT'S A TIE!":
            resultDisplay.classList.add("pinkText");
            break;
    }
}
*/
//IMAGE SLIDER
/*
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;
document.addEventListener("DOMContentLoaded", initialiseSlider); //after all the DOM content is loaded, initialise the slider

function initialiseSlider() {
    if(slides.length > 0) { //for NodeList if we have images, then show them
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000); //after 5s the nextSlide() will be invoked
    }
}
function showSlide(index){
    if(index >= slides.length){ //if we're on the last slide and press the "next" button
        slideIndex = 0; //set it to the 1st slide/image (according to the NodeList)
    }
    else if(index < 0) { //if we're on the 1st slide and press the "previous" button
        slideIndex = slides.length - 1; //set it to the last slide/image (according to the NodeList)
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide"); //removing the current displaySlide class to show the next image with it
    });
    slides[slideIndex].classList.add("displaySlide"); //adding this class to the next image (so, it shows on the web page)
}
function prevSlide(){
    clearInterval(intervalId); //stops the 5s rule and watch the image more
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    //won't use clearInterval() for the nextSlide() since it won't be looping at all
    slideIndex++;
    showSlide(slideIndex);
}
*/
//CALLBACK HELL
//Situation in JS where callbacks are nested within other callbacks to the
//degree where the code is difficult to read. It's an old pattern to handle
//asynchronous functions. Use Promises + async/await to avoid Callback Hell
/*
function task1(callback){
    setTimeout(() => {
        console.log("Task 1 complete");
        callback();
    }, 2000);
}
function task2(callback){
    setTimeout(() => {
        console.log("Task 2 complete");
        callback();
    }, 1000);
}
function task3(callback){
    setTimeout(() => {
        console.log("Task 3 complete");
        callback();
    }, 3000);
}
function task4(callback){
    setTimeout(() => {
        console.log("Task 4 complete");
        callback();
    }, 1500);
}
task1(() => { //This is Callback Hell! Nested callbacks within callbacks
    task2(() => {
        task3(() => {
            task4(() => console.log("All tasks complete"));
        })
    });
});
*/
//PROMISES
//An object that manages asynchronous operations. Wrap a Promise Object
//around {asynchronous code}. "I promise to return a value"
//PENDING -> RESOLVED or REJECTED
//new Promise((resolve, reject) => {asynchronous code})

//Do these chores in order:
//1. Walk the dog
//2. Clean the kitchen
//3. Take out the trash
/*
function walkDog(){
    return new Promise((resolve, reject) => { //returns a promise object
        setTimeout(() => {
            const dogWalked = true;
            if(dogWalked) {
                resolve("You walk the dog"); //resolve() function with its parameter
            }
            else {
                reject("You didn't walk the dog");
            }
        }, 1500);
    });
}
function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = false;
            if(kitchenCleaned) {
                resolve("You clean the kitchen");
            }
            else{
                reject("You didn't clean the kitchen");
            }
        }, 2500);
    });
}
function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = true;
            if(trashTakenOut) {
                resolve("You take out the trash");
            }
            else {
                reject("You didn't take out the trash");
            }
        }, 500);
    });
}
//walkDog(() => { //Callback Hell
//    cleanKitchen(() => {
//        takeOutTrash(() => console.log("You finished all the chores!"));
//    })
//})
walkDog().then(value => {console.log(value); return cleanKitchen();}) //method chaining
         .then(value => {console.log(value); return takeOutTrash();}) //method chaining
         .then(value => {console.log(value); console.log("You finished all the chores!")}) //method chaining
         .catch(error => console.error(error)); //in case any rejections will be caught, where error is the message specified accordingly for reject case
//After walkDog() is executed, then pass its value to the arrow function which shows it and also return the next function/chore, and so on...
//If any reject is being caught, the rest of the tasks won't be invoked later on
*/
//ASYNC/AWAIT
//Async makes a function return a promise
//Await makes an async function wait for a promise
//Allows you write asynchronous code in a synchronous manner
//Async doesn't have resolve or reject parameters
//Everything after Await is placed in an event queue
/*
function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if(dogWalked) {
                resolve("You walk the dog");
            }
            else {
                reject("You didn't walk the dog");
            }
        }, 1500);
    });
}
function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = false;
            if(kitchenCleaned) {
                resolve("You clean the kitchen");
            }
            else{
                reject("You didn't clean the kitchen");
            }
        }, 2500);
    });
}
function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = true;
            if(trashTakenOut) {
                resolve("You take out the trash");
            }
            else {
                reject("You didn't take out the trash");
            }
        }, 500);
    });
}
async function doChores(){
    try { //handling the errors if we encounter them
        const walkDogResult = await walkDog(); //await is used only within async functions!
        console.log(walkDogResult);
    
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
    
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
    
        console.log("You finished all the chores!");
    }
    catch(error) { //catches the error within "try"
        console.error(error);
    }
}
doChores();
*/
//JSON FILES
//JSON (Java Script Object Notation) data-interchange format
//Used for exchanging data between a server and a web application
//JSON files {key: value} OR [value1, value2, value3] OR [{}, {}, {}]

//JSON.stringify() converts a JS object/array to a JSON string
//JSON.parse() converts a JSON string to a JS object/array
/*
const names = ["Florence", "Elizabeth", "Stefani", "Adele"];
console.log(names);
let jsonString = JSON.stringify(names);
console.log(jsonString);

const person = {"name": "Florence", "age": 37, "isEmployed": true, "hobbies": ["singing", "cooking"]}
console.log(person);
jsonString = JSON.stringify(person);
console.log(jsonString);

const people = [{"name": "Florence", "age": 37, "isEmployed": true},
                {"name": "Elizabeth", "age": 39, "isEmployed": true},
                {"name": "Stefani", "age": 38, "isEmployed": true},
                {"name": "Adele", "age": 36, "isEmployed": true}]
console.log(people);
jsonString = JSON.stringify(people);
console.log(jsonString);


//In order to convert a JSON string to a JS object/array, use a pair of ` ` around them and .parse()
const jsonNames = `["Florence", "Elizabeth", "Stefani", "Adele"]`;
console.log(jsonNames);
let parsedData = JSON.parse(jsonNames);
console.log(parsedData);

const jsonPerson = `{"name": "Florence", "age": 37, "isEmployed": true, "hobbies": ["singing", "cooking"]}`
console.log(jsonPerson);
parsedData = JSON.parse(jsonPerson);
console.log(parsedData);

const jsonPeople = `[{"name": "Florence", "age": 37, "isEmployed": true},
                     {"name": "Elizabeth", "age": 39, "isEmployed": true},
                     {"name": "Stefani", "age": 38, "isEmployed": true},
                     {"name": "Adele", "age": 36, "isEmployed": true}]`
console.log(jsonPeople);
parsedData = JSON.parse(jsonPeople);
console.log(parsedData);


fetch("json/person.json") //the file directory specified
    .then(response => response.json()) //we'll be provided by response object which we convert into JSON format (response.json()) which returns a Promise
    .then(value => console.log(value))
//  .then(values => values.forEach(value => console.log(value))); if you wanna iterate through all the objects separately, use this line instead of the last
//  you can specify the properties of the objects (e.g. value.name or value.age)
    .catch(error => console.error(error)); //if rejections are detected
*/
//2D ARRAYS
//Multi-dimensional array that stores a matrix of data in rows and columns
//Useful for games, spreadsheets or representing images
/*
const matrix = [[1, 2, 3], 
                [4, 5, 6], 
                [7, 8, 9],
                ['*', 0, '#']];

for(let row of matrix) {
    const rowString = row.join(' ');
    console.log(rowString);
}

matrix[0][0] = 'X'; //[row][column]
matrix[0][1] = 'O';
matrix[0][2] = 'X';

matrix[1][0] = 'O';
martix[1][1] = 'X';
martix[1][2] = 'O';

martix[2][0] = 'X';
matrix[2][1] = 'O';
matrix[2][2] = 'X';
*/
//CONSOLE.TIME()
//Tool that allows to measure the time it takes for a section
//of code or process to execute. Great for identifying performance "bottlenecks"
//console.time("label"); to start measuring
//console.timeEnd("label"); to end measuring
/*
console.time("test"); //pass any label you want to identify the process
for (let i=0; i<1000000000; i++) {
    //do smth
}
console.timeEnd("test");


function loadData(){
    console.time("loadData");
    for(let i=0; i<1000000000; i++) {
        //pretend loading
    }
    console.timeEnd("loadData");
}
loadData();


function processData(){
    console.time("processData");
    for(let i=0; i<1000000; i++) {
        //pretend processing
    }
    console.timeEnd("processData");
}
processData();
*/
//FORMAT CURRENCY
//.toLocaleString() returns a string with a language 
//sensitive representation of a number

//Intl.NumberFormat() is another (advanced) way to format currency (to learn on my own)

//number.toLocaleString("locale", {options});
//'locale' specifies the language (undefined = default set in browsers)
//'options' is an object with formatting options
/*
let number = 123456.789;
number = number.toLocaleString("en-AU"); //English (Australia)
console.log(`Australian format: ${number}`);

number = number.toLocaleString("nl-NL");
console.log(`Dutch format: ${number}`);

number = number.toLocaleString("de-DE");
console.log(`German format: ${number}`);

number = number.toLocaleString(undefined);
console.log(`My format: ${number}`);

number = number.toLocaleString("de-DE", {style: "currency", currency: "EUR"});
console.log(`German format with currency: ${number}`);
*/
//JS COOKIES
//Small text file stored on your computer used to remember
//information about the user, saved in name=value pairs
/*
console.log(navigator.cookieEnabled); //returns true, meaning cookies're enabled

//document cookie property can hold more than 1 object
document.cookie = "firstName = sleeplessglory; expires = 11 November, 2024 12:00:00 UTC; path=/"; //default path is used, firstName is chosen as a type of cookie. An object, not a string
document.cookie = "age = 22; expires = 11 January 2024 12:00:00 UTC; path=/"; //won't be shown since expired
console.log(document.cookie);


//to overwrite use it again with another values
document.cookie = "firstName = Stefani; expires = 11 December, 2024 12:00:00 UTC; path=/"; //default path is used, firstName is chosen as a type of cookie. An object, not a string
document.cookie = "age = 38; expires = 28 March 2025 12:00:00 UTC; path=/";
console.log(document.cookie);


function setCookie(name, value, daysToLive) {
    const date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`; //pattern to assemble cookies (not manually)
}
setCookie("email", "random@gmail.com", 365);
console.log(document.cookie);


function deleteCookie(name){
    setCookie(name, null, null);
}
deleteCookie("email");
deleteCookie("firstName");
deleteCookie("age");
console.log(document.cookie);


setCookie("firstName", "Florence", 365);
setCookie("lastName", "Welch", 365);
function getCookie(name) {
    const cookieDecoded = decodeURIComponent(document.cookie);
    const cookieArray = cookieDecoded.split("; ");
    console.log(cookieArray);
    let result = null;

    cookieArray.forEach(element => {
        if(element.indexOf(name) == 0) {
            result = element.substring(name.length + 1); //substring of "firstName=Florence" element which returns "Florence" only
        }
    })
    return result;
}
console.log(getCookie("firstName")); //Florence
console.log(getCookie("lastName")); //Welch
console.log(document.cookie);


const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submit-button");
const cookieBtn = document.querySelector("#cookie-button");

submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
});
cookieBtn.addEventListener("click", () => {
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
});
*/
//FETCH DATA FROM AN API
