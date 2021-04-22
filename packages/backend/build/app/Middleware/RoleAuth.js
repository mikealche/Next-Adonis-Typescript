"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RoleAuthMiddleware {
    async handle({ auth }, next, roles) {
        const user = await auth.authenticate();
        if (!roles.includes(user.role)) {
            throw new Error('Permission denied');
        }
        await next();
    }
}
exports.default = RoleAuthMiddleware;
//# sourceMappingURL=RoleAuth.js.map