/// <reference types="@adonisjs/http-server/build/adonis-typings" />
/// <reference types="@adonisjs/auth" />
import { OpaqueTokenContract } from '@ioc:Adonis/Addons/Auth';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import User from '../../Models/User';
export default class AuthController {
    me({ auth }: HttpContextContract): Promise<User>;
    signup({ auth, request, }: HttpContextContract): Promise<ReturnType<OpaqueTokenContract<User>['toJSON']>>;
    login({ auth, request, }: HttpContextContract): Promise<ReturnType<OpaqueTokenContract<User>['toJSON']>>;
}
