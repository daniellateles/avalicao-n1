import { Router } from 'express'
import taskRoutes from './task/task.routes'
import authRoutes from './auth/auth.routes'
import postRoutes from './posts/post.routes'


const routes = Router()

routes.use('/posts', postRoutes)
routes.use('/task', taskRoutes)
routes.use('/auth', authRoutes)

export default routes