const operationType = Object.freeze({
  add: 'addition',
  subtract: 'subtraction',
  multiply: 'multiplication',
});

const returnSchema = (type, data) => ({ type, data });

export const respond = (status) => (data) => (res) => res
  .status(status)
  .send(data);

export const getOperator = (data) => {
  const operator = data.operation_type;
  return operator.toLowerCase();
};

export const solveArithmetic = (operator) => (x) => (y) => {
  if (operator === operationType.add) {
    return returnSchema(true, x + y);
  }
  if (operator === operationType.subtract) {
    return returnSchema(true, x - y);
  }
  if (operator === operationType.multiply) {
    return returnSchema(true, x * y);
  }
  return returnSchema(false, 'Unknown operation');
};
