/// <reference types="@adonisjs/http-server/build/adonis-typings" />
/// <reference types="@adonisjs/auth" />
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Todo from '../../Models/Todo';
export default class TodosController {
    getForUser({ auth }: HttpContextContract): Promise<Todo | null>;
    index(): Promise<Todo[]>;
}
