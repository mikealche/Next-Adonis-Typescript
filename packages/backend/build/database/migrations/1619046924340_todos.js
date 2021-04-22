"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Todos extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'todos';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('text');
            table.boolean('completed');
            table
                .integer('user_id')
                .references('id')
                .inTable('users')
                .notNullable()
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            table.timestamps(true);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Todos;
//# sourceMappingURL=1619046924340_todos.js.map