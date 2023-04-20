import Redis from "ioredis";
import { REDIS_PORT, REDIS_HOST } from "../../config/index.js";

const redis = new Redis({
  port: REDIS_PORT,
  host: REDIS_HOST,
});

redis.on("error", (err) => console.error(err));

export default redis;
