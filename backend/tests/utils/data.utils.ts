import { AppDataSource } from '../../src/data-source';

export default class DataSourceHelper {
    static setupDataSource = async () => {
        await AppDataSource.initialize()
    }

    static destroyDataSource = async () => {
        await AppDataSource.destroy()
    }

    static clearDataSource = async () => {
        const entities = AppDataSource.entityMetadatas;
        for (const entity of entities) {
            const repository = await AppDataSource.getRepository(entity.name);
            await repository.query(`TRUNCATE ${entity.tableName} RESTART IDENTITY CASCADE;`);
        }
    }
}