
// Need to find all prime numbers from 1 to n.

// Any number which can only be divided by 1 and that number itself.
// 1, 2, 3, 5, 7, 11, 13, 17...
// 10 => 2, 3, 4, 5, 6, 7, 8, 9, 10

// First Loop to go from 1 to n.


// Function declaration and definition.
function printAllPrimeNumbers(n){
    // body of function.
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

// Call a function ?
// values for a parameters is know as Arguments.
printAllPrimeNumbers(100);
