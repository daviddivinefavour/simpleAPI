import {
  failed,
  getOperator, solveArithmetic, success,
} from '../utils/libs';

const calculate = async (req, res) => {
  const data = req.body;

  if (!data.operation_type) {
    return failed(400)('No operator type')(res);
  }

  const operator = getOperator(data);
  const { x, y } = data;
  const result = await solveArithmetic(operator)(x)(y);
  const slackResponse = {
    slackUsername: 'DDC',
    result: result.data,
    operation_type: operator,
  };

  if (!result?.type) {
    return failed(400)('Invalid operator type')(res);
  }
  return success(slackResponse)(res);
};

export default calculate;
