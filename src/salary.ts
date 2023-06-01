import { Add, Sub } from "./calculator";
import { showMessage } from "./message";

const fullSalary: number = 3000;
const taxFeeOne: number = 300;
const taxFeeTwo: number = 200;
const taxFeeThree: number = 400;

const add: Add = new Add();
const sub: Sub = new Sub();
let allFees: number = add.operation(taxFeeOne, taxFeeTwo);
allFees = add.operation(allFees, taxFeeThree);

let newSalary: number = sub.operation(fullSalary, allFees);

const message: any[] = [`The value of the salary is:`, newSalary];

showMessage(message);
