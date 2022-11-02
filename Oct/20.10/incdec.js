// // // Inc and Dec opeerators.


// var a = 100;

// // Increament operators increase value by 1

// // pre-increament operator.
// // increament the value and then assign to result.
// // console.log(++a);
// // post-increament operator.
// // assign the value and then increament it.
// // console.log(a++);

// var b = ++a; // increaemnt value by 1.
// console.log("Value of b = "+b); // 101
// console.log("Value of a= "+a); // 101

// // a = 10
// var c = a++;
// console.log("Value of c = "+c); // 100 ?
// console.log("Value of a after c = "+a); // 101

var a = 100;

var b = ++a; // var b = a+1;   [Pre-increament] // 101.
b = a++ // var b = a; a=a+1; [Post-increament]
console.log(a); // 102
console.log(b); // 101 

