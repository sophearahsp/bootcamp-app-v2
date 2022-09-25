import * as express from "express";
import { router as todo} from "./todo.route";


export const api = express.Router();

api.use(todo);