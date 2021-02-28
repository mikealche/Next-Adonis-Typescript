"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SilentAuthMiddleware {
    async handle({ auth }, next) {
        await auth.check();
        await next();
    }
}
exports.default = SilentAuthMiddleware;
//# sourceMappingURL=SilentAuth.js.map