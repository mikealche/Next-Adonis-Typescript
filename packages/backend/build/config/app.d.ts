/// <reference types="@adonisjs/http-server/build/adonis-typings" />
/// <reference types="@adonisjs/logger/build/adonis-typings/logger" />
/// <reference types="@adonisjs/profiler/build/adonis-typings/profiler" />
/// <reference types="@adonisjs/validator" />
import { ServerConfig } from '@ioc:Adonis/Core/Server';
import { LoggerConfig } from '@ioc:Adonis/Core/Logger';
import { ProfilerConfig } from '@ioc:Adonis/Core/Profiler';
import { ValidatorConfig } from '@ioc:Adonis/Core/Validator';
export declare const appKey: string;
export declare const http: ServerConfig;
export declare const logger: LoggerConfig;
export declare const profiler: ProfilerConfig;
export declare const validator: ValidatorConfig;
