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
let employeeCheck;

// FUNCTION TO GET WORKING HOURS
let getWorkingHours = (randomCheck: number) => {

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
}

// FUNCTION TO GET DAILY WAGE
let calcDailyWage = (employeeHrs: number) => {
	var dailyWage = employeeHrs * EMP_WAGE_RATE_PER_HOUR;
	console.log("Daily wage : " + dailyWage);
}
// WHILE LOOP TO GET MONTHLY WAGE OF EMPLOYEE
while (totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < NUM_WORKING_DAYS) {

	totalWorkingDays++;

	// CALCULATE TOTAL EMPLOYEE HOURS
	employeeCheck = getWorkingHours(Math.round(Math.random() * 10) % 3);
	totalEmpHrs += employeeHrs;
	var empDailyWage: Array<number> = [totalEmpHrs];
	calcDailyWage (employeeHrs);
}

// CALCULATE TOTAL SALARY
totalSalary = (totalEmpHrs * EMP_WAGE_RATE_PER_HOUR);
console.log("Monthly Employee Wage for " + totalEmpHrs + " Hours : " + totalSalary);
