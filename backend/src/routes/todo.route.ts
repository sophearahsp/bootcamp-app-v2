import * as express from "express";
import { TodoController } from "../controller/TodoController";

// Create a router object
export const router = express.Router();

// Create an instance of the TodoController
const todoController = new TodoController();

// Create routes from the todoController functions
router.get("/todos/", todoController.getAllTodos);
router.post("/todos/", todoController.addTodo);
router.put("/todo/:id", todoController.updateTodo);
router.delete("/todo/:id", todoController.deleteTodo);
