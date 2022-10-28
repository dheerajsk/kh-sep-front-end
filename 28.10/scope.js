

function printAllPrimeNumbers(n){
    // body of function.
    for(let i=4; i<=n; i++){
        // number in i
        // check if i is prime number.
        var isPrimeNumber=true;
        for(let j=2; j<i; j++){
            // if i can be divided by j, it is not a prime number.
            if(i%j==0){
                let k=0;
                isPrimeNumber=false;
                break;
            }
            console.log(k);
        }
        // console.log(j); // j is not defined.
        if(isPrimeNumber){
            // console.log(i);
        }
    }
    // console.log(i); // i is not defined.
    // console.log(j); // j is not defined.
    console.log(isPrimeNumber); // 

}
// console.log(isPrimeNumber);

printAllPrimeNumbers(5);


// Scope of variables.
// Scope=> lifetime of a variable.

// Scope of let => within declared block. [Block level scope .]
// Scope of var => within function block. [Function level scope.]