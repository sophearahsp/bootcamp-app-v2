import {describe, beforeAll, afterAll, beforeEach} from '@jest/globals';
import {setupDataSource, destroyDataSource, clearDataSource} from './data.utils';

describe('Todo tests', () => {
    beforeAll(async () => {
        await setupDataSource()
    })
    
    afterAll(async () => {
        await destroyDataSource()
    })
    
    beforeEach(async () => {
        await clearDataSource()
    });
});