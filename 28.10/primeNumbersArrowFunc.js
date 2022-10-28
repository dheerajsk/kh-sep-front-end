

// Arrow Function.
// Syntax
// doesnt need function keyword.
// (<parameters>)=> {// body of function.}
// () brackets not needed if just one parameters


const primeNumber = n=>{
    for(let i=4; i<=n; i++){
        // number in i
        // check if i is prime number.
        let isPrimeNumber=true;
        for(let j=2; j<i; j++){
            // if i can be divided by j, it is not a prime number.
            if(i%j==0){
                isPrimeNumber=false;
                break;
            }
        }
        if(isPrimeNumber){
            console.log(i);
        }
    }
}
primeNumber(100);

// {} not required if body has just one statement.
const add = (a, b) => a+b;

console.log(add(5, 4));


// Write a program using arraow function to print traingle of stars.
// *
// **
// ***
// ****
// *****

// n=5