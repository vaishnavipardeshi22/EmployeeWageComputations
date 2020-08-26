console.log('****************************** WELCOME TO EMPLOYEE WAGE COMPUTATION ******************************');

// CONSTANT

const IS_PRESENT = 1

// GENERATE RANDOM VALUE

let randomCheck = Math.round(Math.random());

// CHECK EMPLOYEE IS PRESENT OR ABSENT AND PRINT RESULT

if (randomCheck == IS_PRESENT)
    console.log("Employee is Present.");
else console.log("Employee is Absent.");