import { Router } from 'express';
import calculate from '../controllers/stageTwo';

const router = Router();
router.post('/solve', calculate);

export default router;
