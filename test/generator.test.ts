import {Employee} from '../src/model/employee';
import {generateSlipSalary} from '../src/generator';

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

});