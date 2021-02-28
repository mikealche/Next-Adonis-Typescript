/// <reference types="@adonisjs/application/build/adonis-typings/application" />
import { ApplicationContract } from '@ioc:Adonis/Core/Application';
export default class AppProvider {
    protected app: ApplicationContract;
    static needsApplication: boolean;
    constructor(app: ApplicationContract);
    register(): void;
    boot(): Promise<void>;
    ready(): Promise<void>;
    shutdown(): Promise<void>;
}
