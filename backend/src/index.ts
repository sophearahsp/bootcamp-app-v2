import express from "express";
const app = express();

app.get("/hardcoded-todo", (req, res) => {
    const hardcodedTodo = {
        "completed": false,
        "id": 1000,
        "taskName": "COMP 251 A1"
    }

    res.json(hardcodedTodo)
})

app.listen(3000);
