/// <reference types="@adonisjs/lucid" />
import { DateTime } from 'luxon';
import { BaseModel, HasMany } from '@ioc:Adonis/Lucid/Orm';
import Todo from 'App/Models/Todo';
export default class User extends BaseModel {
    id: number;
    email: string;
    password: string;
    rememberMeToken?: string;
    role: 'regular' | 'admin';
    todos: HasMany<typeof Todo>;
    createdAt: DateTime;
    updatedAt: DateTime;
    static hashPassword(user: User): Promise<void>;
}
