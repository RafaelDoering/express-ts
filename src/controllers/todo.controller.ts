import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import Todo from '../models/todo.model';

let todos = [];

const todoController = {
  create: (req: Request, res: Response) => {
    const { text, done } = req.body;

    const createdTodo = new Todo(uuidv4, text, done);

    todos.push(createdTodo);

    return res.status(200).json(createdTodo);
  },

  list: (req: Request, res: Response) => {
    return res.status(200).json(todos);
  },

  update: (req: Request, res: Response) => {
    const { id } = req.params;
    const { text, done } = req.body;

    todos = todos.map((todo: Todo) => {
      console.log(todo);
      if (todo.id === id) {
        return new Todo(todo.id, text, done);
      }
      return todo;
    });

    return res.status(200).json('To-Do atualizado com sucesso.');
  },

  del: async (req: Request, res: Response) => {
    const { id } = req.params;

    todos.splice(todos.indexOf((todo) => todo.id === id), 1);

    return res.status(200).json('To-Do apagado com sucesso.');
  },
};

export default todoController;
