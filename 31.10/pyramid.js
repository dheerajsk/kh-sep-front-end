const printStarperamid = (n)=>{
    // outerloop
    for (let i = 1; i <= n; i++) {
      let star="";
      // printing spaces
      for (let j = n-1; j >=i; j--) {
        star += " ";
      }
      
      // printing star
      for (let k = 1; k <=i; k++) {
        star += " *";
      }

      console.log(star);
    }
   
   

}
printStarperamid(5);