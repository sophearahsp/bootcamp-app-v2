import { AppDataSource } from '../../src/data-source';

export const setupDataSource = async () => {
    await AppDataSource.initialize()
}

export const destroyDataSource = async () => {
    await AppDataSource.destroy()
}

export const clearDataSource = async () => {
    const entities = AppDataSource.entityMetadatas;
    for (const entity of entities) {
        const repository = await AppDataSource.getRepository(entity.name);
        await repository.query(`TRUNCATE ${entity.tableName} RESTART IDENTITY CASCADE;`);
    }
}