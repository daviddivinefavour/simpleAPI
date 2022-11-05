import { getOperator, respond, solveArithmetic } from '../utils/libs';

const calculate = async (req, res) => {
  const data = req.body;

  if (!data.operation_type) {
    return res.status(422).send({
      status: 400,
      error: {
        type: 'Bad Request',
        message: 'Empty request body',
      },
    });
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
    return respond(422)(result?.data)(res);
  }
  return respond(200)(slackResponse)(res);
};

export default calculate;
