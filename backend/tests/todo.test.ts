import {describe, beforeAll, afterAll, afterEach, it, expect} from '@jest/globals';
import {setupDataSource, destroyDataSource, clearDataSource} from './data.utils';
import { Todo } from '../src/entity/Todo';
import { AppDataSource } from '../src/data-source';
const supertest = require('supertest');

import app from '../src/app';
const request = supertest(app)

describe('Todo tests', () => {
    beforeAll(async () => {
        await setupDataSource()
        await clearDataSource()
    })
    
    afterAll(async () => {
        await destroyDataSource();
    })
    
    afterEach(async () => {
        await clearDataSource()
    });

    it('should get all todos', async () => {
        const TodoRepository = AppDataSource.getRepository(Todo);
        const newTodo = new Todo()
        newTodo.taskName = "COMP 251 A1";
        const newTodo2 = new Todo()
        newTodo2.taskName = "MATH 223 A1";
        await TodoRepository.save(newTodo);
        await TodoRepository.save(newTodo2);
        const res = await request.get("/api/todos").send();
        expect(res.statusCode).toBe(200);
        expect(res.body.todos.length).toBe(2);
    });

    it('should add todo item', async () => {
        const newTodoItem = {
            completed: false,
            taskName: "do laundry"
        };

        const res = await request.post("/api/todos").send(newTodoItem);
        expect(res.statusCode).toBe(200);
        expect(res.body.todo.completed).toBe(false);
        expect(res.body.todo.taskName).toBe("do laundry");
    });

    it('should update todo item', async () => {
        const TodoRepository = AppDataSource.getRepository(Todo);
        const newTodo = new Todo()
        newTodo.taskName = "COMP 251 A1";
        const savedTodo = await TodoRepository.save(newTodo);
        const res = await request.put("/api/todo/"+savedTodo.id).send({completed: true});
        expect(res.body.todo.completed).toBe(true);
        expect(res.body.todo.taskName).toBe("COMP 251 A1");
    });
});