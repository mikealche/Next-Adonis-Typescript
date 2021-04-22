"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Todo_1 = __importDefault(require("../../Models/Todo"));
class TodosController {
    async getForUser({ auth }) {
        const user = await auth.use('api').authenticate();
        const todos = await Todo_1.default.findBy('user_id', user.id);
        return todos;
    }
    async index() {
        return Todo_1.default.all();
    }
}
exports.default = TodosController;
//# sourceMappingURL=TodosController.js.map