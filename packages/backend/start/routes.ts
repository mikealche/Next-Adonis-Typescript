/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import { routes } from '@template/shared'
import { RouteObject } from '@template/shared/dist/routeObject'

const flattenedRoutes = Object.values(routes).flatMap((routeTopic) =>
  Object.values(routeTopic)
) as RouteObject<any, any>[]

for (const { route, method, controller, isProtected, requiredRoles } of Object.values(
  flattenedRoutes
)) {
  let definedRoute = Route[method](route, controller)
  if (isProtected) {
    definedRoute.middleware(['auth'])
  }
  if (requiredRoles) {
    definedRoute.middleware([`role:${requiredRoles.join(':')}`])
  }
}

Route.get('/', async () => {
  return { hello: 'world' }
})
