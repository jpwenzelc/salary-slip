import {Employee} from '../src/model/employee';
import {generateSlipSalary} from "../src/generator";

describe('the salary generator', () => {

    let employee: Employee;

    it('should print for 5000 annual gross', () => {

        employee = {
            employeeId: 12345,
            employeeName: 'John J Doe',
            grossSalary: 5000
        };

        expect(generateSlipSalary(employee)).toBe(
            'Employee ID: 12345\n' +
            'Employee Name: John J Doe\n' +
            'Gross Salary: £416.67'
        );
    });

    it('should print for 9060 annual gross', () => {

        employee = {
            employeeId: 12345,
            employeeName: 'John J Doe',
            grossSalary: 9060
        };

        expect(generateSlipSalary(employee)).toBe(
            'Employee ID: 12345\n' +
            'Employee Name: John J Doe\n' +
            'Gross Salary: £755.00\n' +
            'National Insurance contributions: £10.00'
        );
    });

    it('should print for 12000 annual gross', () => {

        employee = {
            employeeId: 12345,
            employeeName: 'John J Doe',
            grossSalary: 12000
        };

        expect(generateSlipSalary(employee)).toBe(
            'Employee ID: 12345\n' +
            'Employee Name: John J Doe\n' +
            'Gross Salary: £1,000.00\n' +
            'National Insurance contributions: £39.40\n' +
            'Tax-free allowance: £916.67\n' +
            'Taxable income: £83.33\n' +
            'Tax Payable: £16.67'
        );
    });

});