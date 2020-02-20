import {Employee} from './model/employee';
import formatter from './utils/formatter';

const calculateMonthlyValue = (grossSalary: number) => grossSalary / 12;

const generateMonthlySalary = (grossSalary: number) => {
    let monthlyAmount: number = calculateMonthlyValue(grossSalary);
    return formatter.numberToPound(monthlyAmount);
};

export function generateSlipSalary(employee: Employee) {
    return `Employee ID: ${employee.employeeId}\n` +
        `Employee Name: ${employee.employeeName}\n` +
        `Gross Salary: £` + generateMonthlySalary(employee.grossSalary);
}