
// *
// **
// ***
// ****
// *****

const printStars = n =>{
    // Loop is for traversing lines.
    for(let i=1; i<=n; i++){
        let stars="";
        // Inner loop.
        // *****
        // Creating stars on each line.
        for(let j=1; j<=i; j++){
        //  stars=stars+"*";
            stars+="*";
        }
        console.log(stars);
    }
}

printStars(5);

// when n = 5
//     *
//    * *
//   * * *
//  * * * *
// * * * * *