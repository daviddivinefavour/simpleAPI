import stageOneRoutes from './stageOneRoutes.js';
import stageTwoRoutes from './stageTwoRoutes';

const routes = (app) => {
  app.use('/one', stageOneRoutes);
  app.use('/two', stageTwoRoutes);
  app.all('*', (req, res) => {
    res.status(404).send({ message: 'Url not found or have long been removed' });
  });
};

export default routes;
