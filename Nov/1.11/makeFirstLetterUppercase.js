

const str = "hello javascript";

// const firstchr = str[0].toUpperCase();
// console.log(firstchr);
// str[0]=firstchr;
// console.log(str);

// strings are immutable -> they can't change.

let newSTr = "";

for(let i=0; i<str.length; i++){
    if(i==0){
        var firestletter=str[i].toUpperCase();
        newSTr+=firestletter;
        continue;
    }
    newSTr+=str[i];
}
console.log(newSTr);
