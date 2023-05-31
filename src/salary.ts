import { add, sub } from "./calculator";

const fullSalary: number = 3000;
const taxFeeOne: number = 300;
const taxFeeTwo: number = 200;
const taxFeeThree: number = 400;

let allFees: number = add(taxFeeOne, taxFeeTwo);
allFees = add(allFees, taxFeeThree);

let newSalary: number = sub(fullSalary, allFees);

console.log(`The value of the salary is: ${newSalary}`);
