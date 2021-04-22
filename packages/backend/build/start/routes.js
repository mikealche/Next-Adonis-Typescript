"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
const shared_1 = require("@template/shared");
const flattenedRoutes = Object.values(shared_1.routes).flatMap((routeTopic) => Object.values(routeTopic));
for (const { route, method, controller, isProtected, requiredRoles } of Object.values(flattenedRoutes)) {
    let definedRoute = Route_1.default[method](route, controller);
    if (isProtected) {
        definedRoute.middleware(['auth']);
    }
    if (requiredRoles) {
        console.log({ requiredRoles });
        definedRoute.middleware([`role:${requiredRoles.join(':')}`]);
    }
}
Route_1.default.get('/', async () => {
    return { hello: 'world' };
});
//# sourceMappingURL=routes.js.map