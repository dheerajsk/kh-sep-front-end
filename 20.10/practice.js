

var x = 10;
var y = 20;

var z = x + y++; // z = x+y; y=y+1;
// console.log(z); // 30 , 31, [z=30]

// console.log(++z); // 31, 
var a = z++;
// console.log(x);  // 10, 
// console.log(a); // 31, 30
// console.log(z); // 31

// z = 31, x=10
// z = 11 + 31; 
// 42
// 32
// 42

// 1. ++x => x=11
// 2. + => 11+31 => 42
// 3. z++ => 31 => 32
// 4. z= 42.

z= ++x + z++ ;
// console.log(x); // 10, 11, 
// console.log(y); // 21, 20
console.log(z); // 43, 41, 31, 42,