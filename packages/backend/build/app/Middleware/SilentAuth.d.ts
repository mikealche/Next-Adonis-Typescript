/// <reference types="@adonisjs/http-server/build/adonis-typings" />
/// <reference types="@adonisjs/auth" />
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
export default class SilentAuthMiddleware {
    handle({ auth }: HttpContextContract, next: () => Promise<void>): Promise<void>;
}
