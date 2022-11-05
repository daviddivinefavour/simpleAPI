export default (req, res) => {
  const resObject = {
    slackUsername: 'DDC',
    backend: true,
    age: 22,
    bio: 'My name is Divinefavour David, a nodejs backend developer. I love coding and find the concept of FP increasingly amazing. PS: I\'m a chowhound',
  };
  return res.status(200).send(resObject);
};
