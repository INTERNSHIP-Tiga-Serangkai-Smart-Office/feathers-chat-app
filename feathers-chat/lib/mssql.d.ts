import type { Knex } from 'knex';
import type { Application } from './declarations';
declare module './declarations' {
    interface Configuration {
        mssqlClient: Knex;
    }
}
export declare const mssql: (app: Application) => void;
