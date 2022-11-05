import { Router } from 'express';
import stageOneController from '../controllers/stageOne';

const router = Router();

router.get('/info', stageOneController);

export default router;
