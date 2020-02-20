import {Employee} from './model/employee';
import formatter from './utils/formatter';

const NATIONAL_INSURANCE_THRESHOLD = 8060;
const TAX_THRESHOLD = 11000;

const calculateMonthlyValue = (grossSalary: number) => grossSalary / 12;

const printId = (id: number) => `Employee ID: ${id}\n`;

const printName = (name: string) => `Employee Name: ${name}\n`;

const printMonthlySalary = (salary: number) => `Gross Salary: ${generateMonthlySalary(salary)}`;

const generateMonthlySalary = (salary: number) => {
    let monthlyAmount: number = calculateMonthlyValue(salary);
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

function generateTaxFreeAllowance(salary: number) {
    let taxFreeAllowance = calculateMonthlyValue(salary) - ((salary - TAX_THRESHOLD) / 12);
    return formatter.numberToPound(taxFreeAllowance);
}

function printTaxFreeAllowance(salary: number) {
    return `\n` + `Tax-free allowance: ${generateTaxFreeAllowance(salary)}`;
}

function generateTaxableIncome(salary: number) {
    let taxableIncome = (salary - TAX_THRESHOLD) / 12;
    return formatter.numberToPound(taxableIncome);
}

function printTaxableIncome(salary: number) {
    return `\n` + `Taxable income: ${generateTaxableIncome(salary)}`
}

function generateTaxPayable(salary: number) {
    let taxPayable = ((salary - TAX_THRESHOLD) / 12) * .20;
    return formatter.numberToPound(taxPayable);
}

function printTaxPayable(salary: number) {
    return `\n` + `Tax Payable: ${generateTaxPayable(salary)}`;
}

function printTaxes(salary: number) {
    if (salary <= TAX_THRESHOLD) {
        // do nothing
        return "";
    }
    return printTaxFreeAllowance(salary) +
           printTaxableIncome(salary) +
           printTaxPayable(salary);
}

export function generateSlipSalary(employee: Employee) {
    return printId(employee.employeeId) +
           printName(employee.employeeName) +
           printMonthlySalary(employee.grossSalary) +
           printNationalInsuranceContribution(employee.grossSalary) +
           printTaxes(employee.grossSalary);
}