import { Router } from "express";
import { TodosController } from "@/presentation/todos/controller";

export class TodoRoutes {
  static get routes(): Router {
    const router = Router();

    const todosController = new TodosController();

    router.get("/", todosController.getAll);
    router.get("/:id", todosController.get);
    router.post("/", todosController.post);
    router.put("/", todosController.put);
    router.delete("/:id", todosController.delete);

    return router;
  }
}
