"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const Application_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Application"));
const databaseConfig = {
    connection: Env_1.default.get('DB_CONNECTION'),
    connections: {
        pg: {
            client: 'pg',
            connection: Application_1.default.inProduction
                ? Env_1.default.get('DATABASE_URL') + '?ssl=no-verify'
                : {
                    host: Env_1.default.get('PG_HOST'),
                    port: Env_1.default.get('PG_PORT'),
                    user: Env_1.default.get('PG_USER'),
                    password: Env_1.default.get('PG_PASSWORD', ''),
                    database: Env_1.default.get('PG_DB_NAME'),
                },
            healthCheck: Application_1.default.inDev,
            debug: Application_1.default.inDev,
        },
    },
    orm: {},
};
exports.default = databaseConfig;
//# sourceMappingURL=database.js.map