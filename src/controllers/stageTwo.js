import { operationType } from '../utils/libs';

const calculate = async (req, res) => {
  const data = req.body;

  if (!data) {
    return res.status(422).send({
      status: 400,
      error: {
        type: 'Bad Request',
        message: 'Empty request body',
      },
    });
  }
  return res.status(200).send(data);
};

export default calculate;
