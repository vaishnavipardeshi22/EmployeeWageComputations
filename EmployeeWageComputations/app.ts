console.log("****************************** WELCOME TO EMPLOYEE WAGE COMPUTATION ******************************");

// CONSTANTS
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const EMP_WAGE_RATE_PER_HOUR = 20;
const NUM_WORKING_DAYS = 20;

var employeeHrs;
var totalSalary = 0;

// FOR LOOP TO GET MONTHLY WAGE OF EMPLOYEE
for (let days = 1; days <= NUM_WORKING_DAYS; days++) {
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

    // CALCULATE TOTAL SALRY FOR EMPLOYEE
    var salary = (employeeHrs * EMP_WAGE_RATE_PER_HOUR);
    totalSalary += salary;
}

console.log("Daily Employee Wage for " + employeeHrs + " Hours : " + totalSalary);
