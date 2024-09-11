import { Request, Response } from "express";

const todos = [
  {
    id: 1,
    text: "Buy milk",
    createdAt: new Date(),
  },
  {
    id: 2,
    text: "Buy fish",
    createdAt: null,
  },
  {
    id: 3,
    text: "Buy chips",
    createdAt: new Date(),
  },
];

export class TodosController {
  constructor() {}
  public getAll(req: Request, res: Response) {
    return res.json(todos);
  }
  public get(req: Request, res: Response) {
    const id = +req.params.id;
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) {
      res.status(404).json({
        error: `TODO with id: ${id} not found`,
      });
    }
    return res.json(todo);
  }
  public post(req: Request, res: Response) {
    const { text } = req.body;
    const newTodo = {
      id: todos[todos.length - 1].id++,
      text,
      createdAt: new Date(),
    };
    todos.unshift(newTodo);

    return res.status(201).json(newTodo);
  }
  public put(req: Request, res: Response) {
    const { id, text } = req.body;
    todos.forEach((todo) => {
      if (todo.id === +id) {
        todo.text = text;
      }
    });
    return res.json(todos.find((todo) => todo.id === +id));
  }
  public delete(req: Request, res: Response) {
    const id = req.params.id;
    const toFind = todos.find((todo) => todo.id === +id);
    if (!toFind) {
      return res.status(400).json({
        error: `TODO with id: ${id} not found`,
      });
    }
    const index = todos.indexOf(toFind);
    todos.splice(index, 1);
    return res.json(toFind);
  }
}
