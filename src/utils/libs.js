const operationType = Object.freeze({
  add: 'addition',
  subtract: 'subtraction',
  multiply: 'multiplication',
});

const possibleOperators = ['add', 'plus', 'sum', 'minus', 'subtract', 'multiply', 'product'];

const returnSchema = (type, result, operation) => ({ type, result, operation });

const getNumber = (arr) => {
  const numbers = [];

  arr.forEach((element) => {
    const index = arr.indexOf(element);
    if (/^\d+$/.test(element)) {
      numbers.push(element);
      if (index > -1) {
        arr.splice(index, 1);
      }
    }
  });
  return numbers;
};

const getWordOperator = (arr) => {
  let matches;
  arr.forEach((e) => {
    possibleOperators.forEach((item) => (item === e ? matches = item : matches = matches));
  });
  return matches;
};

export const failed = (status) => (message) => (res) => res
  .status(status)
  .send({ Error: message });

export const success = (data) => (res) => res
  .status(200)
  .send(data);

export const getOperator = (data) => {
  const operator = data.operation_type;
  return operator.toLowerCase();
};

export const solveArithmetic = (operator) => (x) => (y) => {
  if (operator === operationType.add) {
    return returnSchema(true, x + y, operator);
  }
  if (operator === operationType.subtract) {
    return returnSchema(true, x - y, operator);
  }
  if (operator === operationType.multiply) {
    return returnSchema(true, x * y, operator);
  }
  return returnSchema(false, 'Unknown operation');
};

export const solveWordProblem = (wordProblem) => {
  const arr = wordProblem.split(' ');
  const numbers = getNumber(arr);
  const operator = getWordOperator(arr);
  if (operator === 'add' || operator === 'sum' || operator === 'plus') {
    return solveArithmetic('addition')(parseInt(numbers[0]))(parseInt(numbers[1]));
  }
  if (operator === 'minus' || operator === 'subtract') {
    return solveArithmetic('subtraction')(parseInt(numbers[0]))(parseInt(numbers[1]));
  }
  if (operator === 'product' || operator === 'multiply') {
    return solveArithmetic('multiplication')(parseInt(numbers[0]))(parseInt(numbers[1]));
  }
  return returnSchema(false, 'Unknown operation');
};
