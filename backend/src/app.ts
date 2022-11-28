// Import modules from node_modules
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";

// Import from other .ts files
import { api } from "./routes";

// Create express app
const app = express();

// Using third party middleware
app.use(bodyParser.json());
app.use(cors());

// Using router level middleware 
app.use("/api", api);

export default app;