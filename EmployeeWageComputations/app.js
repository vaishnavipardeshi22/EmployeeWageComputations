console.log("****************************** WELCOME TO EMPLOYEE WAGE COMPUTATION ******************************");
// CONSTANTS
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const EMP_WAGE_RATE_PER_HOUR = 20;
const NUM_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 100;
var employeeHrs;
var totalSalary = 0;
var totalWorkingDays = 0;
var totalEmpHrs = 0;
// WHILE LOOP TO GET MONTHLY WAGE OF EMPLOYEE
while (totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < NUM_WORKING_DAYS) {
    totalWorkingDays++;
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
    // CALCULATE TOTAL EMPLOYEE HOURS
    totalEmpHrs += employeeHrs;
}
// CALCULATE TOTAL SALARY
totalSalary = (totalEmpHrs * EMP_WAGE_RATE_PER_HOUR);
console.log("Daily Employee Wage for " + employeeHrs + " Hours : " + totalSalary);
//# sourceMappingURL=app.js.map