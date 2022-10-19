
// What is DataType ?
    // strings, numbers, boolean, undefined.

// Indicates type of data

// Dynamically typed => JS, Python
var x = 10;
console.log(x);
// to find out data type of a variable.
console.log(typeof x);

var isTrue = true;
console.log(typeof isTrue);

var name = "John Doe";
console.log(typeof name);

// objects
// stores data in key:value pair.
var employee = {id:1, name:"John Doe", age:35}
console.log(employee);
console.log(typeof employee);

// undefined. => no idea what this is.
var z=undefined;

console.log(z);
console.log(typeof z);
console.log(typeof z);


// function.

// it can perform addition of 2 numbers.
// set of instructions to execute a task.
// it needs 2 numbers.
// it has 2 parameters to accept 2 numbers
// service provider
    // takes some inputs, provides result for them.
function bank(accountNo){
    return "services";
}

// parameters are expectations of a function.
function add(a, b){
    return a+b;
}

// how to call a function and provide them input they need ?
// Syntax: functionName(argument1, arg2, arg3....argn);
bank(234567890);
add(2,4)

// var add = function()
// parmaters => what function expects from a caller.
// arguments => what caller passes to functions while calling them.

function print(greeting, message){
    console.log(greeting+message);
}

console.log(typeof print);

// we are passing 2 arguments to print function while calling it.
print("Hello", "How are you ?");



// string name="John Doe"; // Statically Typed 
// bool isTrue = true;


// DataTypes
// number, boolean, string, function, object, and undefined.

// boolean (true, false)

// mod operators.
var isEven = 5%2==0;
console.log(isEven);

// if(are crednetials correct)
// if(any driver has picked the request)
// allocate driver to rider.


// create a function multiple first 2 numbers and divide the reuslt by 3rd number.
// 4, 5, 2 => 20/2 => 10.

