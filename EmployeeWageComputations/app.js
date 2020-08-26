console.log('****************************** WELCOME TO EMPLOYEE WAGE COMPUTATION ******************************');
// CONSTANT
var IS_PRESENT = 1;
// GENERATE RANDOM VALUE
var randomCheck = Math.round(Math.random());
console.log(randomCheck);
// CHECK EMPLOYEE IS PRESENT OR ABSENT AND PRINT RESULT
if (randomCheck == IS_PRESENT)
    console.log("Employee is present.");
else
    console.log("Employee is absent.");
