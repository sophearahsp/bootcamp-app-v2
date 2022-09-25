import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import { AppDataSource } from "./data-source";
import { api } from "./routes";

AppDataSource.initialize().then(async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());

    app.use("/api", api);

    app.listen(3001);
})
