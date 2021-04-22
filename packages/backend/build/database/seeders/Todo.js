"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class TodoSeeder extends Seeder_1.default {
    async run() {
        const user = await User_1.default.first();
        user === null || user === void 0 ? void 0 : user.related('todos').createMany([
            {
                text: 'Start project',
            },
            {
                text: 'Push to github',
            },
            {
                text: 'Deploy to production',
            },
        ]);
    }
}
exports.default = TodoSeeder;
//# sourceMappingURL=Todo.js.map