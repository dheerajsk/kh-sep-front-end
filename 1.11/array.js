
var x=10; // 1 value.
var str="Hello JS"; // 1 value

// How do we store multiple values with single variable.
// Ans: Array.

// Array is colleciton fo values.
// array of numbers.

// Array - Collection of numbers.
var numbers = [10, 20, 30, 40, 50, 60, 70];

// Array of strings.
var names =["Jake", "Khushboo", "Osborne", "Robbie", "Simon"];


// Array of values of different data types.
var mixedArray = [10, 20, "Jake", true, undefined, false, (x)=>{x*x}];

// How to read/access values from Array.
// Using index positions.
console.log(mixedArray[1]);
console.log(mixedArray[4]);

// How to assign value at specific position.

mixedArray[4]=50;
console.log(mixedArray[4]);


// How to add a new element in array. (at the end of array)
numbers.push(80);
console.log(numbers);

// How to remove an element from array. (form end of array)
numbers.pop();
console.log(numbers);

// How to add a new element at start of array.
numbers.unshift(80);
console.log(numbers);

// How to remove element from start of the array.
numbers.shift();
console.log(numbers);

// How to add an element at index 3.
numbers.splice(3, 0, 100);
console.log(numbers);

// How to delete an element at index 2.
numbers.splice(2, 2, -30, -100);
console.log(numbers);

// How to find an element in array.

// function findHelper(num){
//     return num==40;
// }

// takes function as parameter. calls that function for each element in array.
const result = numbers.find((num)=>{return num==40});
console.log(result);

// [10, 20, 30, 40, 50, 60, 70];


// How to find multiple elements.

const filterResult = numbers.filter((num)=> {return num>50});
console.log(filterResult);

// [10, 20, 30, 40, 50, 60, 70];
// [60, 70]

// function filterHelper(num){
//     return num>50;
// }

// filterHelper(10); // false
// filterHelper(20); // false
// filterHelper(30); // false
// filterHelper(40); // false
// filterHelper(50); // false
// filterHelper(60); // true
// filterHelper(70); // true


var names =["Jake", "Khushboo", "Osborne", "Robbie", "Simon"];

// Write a program to find all the names having 'b' character in it

const namesResult = names.filter((username)=>{
    for(let i=0; i<username.length; i++){
        if(username[i]=="b"){
            return true;
        }
    }
    return false;
});


console.log(namesResult);



// Find all odd numbers form given collection using filter method.