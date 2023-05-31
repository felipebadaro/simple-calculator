function add(firstNumber: number, secondNumber: number): void {
  const result: number = firstNumber + secondNumber;
  console.log(`The result of ${firstNumber} + ${secondNumber} is: ${result}`);
}

function sub(firstNumber: number, secondNumber: number): void {
  const result: number = firstNumber - secondNumber;
  console.log(`The result of ${firstNumber} - ${secondNumber} is: ${result}`);
}

function multi(firstNumber: number, secondNumber: number): void {
  const result: number = firstNumber * secondNumber;
  console.log(`The result of ${firstNumber} * ${secondNumber} is: ${result}`);
}

function div(firstNumber: number, secondNumber: number): void {
  const result: number = firstNumber / secondNumber;
  console.log(`The result of ${firstNumber} / ${secondNumber} is: ${result}`);
}

add(2, 2);
sub(1, 2);
multi(-1, 2);
div(4, 2);
