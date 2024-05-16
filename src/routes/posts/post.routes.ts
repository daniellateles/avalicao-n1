// src/routes/userRoutes.ts
import { Router } from 'express';
import postController from '../../controllers/posts/postController';
import authMiddleware from '../../middlewares/auth.middleware';

const postsRouter = Router();
// Rota para registro de usuário

postsRouter.get('/', authMiddleware, postController.index)

postsRouter.post('/', authMiddleware, postController.store)

postsRouter.get('/:id', authMiddleware, postController.show)

postsRouter.delete('/:id', authMiddleware, postController.delete)

postsRouter.put('/:id', authMiddleware, postController.update)

export default postsRouter;


