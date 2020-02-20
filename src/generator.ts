import {Employee} from "./model/employee";
import {printId, printMonthlySalary, printName, printNationalInsuranceContribution, printTaxes} from "./printter";

export function generateSlipSalary(employee: Employee) {
    return printId(employee.employeeId) +
        printName(employee.employeeName) +
        printMonthlySalary(employee.grossSalary) +
        printNationalInsuranceContribution(employee.grossSalary) +
        printTaxes(employee.grossSalary);
}