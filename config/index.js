import * as dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || "";
export const REDIS_HOST = process.env.REDIS_HOST || "";
export const REDIS_PORT = process.env.REDIS_PORT || "";
export const REDIS_USERNAME = process.env.REDIS_USERNAME || "";
export const REDIS_PASSWORD = process.env.REDIS_PASSWORD || "";
export const BASE_URL = process.env.BASE_URL || "";
export const POSTGRES_HOST = process.env.POSTGRES_HOST || "";
export const POSTGRES_USER = process.env.POSTGRES_USER || "";
export const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD || "";
export const POSTGRES_DB = process.env.POSTGRES_DB || "";
export const NODE_ENV = process.env.NODE_ENV || "";
export const POSTGRES_PORT = process.env.POSTGRES_PORT || "";
