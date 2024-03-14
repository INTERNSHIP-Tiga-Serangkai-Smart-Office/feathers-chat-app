"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mssql = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/databases.html
const knex_1 = __importDefault(require("knex"));
const mssql = (app) => {
    const config = app.get('mssql');
    const db = (0, knex_1.default)(config);
    app.set('mssqlClient', db);
};
exports.mssql = mssql;
//# sourceMappingURL=mssql.js.map