interface MathOperation {
  operation(firstNumber: number, secondNumber: number): number;
}

export class Add implements MathOperation {
  operation(firstNumber: number, secondNumber: number): number {
    return firstNumber + secondNumber;
  }
}
export class Sub implements MathOperation {
  operation(firstNumber: number, secondNumber: number): number {
    return firstNumber - secondNumber;
  }
}

export class Multi implements MathOperation {
  operation(firstNumber: number, secondNumber: number): number {
    return firstNumber * secondNumber;
  }
}

export class Div implements MathOperation {
  operation(firstNumber: number, secondNumber: number): number {
    return firstNumber / secondNumber;
  }
}
