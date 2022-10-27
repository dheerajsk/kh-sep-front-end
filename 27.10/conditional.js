

// Facebook will allow access if creds are correct else gives error message.

// in facebook system
let username="john.doe";
let password="Password123";

let providedUsername="john.doe";
let providedPassword="Password123";

const isUserAlreadyLoggedIn=true;

const result = username==providedUsername && password==providedPassword; // true or false.

// if expression to check if result is true or false and take actions accordingly.
if(result){
    // body of if condtition.
    // this will execute when result is true.
    console.log("Access is Granted");
}
else if(isUserAlreadyLoggedIn){
    console.log("Access is Granted as user is already logged in");
}
else
{
    console.log("Incorrect Credentials");
}


