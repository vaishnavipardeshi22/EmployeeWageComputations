console.log("****************************** WELCOME TO EMPLOYEE WAGE COMPUTATION ******************************");

// CONSTANTS
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const EMP_WAGE_RATE_PER_HOUR = 20;

var employeeHrs;

// GENERATE RANDOM VALUE
let randomCheck = Math.round(Math.random() * 10) % 3;

// CHECK EMPLOYEE IS PRESENT OR ABSENT AND GET EMPLOYEE HOURS
switch (randomCheck) {
    case IS_FULL_TIME:
        employeeHrs = 8;
        break;
    case IS_PART_TIME:
        employeeHrs = 4;
        break;
    default:
        employeeHrs = 0;
        break;
}

// CALCULATE DAILY WAGE FOR EMPLOYEE
var salary = (employeeHrs * EMP_WAGE_RATE_PER_HOUR);
console.log("Daily Employee Wage for " + employeeHrs + " Hours : " + salary);
