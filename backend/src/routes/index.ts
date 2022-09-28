import * as express from "express";
import { router as todo } from "./todo.route";

// Create a router object
export const api = express.Router();

// Adds the routes from todo.route to this router
api.use(todo);