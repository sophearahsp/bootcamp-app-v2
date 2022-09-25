import * as express from "express";
import { AppDataSource } from "./data-source"
import { Todo } from "./entity/Todo";
import { TodoController } from "./controller/TodoController";
import { api } from "./routes";

AppDataSource.initialize().then(async () => {
    const app = express();

    app.use("/api", api);

    app.listen(3000);
})
