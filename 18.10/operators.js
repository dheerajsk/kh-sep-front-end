
// Arithmatic operators.
// +, -, *, /, %

var num1 = 20;
var num2 = 10;
console.log(num1+num2); // Addition => 30

console.log(num1-num2); // Substraction => 10

console.log(num1*num2); //Multiplication => 200

console.log(num1/num2); // Division => 2

console.log(num1%num2); // Mod => 0

// Assignment operators.

var x = 20;
var y=x;
console.log(y);
console.log(x);

// +=
x+=10; // x = x+10;
console.log(x);
x-=10 // x = x-10;
console.log(x); // 20
x*=10 // x = x*10; => 200
// console.log(x); // ? 200, 
x/=10; // x = x/10
console.log(x); // ? 20, 


// Comparision Operators. (true/false)
// uber
    // make a request for a cab.
    // sends requests to nearby drivers.
    // millions of drivers.
    // compare driver's location with my location
    // within 5-10kms, send request to driver.
    // driver is idle and not on leave.

var myLocation="Pune, India";
var driverXLcoation="London";

// Equal to. (==)
console.log(myLocation==driverXLcoation); // false

// Not Euqal to (!=)
console.log(myLocation!=driverXLcoation); // true

// GreaterThan (>)

var driverXDistance=5;
console.log(driverXDistance>5);
console.log(driverXDistance<5);
console.log(driverXDistance>=5); // equal to and greater than
console.log(driverXDistance<=5); // true

// Equal To (===)
console.log(myLocation==driverXLcoation); // false
console.log(myLocation===driverXLcoation); // false

// What exactly we are coparing.
// while comparing 2 or more variables. 1. value inside variable. 2. datatype of variables.

x = 10; // value => 10, datatype => number.
y = "10"; // value => 10, dataType => string.
console.log(x==y); // true. because it compares only value inside variables.
console.log(x===y); // false. brcause values are same but datatypes are different

x = 1; // number
y=true; // boolean
console.log(x==y); // true. // for comparing just value
console.log(x===y); // false. // for comparing values and datatype both.

// Converting boolean to a number, Number is a function to convert anytype to a number.
console.log(Number(y)); // 1

x="X";
y="Y";
console.log(x===y); // false.

x="1";
console.log(typeof x); // string
x = Number(x);
console.log(typeof x); // number