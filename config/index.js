import * as dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || "";
export const REDIS_HOST = process.env.REDIS_HOST || "";
export const REDIS_PORT = process.env.REDIS_PORT || "";
export const REDIS_USERNAME=process.env.REDIS_USERNAME || ""
export const REDIS_PASSWORD = process.env.REDIS_PASSWORD || ""
export const BASE_URL = process.env.BASE_URL || "";
export const DB_HOST = process.env.DB_HOST || "";
export const DB_USER = process.env.DB_USER || "";
export const DB_PASSWORD = process.env.DB_PASSWORD || "";
export const DB_NAME = process.env.DB_NAME || "";
export const NODE_ENV = process.env.NODE_ENV || "";
