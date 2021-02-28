import { DateTime } from 'luxon';
import { BaseModel } from '@ioc:Adonis/Lucid/Orm';
export default class User extends BaseModel {
    id: number;
    email: string;
    password: string;
    rememberMeToken?: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    static hashPassword(user: User): Promise<void>;
}
