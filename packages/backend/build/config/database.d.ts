/// <reference types="@adonisjs/lucid" />
import { OrmConfig } from '@ioc:Adonis/Lucid/Orm';
import { DatabaseConfig } from '@ioc:Adonis/Lucid/Database';
declare const databaseConfig: DatabaseConfig & {
    orm: Partial<OrmConfig>;
};
export default databaseConfig;
