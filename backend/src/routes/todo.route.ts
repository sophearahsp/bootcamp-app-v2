import * as express from "express";
import { TodoController } from "../controller/TodoController";

export const router = express.Router();

const todoController = new TodoController();
router.get("/todos/", todoController.getAllTodos);
router.post("/todos/", todoController.addTodo);
router.put("/todo/:id", todoController.updateTodo);
