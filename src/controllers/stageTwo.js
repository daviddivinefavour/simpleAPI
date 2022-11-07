import {
  failed,
  getOperator, solveArithmetic, solveWordProblem, success,
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
    result: result.result,
    operation_type: operator,
  };

  if (result?.type) {
    return success(slackResponse)(res);
  }

  const solution = await solveWordProblem(operator);

  if (solution?.type) {
    slackResponse.operation_type = solution.operation;
    slackResponse.result = solution.result;
    return success(slackResponse)(res);
  }
  return failed(422)(solution.result)(res);
};

export default calculate;
