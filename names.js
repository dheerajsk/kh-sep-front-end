

const names =["ABC", "PQR", "BDF", "DER", "UDB"];

const result = names.filter((name)=>{
   for(let i=0; i<name.length; i++){
    if(name[i]=='B'){
        return true;
    }
   }
});

console.log(result);