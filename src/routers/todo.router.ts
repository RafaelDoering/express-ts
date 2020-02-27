import { Router } from 'express';

import todoController from '../controllers/todo.controller';

const router = Router();

router.post('/', todoController.create);

router.get('/', todoController.list);

router.put('/:id', todoController.update);

router.delete('/:id', todoController.del);

export default router;
