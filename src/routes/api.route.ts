import { Router } from 'express';

import todosRoutes from './todos.route';

const router = Router();

router.use('/todos', todosRoutes);

export default router;
