import {Employee} from './model/employee';
import formatter from './utils/formatter';

const NATIONAL_INSURANCE_THRESHOLD = 8060;

const calculateMonthlyValue = (grossSalary: number) => grossSalary / 12;

const printId = (id: number) => `Employee ID: ${id}\n`;

const printName = (name: string) => `Employee Name: ${name}\n`;

const printMonthlySalary = (salary: number) => `Gross Salary: ${generateMonthlySalary(salary)}`;

const generateMonthlySalary = (grossSalary: number) => {
    let monthlyAmount: number = calculateMonthlyValue(grossSalary);
    return formatter.numberToPound(monthlyAmount);
};

function generateNationalInsuranceContribution(salary: number) {
    let nationalInsuranceTax = (salary - NATIONAL_INSURANCE_THRESHOLD) * .01; // 12% divided in 12 months
    return formatter.numberToPound(nationalInsuranceTax);
}

function printNationalInsuranceContribution(salary: number) {
    return salary > NATIONAL_INSURANCE_THRESHOLD
        ? `\n` + `National Insurance contributions: ${generateNationalInsuranceContribution(salary)}`
        : "";
}

export function generateSlipSalary(employee: Employee) {
    return printId(employee.employeeId) +
           printName(employee.employeeName) +
           printMonthlySalary(employee.grossSalary) +
           printNationalInsuranceContribution(employee.grossSalary);
}