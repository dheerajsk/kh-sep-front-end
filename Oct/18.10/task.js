
// write a function which takes 3 numbers as parameters.
// it multiplies first 2 numbers and divide the result by 3rd number.

function evaluateExpression(num1, num2, num3){
    const multiplicationResult = num1*num2;
    const finalResult = multiplicationResult/num3;
    console.log(finalResult);
}

evaluateExpression(7, 5, 5);