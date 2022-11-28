// Import modules from node_modules
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";

// Import from other .ts files
import { AppDataSource } from "./data-source";
import { api } from "./routes";

// Create express app
const app = express();

// Initalizes the Data Source
AppDataSource.initialize().then(async () => {
    // Using third party middleware
    app.use(bodyParser.json());
    app.use(cors());

    // Using router level middleware 
    app.use("/api", api);

    // Starts server and listens on port 3001 for connections
    app.listen(3001);
})

// More on middlware
// https://expressjs.com/en/guide/using-middleware.html

export default app;