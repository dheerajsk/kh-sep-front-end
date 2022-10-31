
// string. => abc+1234+*&^%

var address="Street24, NYC";

// string is a set of characters/ collection of characters.
// traverse string based on index positions.
// index position=> position of inidividual chars in a collection.
// index always starts form 0.

var streetNumber=address[6]+address[7];
console.log(streetNumber);
console.log(address[12]);

// More operations.
// prebuilt properties and methods.

// 1. Find length of string.
console.log(address.length); // 13

// 2. Find last index in array.
console.log(address.length-1); // 12

// 3. Find index of any character in string.
console.log(address.indexOf("2")); // 6

// 4. Get Part of a string. Get NYC part of string.
console.log(address.slice(10, 13));

// 5. Replace characters in a string.

const replacedString = address.replace("NYC", "WA");
console.log(replacedString);

// 6. Convert to upper case and lowercase.
console.log(replacedString.toLowerCase());
console.log(replacedString.toUpperCase());

// 7. Trim operation.
let username=" john.doe "; // john.doe
console.log(username);
console.log(username.trim());

// 8. Concat.
const result = username.concat(address);
console.log(result);
