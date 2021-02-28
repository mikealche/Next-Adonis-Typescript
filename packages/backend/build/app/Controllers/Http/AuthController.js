"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../../Models/User"));
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class AuthController {
    async me({ auth }) {
        const user = await auth.use('api').authenticate();
        await new Promise((resolve) => setTimeout(resolve, 30000000));
        return user;
    }
    async signup({ auth, request, }) {
        const validated = await request.validate({
            schema: Validator_1.schema.create({
                email: Validator_1.schema.string({}, [
                    Validator_1.rules.email(),
                    Validator_1.rules.unique({ table: 'users', column: 'email' }),
                ]),
            }),
            messages: {
                'email.unique': 'Email already exists',
            },
        });
        console.log({ validated });
        const email = request.input('email');
        const password = request.input('password');
        const user = await User_1.default.create({ email, password });
        const token = await auth.use('api').login(user);
        return token;
    }
    async login({ auth, request, }) {
        const email = request.input('email');
        const password = request.input('password');
        const token = await auth.use('api').attempt(email, password);
        return token;
    }
}
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map