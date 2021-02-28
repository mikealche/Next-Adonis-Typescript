/// <reference types="@adonisjs/http-server/build/adonis-typings" />
/// <reference types="@adonisjs/auth" />
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
export default class AuthMiddleware {
    protected redirectTo: string;
    protected authenticate(auth: HttpContextContract['auth'], guards: any[]): Promise<boolean>;
    handle({ auth }: HttpContextContract, next: () => Promise<void>, customGuards: string[]): Promise<void>;
}
