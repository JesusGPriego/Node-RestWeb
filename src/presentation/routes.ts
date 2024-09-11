import { Router } from "express";
import { TodoRoutes } from "@/presentation/todos/routes";

export class AppRoutes {
  static get(): Router {
    const router = Router();
    router.use("/api/todos", TodoRoutes.routes);

    return router;
  }
}
