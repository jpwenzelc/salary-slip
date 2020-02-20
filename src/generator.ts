import {Employee} from './model/employee';
import formatter from './utils/formatter';

const calculateMonthlyValue = (grossSalary: number) => grossSalary / 12;

const generateMonthlySalary = (grossSalary: number) => {
    let monthlyAmount: number = calculateMonthlyValue(grossSalary);
    return formatter.numberToPound(monthlyAmount);
};

function printId(id: number) {
    return `Employee ID: ${id}\n`;
}

export function generateSlipSalary(employee: Employee) {
    return printId(employee.employeeId) +
        `Employee Name: ${employee.employeeName}\n` +
        `Gross Salary: £` + generateMonthlySalary(employee.grossSalary) +
        (employee.grossSalary > 8060
        ? "Higher"
        : "");
}