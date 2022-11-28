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
        newTodo2.taskName = "PSYC 538 10a";
        await TodoRepository.save(newTodo);
        await TodoRepository.save(newTodo2);
        const res = await request.get("/api/todos").send();
        expect(res.statusCode).toBe(200);
        expect(res.body.todos.length).toBe(2);
    });
});