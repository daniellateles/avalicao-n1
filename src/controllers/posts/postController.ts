import Post from "../../models/post-entity"
import { Request, Response } from 'express';

export default class PostController {

    static async store (req: Request, res: Response) {
        const { title, content } = req.body
        const { userId } = req.headers
    
        if (!userId) return res.status(401).json({ error: 'Usuário não autenticado' })
    
        if (!title) {
          return res.status(400).json({ error: 'O título é obrigatório' })
        }
    
        const post = new Post()
        post.title = title
        post.content = content ?? false
        post.userId = Number(userId)
        await post.save()
    
        return res.status(201).json(post)
      }
    

    static async index(req: Request, res: Response) {
        const post = await Post.find()
        return res.json(post)
    }

    static async show(req: Request, res: Response) {
        const { id } = req.params

        if (!id || isNaN(Number(id))) {
            return res.status(400).json({ error: 'O id é obrigatório' })
        }

        const post = await Post.findOneBy({ id: Number(id) })
        return res.json(post)
    }

    static async delete(req: Request, res: Response) {
        const { id } = req.params

        if (!id || isNaN(Number(id))) {
            return res.status(400).json({ error: 'O id é obrigatório' })
        }

        const post = await Post.findOneBy({ id: Number(id) })
        if (!post) {
            return res.status(404).json({ error: 'Post não encontrado' })
        }

        await post.remove()
        return res.status(204).json()
    }


    static async update(req: Request, res: Response) {
        const { id } = req.params
        const { title, content, author } = req.body

        if (!id || isNaN(Number(id))) {
            return res.status(400).json({ error: 'O id é obrigatório' })
        }

        const post = await Post.findOneBy({ id: Number(id) })
        if (!post) {
            return res.status(404).json({ error: 'Post não encontrado' })
        }

        post.title = title || post.title
        post.content = content || post.content
        post.author = author || post.author
        await post.save()

        return res.json(post) // Vamos retornar a task atualizada
    }
}
