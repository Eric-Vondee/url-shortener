import Redis from "ioredis";
import { REDIS_PORT, REDIS_HOST, REDIS_USERNAME, REDIS_PASSWORD } from "../../config/index.js";

const redis = new Redis({
  port: REDIS_PORT,
  host: REDIS_HOST,
  username: REDIS_USERNAME,
  password: REDIS_PASSWORD
});

redis.on("error", (err) => console.error(err));

export default redis;
