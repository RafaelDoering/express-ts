import { Request, Response } from 'express';

import Todo from '../models/todo.model';

const todoController = {
  create: (req: Request, res: Response) => {
    const { text, done } = req.body;

    Todo.create({ text, done }, (err, createdTodo) => {
      if (err) {
        return res.status(400).json({ error: 'Não foi possível criar o To-Do.' });
      }

      return res.status(200).json(createdTodo);
    });
  },

  list: (req: Request, res: Response) => {
    Todo.find({}, (err, todos) => {
      if (err) {
        return res.status(400).json({ error: 'Não foi possível listar os To-Do\'s.' });
      }

      return res.status(200).json(todos);
    });
  },

  update: async (req: Request, res: Response) => {
    const { id } = req.params;
    const { text, done } = req.body;

    Todo.findByIdAndUpdate(id, { text, done }, (err, updatedTodo) => {
      if (err) {
        return res.status(400).json({ error: 'Não foi atualizar o To-Do.' });
      }

      return res.status(200).json(updatedTodo);
    });
  },

  del: async (req: Request, res: Response) => {
    const { id } = req.params;

    Todo.findByIdAndDelete(id, (err, deletedTodo) => {
      if (err) {
        return res.status(400).json({ error: 'Não foi possivel deletar o To-Do.' });
      }

      return res.status(200).json(deletedTodo);
    });
  },
};

export default todoController;
