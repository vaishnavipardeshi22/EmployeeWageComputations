console.log("****************************** WELCOME TO EMPLOYEE WAGE COMPUTATION ******************************");

// CONSTANTS
const IS_PRESENT = 1
const EMP_WAGE_RATE_PER_HOUR = 20

var employeeHrs;

// GENERATE RANDOM VALUE
let randomCheck = Math.round(Math.random());

// CHECK EMPLOYEE IS PRESENT OR ABSENT AND GET EMPLOYEE HOURS
if (randomCheck == IS_PRESENT)
    employeeHrs = 8
else employeeHrs = 0

// CALCULATE DAILY WAGE FOR EMPLOYEE
var salary = (employeeHrs * EMP_WAGE_RATE_PER_HOUR);
console.log("Daily Employee Wage for " + employeeHrs + " Hours : " + salary);
