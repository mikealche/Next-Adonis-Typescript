/// <reference types="@adonisjs/lucid" />
import { DateTime } from 'luxon';
import { BaseModel } from '@ioc:Adonis/Lucid/Orm';
import User from './User';
import { BelongsTo } from '@ioc:Adonis/Lucid/Orm';
export default class Todo extends BaseModel {
    id: number;
    user: BelongsTo<typeof User>;
    text: string;
    userId: number;
    createdAt: DateTime;
    updatedAt: DateTime;
}
