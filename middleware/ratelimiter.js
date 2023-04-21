import redis from "../src/utils/redisService.js";
import { RateLimiterMemory, RateLimiterRedis } from "rate-limiter-flexible";

const rateLimiterMemory = new RateLimiterMemory({
  points: 60,
  duration: 60,
});

const rateLimiter = new RateLimiterRedis({
  storeClient: redis,
  points: 20, // Number of points/requests
  duration: 60, // Per 60 seconds,
  inmemoryBlockOnConsumed: 100, // If userId or IP consume >=301 points per minute
  inmemoryBlockDuration: 60, // Block it for a minute in memory, so no requests go to Redis
  insuranceLimiter: rateLimiterMemory,
});

export const limiter = async (req, res, next) => {
  rateLimiter
    .consume(req.ip)
    .then((a) => {
      next();
    })
    .catch((_) => {
      res.status(429).send({ statusCode: 429, message: "Too many requests" });
    });
};
