console.log("****************************** WELCOME TO EMPLOYEE WAGE COMPUTATION ******************************");
// CONSTANTS
var IS_PART_TIME = 1;
var IS_FULL_TIME = 2;
var EMP_WAGE_RATE_PER_HOUR = 20;
var employeeHrs;
// GENERATE RANDOM VALUE
var randomCheck = Math.round(Math.random() * 10) % 3;
// CHECK EMPLOYEE IS PRESENT OR ABSENT AND GET EMPLOYEE HOURS
if (randomCheck == IS_PART_TIME)
    employeeHrs = 4;
else if (randomCheck == IS_FULL_TIME)
    employeeHrs = 8;
else
    employeeHrs = 0;
// CALCULATE DAILY WAGE FOR EMPLOYEE
var salary = (employeeHrs * EMP_WAGE_RATE_PER_HOUR);
console.log("Daily Employee Wage for " + employeeHrs + " Hours : " + salary);
