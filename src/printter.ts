import {
    generateMonthlySalary,
    generateNationalInsuranceContribution,
    generateTaxableIncome,
    generateTaxFreeAllowance,
    generateTaxPayable
} from './salary_generator'

const NATIONAL_INSURANCE_THRESHOLD = 8060;
const TAX_THRESHOLD = 11000;

export const printId = (id: number) => `Employee ID: ${id}\n`;

export const printName = (name: string) => `Employee Name: ${name}\n`;

export const printMonthlySalary = (salary: number) => `Gross Salary: ${generateMonthlySalary(salary)}`;

export function printNationalInsuranceContribution(salary: number) {
    return salary > NATIONAL_INSURANCE_THRESHOLD
        ? `\n` + `National Insurance contributions: ${generateNationalInsuranceContribution(salary)}`
        : "";
}

export function printTaxes(salary: number) {
    if (salary <= TAX_THRESHOLD) {
        // do nothing
        return "";
    }
    return printTaxFreeAllowance(salary) +
        printTaxableIncome(salary) +
        printTaxPayable(salary);
}

function printTaxFreeAllowance(salary: number) {
    return `\n` + `Tax-free allowance: ${generateTaxFreeAllowance(salary)}`;
}

function printTaxableIncome(salary: number) {
    return `\n` + `Taxable income: ${generateTaxableIncome(salary)}`
}

function printTaxPayable(salary: number) {
    return `\n` + `Tax Payable: ${generateTaxPayable(salary)}`;
}
