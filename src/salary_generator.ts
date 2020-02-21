import formatter from "./utils/formatter";

const NATIONAL_INSURANCE_THRESHOLD = 8060;
const TAX_THRESHOLD = 11000;

const calculateMonthlyValue = (grossSalary: number) => grossSalary / 12;

export const generateMonthlySalary = (salary: number) => {
    let monthlyAmount: number = calculateMonthlyValue(salary);
    return formatter.numberToPound(monthlyAmount);
};

export const generateNationalInsuranceContribution = (salary: number) => {
    let nationalInsuranceTax = (salary - NATIONAL_INSURANCE_THRESHOLD) * .01; // 12% divided in 12 months
    return formatter.numberToPound(nationalInsuranceTax);
};

export const generateTaxFreeAllowance = (salary: number) => {
    let taxFreeAllowance = calculateMonthlyValue(salary) - ((salary - TAX_THRESHOLD) / 12);
    return formatter.numberToPound(taxFreeAllowance);
};

export const generateTaxableIncome = (salary: number) => {
    let taxableIncome = (salary - TAX_THRESHOLD) / 12;
    return formatter.numberToPound(taxableIncome);
};

export const generateTaxPayable = (salary: number) => {
    let taxPayable = ((salary - TAX_THRESHOLD) / 12) * .20;
    return formatter.numberToPound(taxPayable);
};

