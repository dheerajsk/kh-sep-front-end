
// Logical Operators.

// Facebook login.

// 1. go to facebook.com
// 2. [1. User is not logged in] [2. User is alreaddy loggedIn]


// 1. Credentials must be correct to be bale to see news feed.

// username, password.

// when username AND password both matches. => news feed.
// OR
// user is already logged in. => news feed.

var username=getUsernamefromDB();
var password=getPasswordfromDB();

var usernameIsCorrect = username=="johndoe";
var PasswordIsCorrect = password=="Password";
// console.log(usernameIsCorrect); // ? true, johndoe
// console.log(PasswordIsCorrect); // ? true 

var bothCredsAreCorrect = usernameIsCorrect && PasswordIsCorrect;
// console.log(bothCredsAreCorrect);

// AND returns true only when both the expressions return true.
// console.log(username=="johndoe" && password=="Password");

var isUserAlreadyLoggedIn = true;

// OR operator returns true if any of the 2 expression returns true.

// console.log(bothCredsAreCorrect || isUserAlreadyLoggedIn); // ? false.

var x = 10;
var y=20;
var z=30;

console.log(x==y && y>z);  // ? false.
console.log(x==y || y>z); // ? false

console.log(x>=y && y<z); // false, 
console.log(x>=y || y<z); // ? true

console.log(x<z || y>x); // ? true, 
console.log(x<z && y>x); // ? true


function getUsernamefromDB(){
    return "johndoe";
}

function getPasswordfromDB(){
    return "johndoe";
}