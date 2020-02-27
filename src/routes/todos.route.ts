import { Router, Request, Response } from 'express';

const router = Router();

router.post('/', (req: Request, res: Response) => res.status(200).json('POST todos'));

router.get('/', (req: Request, res: Response) => res.status(200).json('GET todos'));

router.put('/:id', (req: Request, res: Response) => res.status(200).json('PUT todos'));

router.delete('/:id', (req: Request, res: Response) => res.status(200).json('DELETE todos'));

export default router;
