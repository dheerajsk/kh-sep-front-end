

// Functions.
// Almost everything in JS is a function

// Closure => Child funcitons copy parent's data in their own scope.

function add(){
    var a = 10;
    var b=20
    console.log(a+b); // 30

    // Child/Inner function. [using params of parent.]
    var addNext =  function (c){
        console.log(a+b+c); // 60
    }
    return addNext;
}

// calling add function
const childFunction = add(); // call to parent.
// end of add function. a and b are not in memory.


childFunction(30); // call to child.

// Scope of a variable.
// 


function returnValue(){

    var c = 10;
    return c;
}

console.log(c);
const p = returnValue();
console.log(p);