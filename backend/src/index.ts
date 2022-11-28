import app from "./app";
import { AppDataSource } from "./data-source";
AppDataSource.initialize();
app.listen(3001);