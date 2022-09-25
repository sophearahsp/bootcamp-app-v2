import * as express from "express";
import { AppDataSource } from "./data-source"

AppDataSource.initialize().then(async () => {
    const app = express();

    app.listen(3000);
})
